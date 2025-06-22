from tth_structures import load_article_structures, load_hierarchy, build_hierarchical_articles, build_hierarchical_articles_sequential
from tth_parser import parse_tth_file
import re
import json
import argparse
import os
import glob
from datetime import datetime

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

def print_log(message):
    print(f"[{datetime.now().strftime('%Y-%m-%d %H:%M:%S')}] {message}")

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
    parser.add_argument('--tth-file', required=True, help='Fichier source TTH à parser (.dat) OU répertoire contenant des fichiers .dat (majuscules/minuscules)')
    group = parser.add_mutually_exclusive_group()
    group.add_argument('--article-liste-on', nargs='*', help="Liste des types d'articles à exporter (ex: 50 52 75). Si non précisé, tous exportés.")
    parser.add_argument('--output-path', default='.', help='Répertoire de sortie (par défaut: répertoire courant). Le nom du fichier sera celui du fichier d\'entrée avec extension .json')
    parser.add_argument('--example', action='store_true', help='Afficher un exemple détaillé du premier article du type choisi (voir --article-liste-on)')
    args = parser.parse_args()

    STRUCT_FILE = 'doc/structures_tth.js'
    HIERARCHY_FILE = 'doc/hierarchie_articles_tth_JSON.json'

    # Détection fichier ou dossier
    tth_files = []
    if os.path.isdir(args.tth_file):
        print_log(f"Recherche de fichiers .dat dans le dossier : {args.tth_file}")
        # Recherche insensible à la casse
        tth_files = glob.glob(os.path.join(args.tth_file, '*.dat')) + glob.glob(os.path.join(args.tth_file, '*.DAT'))
        tth_files = sorted(tth_files)
        print_log(f"{len(tth_files)} fichiers .dat trouvés.")
    elif os.path.isfile(args.tth_file):
        tth_files = [args.tth_file]
        print_log(f"Fichier unique à traiter : {args.tth_file}")
    else:
        print_log(f"Erreur : {args.tth_file} n'est ni un fichier ni un dossier.")
        exit(1)

    print_log(f"Paramètres : output_path={args.output_path} | article_liste_on={args.article_liste_on}")

    for tth_file in tth_files:
        print_log(f"Début traitement fichier : {tth_file}")
        try:
            hierarchical_articles = parse_and_build_hierarchy(tth_file, STRUCT_FILE, HIERARCHY_FILE)
            input_basename = os.path.basename(tth_file)
            output_filename = input_basename + '.json'
            output_path = os.path.join(args.output_path, output_filename)

            def filtre_article(code):
                if args.article_liste_on:
                    return code in args.article_liste_on
                return True

            def export_ndjson_filtre(hierarchical_articles, output_file):
                def find_all(arts):
                    for art in arts:
                        if filtre_article(art.code):
                            yield art
                        yield from find_all(art.children)
                def article_to_dict(art):
                    if args.article_liste_on:
                        return {
                            'code': art.code,
                            'values': art.values,
                            'children': []
                        }
                    else:
                        return {
                            'code': art.code,
                            'values': art.values,
                            'children': [article_to_dict(c) for c in art.children]
                        }
                nb_exportes = 0
                with open(output_file, 'w', encoding='utf-8') as f:
                    for art in find_all(hierarchical_articles):
                        f.write(json.dumps(article_to_dict(art), ensure_ascii=False) + '\n')
                        nb_exportes += 1
                print_log(f"Export NDJSON terminé : {nb_exportes} articles exportés dans {output_file}")
                return nb_exportes

            nb = export_ndjson_filtre(hierarchical_articles, output_path)

            if args.example:
                type_exemple = None
                if args.article_liste_on:
                    type_exemple = args.article_liste_on[0]
                else:
                    def find_first_type(arts):
                        for art in arts:
                            if filtre_article(art.code):
                                return art.code
                            res = find_first_type(art.children)
                            if res:
                                return res
                        return None
                    type_exemple = find_first_type(hierarchical_articles)
                if type_exemple:
                    print_log(f"Affichage d'un exemple pour le type {type_exemple}")
                    afficher_exemple(hierarchical_articles, type_exemple)
                else:
                    print_log("Aucun article à afficher en exemple selon le filtre choisi.")
            print_log(f"Traitement terminé pour {tth_file} (exporté : {nb} articles)")
        except Exception as e:
            print_log(f"Erreur lors du traitement de {tth_file} : {e}")
