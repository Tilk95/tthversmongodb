from dataclasses import dataclass, field
from typing import List, Dict, Optional
import json
import re
from pathlib import Path

# =============================
# Représentation d'un champ d'article TTH
# =============================
@dataclass
class TTHField:
    """
    Représente un champ d'un article TTH.
    - name : nom du champ (ex: 'numTribu')
    - start : position de début dans la ligne (1-based)
    - length : longueur du champ
    - type : type du champ (optionnel, souvent vide)
    - range : plage de valeurs possibles (optionnel)
    - export_name : nom d'export (optionnel)
    - exp_index : index d'export (optionnel)
    - label : libellé humain du champ
    """
    name: str
    start: int
    length: int
    type: str = ""
    range: str = ""
    export_name: str = ""
    exp_index: str = ""
    label: str = ""

# =============================
# Représentation de la structure d'un article TTH
# =============================
@dataclass
class TTHArticleStructure:
    """
    Représente la structure d'un article TTH (ex: article 50, 52, etc.).
    - code : code de l'article (ex: '50')
    - fields : liste des champs de l'article
    """
    code: str
    fields: List[TTHField]

# =============================
# Représentation d'un noeud de la hiérarchie des articles
# =============================
@dataclass
class TTHHierarchyNode:
    """
    Représente un noeud de la hiérarchie des articles TTH.
    - code : code de l'article (ex: '50')
    - label : libellé humain
    - children : dictionnaire des enfants (clé = code, valeur = sous-noeud)
    """
    code: str
    label: str
    children: Dict[str, 'TTHHierarchyNode'] = field(default_factory=dict)

# =============================
# Représentation des données extraites d'un article TTH
# =============================
@dataclass
class TTHArticleData:
    """
    Représente les données extraites d'un article TTH après parsing.
    - code : code de l'article (ex: '50')
    - values : dictionnaire des valeurs extraites (clé = nom du champ)
    - children : liste d'articles enfants selon la hiérarchie
    """
    code: str
    values: Dict[str, str]
    children: List['TTHArticleData'] = field(default_factory=list)

def load_article_structures(js_path: str, encoding: str = 'windows-1252') -> dict:
    """
    Charge les structures d'articles TTH à partir d'un fichier JS.
    Args:
        js_path: chemin du fichier JS (ex: 'doc/structures_tth.js')
        encoding: encodage du fichier (par défaut 'windows-1252')
    Returns:
        Dictionnaire {code_article: TTHArticleStructure}
    """
    structures = {}
    # Recherche de chaque déclaration de structure
    with open(js_path, 'r', encoding=encoding) as f:
        lines = f.readlines()
    i = 0
    while i < len(lines):
        line = lines[i]
        m = re.match(r'const structure_article_([A-Za-z0-9_]+)\s*=\s*\[', line)
        if m:
            code = m.group(1)
            bloc_lines = []
            bracket_count = 0
            # Cherche le début du bloc
            if '[' in line:
                bracket_count += line.count('[')
                bracket_count -= line.count(']')
                bloc_lines.append(line.split('[',1)[1])
            i += 1
            # Lis jusqu'à la fermeture du bloc
            while i < len(lines) and bracket_count > 0:
                l = lines[i]
                bracket_count += l.count('[')
                bracket_count -= l.count(']')
                bloc_lines.append(l)
                i += 1
            bloc = ''.join(bloc_lines)
            # On parse chaque ligne individuellement
            fields = []
            for l in bloc.splitlines():
                l = l.strip()
                if not l or l.startswith('/*') or l.startswith('//'):
                    continue
                if not l.startswith('['):
                    continue
                l = l.rstrip(',').strip('[]')
                parts = [p.strip().strip('"\'') for p in l.split(',')]
                while len(parts) < 8:
                    parts.append("")
                field = TTHField(
                    name=parts[0],
                    start=int(parts[1]) if parts[1].isdigit() else 0,
                    length=int(parts[2]) if parts[2].isdigit() else 0,
                    type=parts[3],
                    range=parts[4],
                    export_name=parts[5],
                    exp_index=parts[6],
                    label=parts[7],
                )
                fields.append(field)
            if fields:
                structures[code] = TTHArticleStructure(code=code, fields=fields)
        else:
            i += 1
    return structures

