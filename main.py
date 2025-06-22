from tth_structures import load_article_structures, load_hierarchy, build_hierarchical_articles, build_hierarchical_articles_sequential
from tth_parser import parse_tth_file
import re
import json

# =============================
# Script principal de démonstration
# =============================
# Ce script charge la structure des articles et parse un fichier TTH réel.
# Il exporte tous les champs du premier article 50 extrait pour contrôle complet.
# Il exporte la liste complète des champs détectés pour la structure 50 pour diagnostic.
# =============================

# Chemins des fichiers de structure et de données
STRUCTURE_JS = 'doc/structures_tth.js'
TTH_FILE = 'datas/houbas_stth_1722061503.dat'
CONTROLE_ALL_FIELDS_FILE = 'controle_article_50_all_fields.txt'
DEBUG_STRUCTURE_FILE = 'debug_structure_50.txt'
DEBUG_BLOC_FILE = 'debug_bloc_50.txt'

if __name__ == '__main__':
    # Chargement de la structure des articles
    print('Chargement des structures d\'articles...')
    structures = load_article_structures(STRUCTURE_JS, encoding='utf-8')
    print(f'{len(structures)} structures chargées.')

    # Export de la structure 50 pour diagnostic
    struct_50 = structures.get('50')
    with open(DEBUG_STRUCTURE_FILE, 'w', encoding='utf-8') as f:
        if struct_50:
            print(f"Structure 50 : {len(struct_50.fields)} champs\n")
            f.write(f"Structure 50 : {len(struct_50.fields)} champs\n\n")
            for field in struct_50.fields:
                line = f"{field.name:25} | start={field.start:3} | length={field.length:3} | label: {field.label}"
                print(line)
                f.write(line + "\n")
        else:
            print("Aucune structure 50 détectée.")
            f.write("Aucune structure 50 détectée.\n")
    print(f"\nStructure 50 exportée dans {DEBUG_STRUCTURE_FILE}")

    # Parsing du fichier TTH
    print(f'\nParsing du fichier TTH : {TTH_FILE}')
    articles = parse_tth_file(TTH_FILE, structures)
    print(f'{len(articles)} articles extraits.')

    # Export de tous les champs du premier article 50
    articles_50 = [a for a in articles if a.code == '50']
    if articles_50:
        struct_50 = structures.get('50')
        first_50 = articles_50[0]
        with open(TTH_FILE, 'r', encoding='windows-1252') as f:
            for i, line in enumerate(f):
                if i == 1:  # 2ème ligne = premier article 50
                    raw_line = line.rstrip('\r\n')
                    break
        with open(CONTROLE_ALL_FIELDS_FILE, 'w', encoding='utf-8') as f:
            f.write("Tous les champs du premier article 50\n\n")
            f.write(f"Ligne brute (longueur {len(raw_line)}):\n{raw_line}\n\n")
            count = 0
            if struct_50:
                for field in struct_50.fields:
                    start = field.start
                    end = start + field.length
                    extrait = raw_line[start:end] if end <= len(raw_line) else raw_line[start:]
                    value = first_50.values.get(field.name, "")
                    f.write(f"{field.name:25} | start={field.start:3} | length={field.length:3} | extrait: '{extrait}' | value: '{value}' | label: {field.label}\n")
                    count += 1
            f.write(f"\nNombre total de champs exportés : {count}\n")
        print(f"\nTous les champs du premier article 50 ont été exportés dans {CONTROLE_ALL_FIELDS_FILE}")
    else:
        print("Aucun article de code '50' trouvé.")

    print('Extraction du bloc brut de la structure 50...')
    with open(STRUCTURE_JS, 'r', encoding='utf-8') as f:
        content = f.read()
    pattern = re.compile(r'const structure_article_50\s*=\s*\[(.*?)\]\s*;?', re.DOTALL)
    match = pattern.search(content)
    with open(DEBUG_BLOC_FILE, 'w', encoding='utf-8') as f:
        if match:
            bloc = match.group(1)
            print('Bloc extrait :\n', bloc[:200], '...')
            f.write('Bloc extrait pour structure_article_50 :\n\n')
            f.write(bloc)
        else:
            print('Aucun bloc trouvé pour structure_article_50.')
            f.write('Aucun bloc trouvé pour structure_article_50.\n')
    print(f"\nBloc brut exporté dans {DEBUG_BLOC_FILE}")

    # Chargement de la hiérarchie des articles
    print("\nChargement de la hiérarchie des articles...")
    hierarchy = load_hierarchy('doc/hierarchie_articles_tth_JSON.json', encoding='utf-8')
    print(f"{len(hierarchy)} racines de hiérarchie chargées.")

    # Construction de la structure hiérarchique
    print("\nConstruction de la structure hiérarchique des articles (mode séquentiel)...")
    hierarchical_articles = build_hierarchical_articles_sequential(articles, hierarchy)
    print(f"{len(hierarchical_articles)} articles racines hiérarchiques.")
    # Affichage d'un résumé de la hiérarchie (exemple)
    def print_hierarchy(arts, level=0, max_depth=2):
        for art in arts:
            print("  " * level + f"- Article {art.code} ({len(art.children)} enfants)")
            if level < max_depth:
                print_hierarchy(art.children, level+1, max_depth)
    print("\nRésumé de la hiérarchie extraite (profondeur 2):")
    print_hierarchy(hierarchical_articles, max_depth=2)

    # === Affichage et export d'un exemple précis ===
    # Recherche du premier article 50 dans la hiérarchie
    def find_first_50(arts):
        for art in arts:
            if art.code == '50':
                return art
            res = find_first_50(art.children)
            if res:
                return res
        return None
    first_50 = find_first_50(hierarchical_articles)
    if first_50:
        print("\nExemple détaillé du premier article 50 et de sa hiérarchie :")
        def print_article_tree(art, level=0, max_depth=3):
            indent = '  ' * level
            print(f"{indent}- Article {art.code} | Champs principaux : {list(art.values.items())[:3]} | {len(art.children)} enfants")
            if level < max_depth:
                for child in art.children:
                    print_article_tree(child, level+1, max_depth)
        print_article_tree(first_50, max_depth=3)
        # Export JSON complet
        def article_to_dict(art):
            return {
                'code': art.code,
                'values': art.values,
                'children': [article_to_dict(c) for c in art.children]
            }
        with open('exemple_article_50.json', 'w', encoding='utf-8') as f:
            json.dump(article_to_dict(first_50), f, ensure_ascii=False, indent=2)
        print("\nExport JSON complet du premier article 50 (avec enfants) dans exemple_article_50.json")
    else:
        print("Aucun article 50 trouvé dans la hiérarchie.") 