from tth_structures import load_article_structures, load_hierarchy, build_hierarchical_articles, build_hierarchical_articles_sequential
from tth_parser import parse_tth_file
import re
import json
import argparse

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

def parse_and_build_hierarchy(tth_file, struct_file, hierarchy_file):
    """
    Parse le fichier TTH, charge la structure et la hiérarchie, et construit l'arbre hiérarchique.
    Retourne la liste hiérarchique d'articles.
    """
    structures = load_article_structures(struct_file, encoding='utf-8')
    articles = parse_tth_file(tth_file, structures)
    hierarchy = load_hierarchy(hierarchy_file, encoding='utf-8')
    hierarchical_articles = build_hierarchical_articles_sequential(articles, hierarchy)
    return hierarchical_articles

def export_ndjson(hierarchical_articles, article_type, output_file):
    """
    Exporte tous les articles du type demandé (et leur hiérarchie) en NDJSON.
    """
    def find_all_type(arts, code):
        for art in arts:
            if code == 'all' or art.code == code:
                yield art
            yield from find_all_type(art.children, code)
    def article_to_dict(art):
        return {
            'code': art.code,
            'values': art.values,
            'children': [article_to_dict(c) for c in art.children]
        }
    nb_exportes = 0
    with open(output_file, 'w', encoding='utf-8') as f:
        for art in find_all_type(hierarchical_articles, article_type):
            f.write(json.dumps(article_to_dict(art), ensure_ascii=False) + '\n')
            nb_exportes += 1
    print(f"Export NDJSON terminé : {nb_exportes} articles exportés dans {output_file}")

def afficher_exemple(hierarchical_articles, article_type):
    """
    Affiche un exemple détaillé du premier article du type demandé.
    """
    def find_first_type(arts, code):
        for art in arts:
            if art.code == code:
                return art
            res = find_first_type(art.children, code)
            if res:
                return res
        return None
    first = find_first_type(hierarchical_articles, article_type)
    if first:
        print(f"\nExemple détaillé du premier article {article_type} et de sa hiérarchie :")
        def print_article_tree(art, level=0, max_depth=3):
            champs_principaux = list(art.values.items())[:3]
            print("  " * level + f"- Article {art.code} | Champs principaux : {champs_principaux} | {len(art.children)} enfants")
            if level < max_depth:
                for c in art.children:
                    print_article_tree(c, level+1, max_depth)
        print_article_tree(first)
    else:
        print(f"Aucun article {article_type} trouvé.")

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Convertisseur TTH -> NDJSON avec gestion de la hiérarchie.")
    parser.add_argument('--tth-file', required=True, help='Fichier source TTH à parser (.dat)')
    parser.add_argument('--struct-file', default='doc/structures_tth.js', help='Fichier de structure JS (par défaut: doc/structures_tth.js)')
    parser.add_argument('--hierarchy-file', default='doc/hierarchie_articles_tth_JSON.json', help='Fichier de hiérarchie JSON (par défaut: doc/hierarchie_articles_tth_JSON.json)')
    parser.add_argument('--article-type', default='50', help='Type d\'article à exporter (ex: 50, ou all pour tous)')
    parser.add_argument('--output', default='export_tth.ndjson', help='Fichier de sortie NDJSON (par défaut: export_tth.ndjson)')
    parser.add_argument('--example', action='store_true', help='Afficher un exemple détaillé du premier article du type demandé')
    args = parser.parse_args()

    # Pipeline principal
    hierarchical_articles = parse_and_build_hierarchy(args.tth_file, args.struct_file, args.hierarchy_file)
    export_ndjson(hierarchical_articles, args.article_type, args.output)
    if args.example:
        afficher_exemple(hierarchical_articles, args.article_type)
