objectif du projet :
Faire une application qui permet de convertir un fichier TTH format texte en un ndjson pour mongodb

le format du fichier TTH est contenu dans le fichier structures_tth.js
il existe une notion de hierarchie des articles donc la description de chaque article est contenue dans le fichier structures_tth.js
la hierarchie des articles est contenu dans le fichier hierarchie_articles_tth_json.json

le programme sera fait en python pour des problémes de performance et de rapidité de développement

Information techniques
le format ndjson devra respecter le nom des champs contenus dans le fichier structures_tth
l'object ndjson contiendra l'article 50 et tous ses fils en respectant la hiérarchie.


etape 1 : 
Lire un fichier au tth 

Etape 2 : 
convertir en ndjson compatible mongodb

le module développer devra pouvoir etre lancer en ligne de commaande en passant les paramétres :
 - nom du fichier source
 - ou répertoire du fichier source et alors chercher tous les fichiers avec l'extension .dat ( majuscule ou minuscule )

 les fichiers de sortie devront garder le nom des fichiers sources en ajouter l'extension .json

 pour chaque fichier .dat on aura un fichier .json en sortie

l'application devra etre modulaire pour une meilleure maintenance

---

les fichiers structures_tth et hierarchie_articles_tth_json sont en format utf-8

attention les fichiers .dat sont issues d'un systéme VMS donc ils ne sont pas forcément en UTF-8
ls pourront etre encodé en windows 1252.
Il faudra donc avoir la possibilé de changer le jeu de caractére en paramétre pour choisir un jeu de caractére particulier et utiliser par défaut le windows 1252.
Le mieux serait d'essayer de détecter le jeu de caractére en automatique
dans le cas ou il y aurat un probléme de jeu de caractére en alerter l'utilisateur et lui proposer de changer le jeu de caractére

# TODO List – Projet Conversion TTH → NDJSON

## 1. Analyse & Préparation
- [ ] Lire et comprendre le format TTH (`structures_tth.js`)
- [ ] Étudier la hiérarchie des articles (`hierarchie_articles_tth_JSON.json`)
- [ ] Définir le format NDJSON cible (respect des noms de champs, structure MongoDB)

## 2. Conception de l'architecture
- [ ] Définir les modules principaux :
  - [ ] Lecture et parsing TTH
  - [ ] Gestion de la hiérarchie
  - [ ] Conversion TTH → NDJSON
  - [ ] Export NDJSON
  - [ ] Interface CLI
- [ ] Rédiger un schéma d'architecture modulaire

## 3. Développement
### 3.1. Lecture et parsing des fichiers TTH
- [ ] Développer la fonction de lecture d'un fichier TTH
- [ ] Gérer les erreurs de format/lecture

### 3.2. Gestion de la hiérarchie
- [ ] Charger la hiérarchie depuis le fichier JSON
- [ ] Appliquer la hiérarchie lors de la conversion

### 3.3. Conversion en NDJSON
- [ ] Mapper les champs TTH vers NDJSON
- [ ] Vérifier la compatibilité MongoDB

### 3.4. Export des fichiers NDJSON
- [ ] Générer un fichier `.json` pour chaque `.dat`
- [ ] Respecter la nomenclature des fichiers de sortie

### 3.5. Interface CLI
- [ ] Gérer les arguments (fichier/répertoire source)
- [ ] Gérer la recherche des fichiers `.dat` (insensible à la casse)
- [ ] Afficher des messages d'erreur et de log

## 4. Documentation & Tests
- [ ] Documenter chaque module/fonction (docstrings, commentaires)
- [ ] Rédiger un guide d'utilisation (README)
- [ ] Créer des tests unitaires pour chaque module
- [ ] Tester la conversion sur des fichiers réels

## 5. Livraison & Maintenance
- [ ] Préparer un script d'installation/exécution
- [ ] Vérifier la portabilité (Windows/Linux)
- [ ] Lister les points d'extension possibles

## 6. (Optionnel) Améliorations futures
- [ ] Interface graphique (GUI)
- [ ] Intégration directe MongoDB
- [ ] Gestion avancée des logs
