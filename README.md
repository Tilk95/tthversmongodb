# tthversmongodb

Convertisseur de fichiers TTH (VMS) en NDJSON hiérarchique compatible MongoDB.

Ce projet permet de parser des fichiers TTH structurés, d'appliquer la hiérarchie métier, et d'exporter les données au format NDJSON pour import direct dans MongoDB.

## Exemple d'utilisation

```bash
python main.py --tth-file datas/houbas_stth_1722061503.dat --output-path out --article-liste-on 50 75
```

- Par défaut, l'encodage est autodétecté (ou forçable avec --encoding).
- Les fichiers de structure et de hiérarchie sont fixes (dans `doc/`).
- Les logs sont horodatés et détaillent chaque étape du traitement.

## Fonctionnalités principales
- Parsing de fichiers TTH multi-articles
- Application de la hiérarchie métier (parent/enfant)
- Export NDJSON hiérarchique filtrable
- CLI ergonomique et documentée

---

u devras commenter finement tous les développement pour une meilleures maintenance du produit