def load_hierarchy(json_path: str, encoding: str = 'windows-1252') -> dict:
    """
    Charge la hiérarchie des articles TTH à partir d'un fichier JSON.
    Args:
        json_path: chemin du fichier JSON (ex: 'doc/hierarchie_articles_tth_JSON.json')
        encoding: encodage du fichier (par défaut 'windows-1252')
    Returns:
        Dictionnaire {code_article: TTHHierarchyNode}
    """
    try:
        with open(json_path, 'r', encoding=encoding) as f:
            data = json.load(f)
    except UnicodeDecodeError as e:
        raise RuntimeError(f"Erreur d'encodage lors de la lecture de {json_path}: {e}")

    def build_node(code: str, node_dict: dict) -> TTHHierarchyNode:
        label = node_dict.get('label', '')
        children = node_dict.get('children', {})
        return TTHHierarchyNode(
            code=code,
            label=label,
            children={k: build_node(k, v) for k, v in children.items()}
        )

    return {k: build_node(k, v) for k, v in data.items()}

def build_hierarchical_articles(articles: List[TTHArticleData], hierarchy: Dict[str, TTHHierarchyNode]) -> List[TTHArticleData]:
    """
    Construit la structure hiérarchique des articles à partir d'une liste plate et de la hiérarchie.
    Args:
        articles: liste plate d'articles extraits (ordre du fichier)
        hierarchy: dictionnaire {code_article: TTHHierarchyNode}
    Returns:
        Liste d'articles racines (ex: 50) avec leurs enfants imbriqués dans .children
    """
    # Indexation des articles par code pour accès rapide
    from collections import defaultdict, deque
    articles_by_code = defaultdict(deque)
    for art in articles:
        articles_by_code[art.code].append(art)

    def attach_children(parent_code: str, parent_node: TTHArticleData, hier_node: TTHHierarchyNode):
        for child_code, child_hier in hier_node.children.items():
            while articles_by_code[child_code]:
                child_article = articles_by_code[child_code].popleft()
                attach_children(child_code, child_article, child_hier)
                parent_node.children.append(child_article)

    # On construit la hiérarchie à partir des racines du JSON (ex: '01', '02')
    racines = []
    for root_code, root_hier in hierarchy.items():
        while articles_by_code[root_code]:
            root_article = articles_by_code[root_code].popleft()
            attach_children(root_code, root_article, root_hier)
            racines.append(root_article)
    # S'il reste des articles non rattachés, on les ajoute à plat
    for code, dq in articles_by_code.items():
        racines.extend(list(dq))
    return racines

def build_hierarchical_articles_sequential(articles: List[TTHArticleData], hierarchy: Dict[str, TTHHierarchyNode]) -> List[TTHArticleData]:
    """
    Construit la hiérarchie des articles en respectant l'ordre séquentiel du fichier TTH.
    Utilise une pile pour rattacher chaque article à son parent selon la hiérarchie JSON.
    Args:
        articles: liste plate d'articles extraits (ordre du fichier)
        hierarchy: dictionnaire {code_article: TTHHierarchyNode}
    Returns:
        Liste d'articles racines (ex: 50) avec leurs enfants imbriqués dans .children
    """
    # Création d'un mapping code -> hiérarchie pour accès rapide
    def find_hier_node(code, hier_dict):
        if code in hier_dict:
            return hier_dict[code]
        for child in hier_dict.values():
            res = find_hier_node(code, child.children)
            if res:
                return res
        return None

    racines = []
    stack = []  # pile des (article, hier_node)
    for art in articles:
        hier_node = find_hier_node(art.code, hierarchy)
        # On cherche le parent dans la pile
        while stack:
            parent_art, parent_hier = stack[-1]
            if art.code in parent_hier.children:
                # C'est un enfant du parent courant
                parent_art.children.append(art)
                stack.append((art, hier_node))
                break
            else:
                # On remonte dans la pile
                stack.pop()
        else:
            # Pas de parent trouvé, c'est une racine
            racines.append(art)
            stack = [(art, hier_node)] if hier_node else []
    return racines 