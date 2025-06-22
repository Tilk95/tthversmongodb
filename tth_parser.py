from typing import List, Dict, Optional
from tth_structures import TTHArticleStructure, TTHArticleData
import chardet


def detect_encoding(filepath: str, default: str = 'windows-1252') -> str:
    """
    Détecte automatiquement l'encodage d'un fichier en lisant un échantillon.
    Retourne l'encodage détecté ou le défaut si non détecté.
    """
    with open(filepath, 'rb') as f:
        raw = f.read(4096)
        result = chardet.detect(raw)
        encoding = result['encoding']
        if encoding is None:
            return default
        return encoding


def parse_tth_file(
    filepath: str,
    structures: Dict[str, TTHArticleStructure],
    encoding: Optional[str] = None
) -> List[TTHArticleData]:
    """
    Parse un fichier TTH ligne par ligne en utilisant les structures d'articles fournies.
    Args:
        filepath: chemin du fichier TTH à parser
        structures: dictionnaire {code_article: TTHArticleStructure}
        encoding: encodage à utiliser (si None, détection automatique puis windows-1252 par défaut)
    Returns:
        Liste d'objets TTHArticleData (non hiérarchisés)
    Raises:
        RuntimeError si un problème d'encodage est détecté
    """
    # Détection automatique de l'encodage si non fourni
    if encoding is None:
        encoding = detect_encoding(filepath)
    articles = []
    try:
        with open(filepath, 'r', encoding=encoding) as f:
            for line_num, line in enumerate(f, 1):
                line = line.rstrip('\r\n')
                if len(line) < 2:
                    continue  # Ligne vide ou incomplète
                code = line[:2].strip()
                if code not in structures:
                    # Code d'article inconnu, on ignore ou on log
                    continue
                struct = structures[code]
                values = {}
                for field in struct.fields:
                    # Extraction du champ selon la position et la longueur (base 0)
                    start = field.start
                    end = start + field.length
                    values[field.name] = line[start:end].strip()
                articles.append(TTHArticleData(code=code, values=values))
    except UnicodeDecodeError as e:
        raise RuntimeError(f"Erreur d'encodage lors de la lecture de {filepath} avec {encoding}: {e}\n"
                           f"Essayez de spécifier un autre encodage (ex: 'utf-8', 'windows-1252').")
    return articles

# Exemple d'utilisation (à commenter ou déplacer dans un main/test):
# from tth_structures import load_article_structures
# structures = load_article_structures('doc/structures_tth.js')
# articles = parse_tth_file('datas/houbas_stth_1722061503.dat', structures)
# print(articles[0]) 