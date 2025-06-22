/*
# Format de chaque tuple : (field, start, length, type, range, exportName,expIndex,label)
# Source : structures_tth_js.js :contentReference[oaicite:0]{index=0}
*/

const structure_article_01 = [
    ["typeDeFlux",     2,  3, "", "", "", "", "Type de flux"],
    ["dda",            5,  8, "", "", "", "", "Date de début d’application"],
    ["dfa",           13,  8, "", "", "", "", "Date de fin d’application"],
    ["typeOperation", 21,  2, "", "", "", "", "Type OPE de donnée traitée"],
]

const structure_article_02 = [
    ["typeDeFlux",       2,  3, "", "", "", "", "Type de flux"],
    ["codeClient",       5,  3, "", "", "", "", "Code client"],
    ["nEvtDec",          8, 18, "", "", "", "", "Numéro d'évènement déclencheur"],
    ["dda",             26,  8, "", "", "", "", "Date de début d’application"],
    ["dfa",             34,  8, "", "", "", "", "Date de fin d’application"],
    ["NbFichiers",      42,  4, "", "", "", "", "Nombre de fichiers/messages"],
    ["numIncFlux",      46, 10, "", "", "", "", "Numéro incrémental de flux"],
    ["indFormatRegime", 56,  1, "", "", "", "", "Indicateur format du régime"],
]

const structure_article_11 = [
    ["nomFichier", 2, 26, "", "", "", "", "Nom du fichier avec extension"],
]

const structure_article_50 = [
    ["numTribu",                  2,   8, "", "", "", "", "Numéro interne de la tribu"],
    ["marqueurInc",              10,   3, "", "", "", "", "Marqueur incrémental"],
    ["marqueurType",             13,   3, "", "", "", "", "Marqueur type"],
    ["marcheDepart",             16,   6, "", "", "", "", "Numéro marche départ"],
    ["rgun",                     22,   4, "", "", "", "", "Code RGUN"],
    ["heureOrigine",             26,   6, "", "", "", "", "Heure théorique départ"],
    ["nature",                   32,   1, "", "", "", "", "Nature"],
    ["marcheComp",               33,   6, "", "", "", "", "Numéro marche complémentaire"],
    ["indiceCompo",              39,   5, "", "", "", "", "Mnémo indice composition"],
    ["regimeBinaireCirculation", 44, 400, "", "", "", "", "Régime compressé de circulation"],
    ["codeCIOrigine",           444,   6, "", "", "", "", "Code CI origine"],
    ["codeCHOrigine",           450,   2, "", "", "", "", "Code CH origine"],
    ["codeCITerminus",          452,   6, "", "", "", "", "Code CI terminus"],
    ["codeCHTerminus",          458,   2, "", "", "", "", "Code CH terminus"],
    ["UIOrigine",               460,   4, "", "", "", "", "Code UI origine"],
    ["TCTOrigine",              464,   3, "", "", "", "", "Code TCT origine"],
    ["codeFamille",             467,   2, "", "", "", "", "Code Famille"],
    ["codeMission",             469,   4, "", "", "", "", "Code mission"],
    ["typeLigne",               473,   2, "", "", "", "", "Type de ligne"],
    ["indexation",              475,   4, "", "", "", "", "Indexation"],
    ["hlpdu",                   479,   9, "", "", "", "", "HlpDu"],
    ["hlppour",                 488,   9, "", "", "", "", "HlpPour"],
]

const structure_article_5A = [
    /* # Pas de champs définis (SDM en cours de construction)*/
]

const structure_article_5B = [
    ["offset", 2, 1, "", "", "", "", "Indice de bascule au départ, dit « offset »"],
]

const structure_article_52 = [
    ["codeCI",               2,  6, "", "", "", "", "Code CI"],
    ["codeCH",               8,  2, "", "", "", "", "Code CH"],
    ["rang",                10,  3, "", "", "", "", "Rang"],
    ["marcheArrPass",       13,  6, "", "", "", "", "Numéro marche arrivée/passage"],
    ["marcheDep",           19,  6, "", "", "", "", "Numéro marche départ"],
    ["nbBMArrPass",         25,  1, "", "", "", "", "Nb bascule minuit arrivée/passage"],
    ["nbBmDep",             26,  1, "", "", "", "", "Nb bascule minuit au départ"],
    ["heureArrivee",        27,  6, "", "", "", "", "Horaire arrivée"],
    ["heurePassage",        33,  6, "", "", "", "", "Horaire passage"],
    ["heureDepart",         39,  6, "", "", "", "", "Horaire départ"],
    ["typeArrondiArrPass",  45,  1, "", "", "", "", "Type arrondi arrivée/passage"],
    ["typeArrondiDep",      46,  1, "", "", "", "", "Type arrondi départ"],
    ["mnemoCSArrPass",      47,  3, "", "", "", "", "Mnémo catégorie statistique arrivée/passage"],
    ["mnemoCSDep",          50,  3, "", "", "", "", "Mnémo catégorie statistique départ"],
    ["mnemoEnginReferenceArrPass", 53, 6, "", "", "", "", "Mnémo engin de référence arrivée/passage"],
    ["mnemoAnginReferenceDep",   59, 6, "", "", "", "", "Mnémo engin de référence départ"],
    ["nbEnginsArrPass",     65,  1, "", "", "", "", "Nombre d’engins arrivée/passage"],
    ["nbEnginsDep",         66,  1, "", "", "", "", "Nombre d’engins départ"],
    ["masseReferenceArrPass",67,  6, "", "", "", "", "Masse de référence arrivée/passage"],
    ["masseReferenceDep",   73,  6, "", "", "", "", "Masse de référence départ"],
    ["voieEntree",          79,  3, "", "", "", "", "Voie d’entrée"],
    ["voieVia",             82,  3, "", "", "", "", "Voie de via"],
    ["voieSortie",          85,  3, "", "", "", "", "Voie de sortie"],
    ["codeUi",              88,  4, "", "", "", "", "Code UI"],
    ["codeTCT",             92,  3, "", "", "", "", "code TCT"],
    ["AKM",                 95,  8, "", "", "", "", "AKM"],
    ["PHO",                103,  1, "", "", "", "", "PHO"],
    ["margeDeRegulariteReelle", 104,  9, "", "", "", "", "Marge de REGULARITE REELLE"],
    ["margeDeRegulariteTheorique", 113, 9, "", "", "", "", "Marge de REGULARITE THEORIQUE"],
]

const structure_article_52_etendu = [
    ["codeCI",               2,  6, "", "", "", "", "Code CI"],
    ["codeCH",               8,  2, "", "", "", "", "Code CH"],
    ["rang",                10,  3, "", "", "", "", "Rang"],
    ["marcheArrPass",       13,  6, "", "", "", "", "Numéro marche arrivée/passage"],
    ["marcheDep",           19,  6, "", "", "", "", "Numéro marche départ"],
    ["nbBMArrPass",         25,  1, "", "", "", "", "Nb bascule minuit arrivée/passage"],
    ["nbBmDep",             26,  1, "", "", "", "", "Nb bascule minuit au départ"],
    ["heureArrivee",        27,  6, "", "", "", "", "Horaire arrivée"],
    ["heurePassage",        33,  6, "", "", "", "", "Horaire passage"],
    ["heureDepart",         39,  6, "", "", "", "", "Horaire départ"],
    ["typeArrondiArrPass",  45,  1, "", "", "", "", "Type arrondi arrivée/passage"],
    ["typeArrondiDep",      46,  1, "", "", "", "", "Type arrondi départ"],
    ["heureArriveeNonArrondie", 47,  6, "", "", "", "", "Horaire arrivée non arrondi"],
    ["heurePassageNonArrondie", 53,  6, "", "", "", "", "Horaire passage non arrondi"],
    ["heureDepartNonArrondie", 59,  6, "", "", "", "", "Horaire départ non arrondi"],
    ["mnemoCSArrPass",      65,  3, "", "", "", "", "Mnémo catégorie statistique arrivée/passage"],
    ["mnemoCSDep",          68,  3, "", "", "", "", "Mnémo catégorie statistique départ"],
    ["mnemoEnginReferenceArrPass", 71, 6, "", "", "", "", "Mnémo engin de référence arrivée/passage"],
    ["mnemoAnginReferenceDep",   77, 6, "", "", "", "", "Mnémo engin de référence départ"],
    ["nbEnginsArrPass",     83,  1, "", "", "", "", "Nombre d’engins arrivée/passage"],
    ["nbEnginsDep",         84,  1, "", "", "", "", "Nombre d’engins départ"],
    ["masseReferenceArrPass",85,  6, "", "", "", "", "Masse de référence arrivée/passage"],
    ["masseReferenceDep",   91,  6, "", "", "", "", "Masse de référence départ"],
    ["voieEntree",          97,  3, "", "", "", "", "Voie d’entrée"],
    ["voieVia",            100,  3, "", "", "", "", "Voie de via"],
    ["voieSortie",         103,  3, "", "", "", "", "Voie de sortie"],
    ["codeUi",             106,  4, "", "", "", "", "Code UI"],
    ["codeTCT",            110,  3, "", "", "", "", "code TCT"],
    ["AKM",                113,  8, "", "", "", "", "AKM"],
    ["PHO",                121,  1, "", "", "", "", "PHO"],
    ["margeDeRegulariteReelle", 122,  9, "", "", "", "", "Marge de REGULARITE REELLE"],
    ["margeDeRegulariteTheorique", 131, 9, "", "", "", "", "Marge de REGULARITE THEORIQUE"],
]

const structure_article_53 = [
    ["signeConventionnel", 2, 4, "", "", "", "", "Mnémo Signe conventionnel"],
]

const structure_article_54 = [
    ["numeroDossier",   2,  8, "", "", "", "", "Numéro dossier"],
    ["versionDossier", 10,  1, "", "", "", "", "Version dossier"],
    ["rangDebut",      11,  3, "", "", "", "", "Rang début Train / Type / HOUAT"],
    ["codeCIDebut",   14,  6, "", "", "", "", "CI début"],
    ["codeCHDebut",   20,  2, "", "", "", "", "CH début"],
    ["rangFin",       22,  3, "", "", "", "", "Rang fin Train / Type / HOUAT"],
    ["codeCIFin",     25,  6, "", "", "", "", "CI fin"],
    ["codeCHFin",     31,  2, "", "", "", "", "CH fin"],
    ["typeDossier",   33,  1, "", "", "", "", "Type dossier"],
    ["ddaDossier",    34,  8, "", "", "", "", "DDA dossier"],
    ["dfaDossier",    42,  8, "", "", "", "", "DFA dossier"],
]

const structure_article_55 = [
    ["codeCIDebut",            2,   6, "", "", "", "", "CI début"],
    ["codeCHDebut",            8,   2, "", "", "", "", "CH début"],
    ["rangDebut",             10,   3, "", "", "", "", "Rang début"],
    ["codeCIFin",             13,   6, "", "", "", "", "CI fin"],
    ["codeCHFin",             19,   2, "", "", "", "", "CH fin"],
    ["rangFin",               21,   3, "", "", "", "", "Rang fin"],
    ["regimeCompresse",       24, 400, "", "", "", "", "Régime compressé"],
    ["regimeEnClair",        424, 512, "", "", "", "", "Régime en clair"],
    ["codeRenvoiStandard",    936,   2, "", "", "", "", "Code renvoi standard"],
    ["libelleRenvoiStandard", 938,  70, "", "", "", "", "Libellé renvoi standard"],
    ["libelleRenvoiLibre",   1008, 512, "", "", "", "", "Libellé renvoi libre"],
    ["nbBMAuPremierPrDuRenvoi",1520,  1, "", "", "", "", "Nb. bascule minuit premier PR du renvoi"],
]

const structure_article_56 = [
    ["numFicheOpe",             2, 10, "", "", "", "", "Numéro fiche OPE"],
    ["idTechniqueFicheOpe",    12, 18, "", "", "", "", "Identifiant technique fiche OPE"],
    ["dateCreationFiche",      30,  8, "", "", "", "", "Date création de la fiche"],
    ["heureCreationFiche",     38,  6, "", "", "", "", "Heure création de la fiche"],
    ["mnemoStructureEmettrice",44,  5, "", "", "", "", "MNEMO structure émettrice de la fiche"],
    ["rangDebut",              49,  3, "", "", "", "", "Rang début"],
    ["codeCIDebut",            52,  6, "", "", "", "", "CI début"],
    ["codeCHDebut",            58,  2, "", "", "", "", "CH début"],
    ["rangFin",                60,  3, "", "", "", "", "Rang fin"],
    ["codeCIFin",              63,  6, "", "", "", "", "CI fin"],
    ["codeCHFin",              69,  2, "", "", "", "", "CH fin"],
]

const structure_article_57 = [
    ["mnemoStructureRegionTraversee",  2,  5, "", "", "", "", "MNEMO structure région traversée"],
    ["rangDebut_tth",                  7,  3, "", "", "", "", "Rang début TTH"],
    ["codeCIDebut",                   10,  6, "", "", "", "", "CI début"],
    ["codeCHDebut",                   16,  2, "", "", "", "", "CH début"],
    ["rangFin_tth",                   18,  3, "", "", "", "", "Rang fin TTH"],
    ["codeCIFin",                     21,  6, "", "", "", "", "CI fin"],
    ["codeCHFin",                     27,  2, "", "", "", "", "CH fin"],
]

const structure_article_58 = [
    ["marche",      2, 6, "", "", "", "", "Numéro de marche"],
    ["typeDeTrain", 8, 1, "", "", "", "", "Type de train (Croiseur ou Dépasseur)"],
]

const structure_article_59 = [
    ["typeOperation", 2, 2, "", "", "", "", "Type opération"],
    ["rangDebut",     4, 3, "", "", "", "", "Rang début Train / Type / HOUAT"],
    ["codeCIDebut",   7, 6, "", "", "", "", "CI début"],
    ["codeCHDebut",  13, 2, "", "", "", "", "CH début"],
    ["rangFin",      15, 3, "", "", "", "", "Rang fin Train / Type / HOUAT"],
    ["codeCIFin",    18, 6, "", "", "", "", "CI fin"],
    ["codeCHFin",    24, 2, "", "", "", "", "CH fin"],
]

const structure_article_60 = [
    ["numeroDossier", 2, 8, "", "", "", "", "Numéro dossier"],
    ["versionDossier",10,1, "", "", "", "", "Version dossier"],
    ["natureDossier", 11,1, "", "", "", "", "Nature dossier"],
    ["ddaDossier",   12,8, "", "", "", "", "DDA dossier"],
    ["dfaDossier",   20,8, "", "", "", "", "DFA dossier"],
    ["typeDossier",  28,1, "", "", "", "", "Type dossier"],
]

const structure_article_61 = [
    ["numTribu",     2, 8, "", "", "", "", "Numéro interne tribu"],
    ["marcheDepart",10,6, "", "", "", "", "Numéro marche départ"],
    ["marcheComp",  16,6, "", "", "", "", "Numéro marche complémentaire"],
]

const structure_article_63 = [
    ["voieLocale", 2, 6, "", "", "", "", "Voie locale"],
]

const structure_article_70 = [
    ["numTribu", 2, 8, "", "", "", "", "Numéro interne tribu"],
]

const structure_article_72 = [
    ["voieLocale",                     2,   6, "", "", "", "", "Voie Locale"],
    ["regimeVoieLocale",               8, 400, "", "", "", "", "Régime Voie Locale"],
    ["commentaire",                  408, 400, "", "", "", "", "Commentaire"],
    ["idStructureAppartenanceEmetteur",808,  9, "", "", "", "", "Id structure d’appartenance de l’émetteur"],
    ["applicationEmettrice",         817,  2, "", "", "", "", "Application émettrice"],
    ["dateHeureMAJ",                819, 14, "", "", "", "", "Date et Heure de mise à jour"],
]

const structure_article_73 = [
    ["type",                         2,   1, "", "", "", "", "Type"],
    ["equilibre",                    3,   6, "", "", "", "", "Equilibre"],
    ["regimeDeveloppeEquilibre",     9, 400, "", "", "", "", "Régime développé associé à l’équilibre"],
    ["tempsDeStationnement",       409,   6, "", "", "", "", "Temps de Stationnement"],
    ["idStructureAppartenanceEmetteur",415, 9, "", "", "", "", "Id structure d’appartenance de l’émetteur"],
    ["applicationEmettrice",        424,  2, "", "", "", "", "Application émettrice"],
    ["dateHeureMAJ",               426, 14, "", "", "", "", "Date et Heure de mise à jour"],
]

const structure_article_74 = [
    ["type",                       2,   1, "", "", "", "", "Type"],
    ["composition",               3,  30, "", "", "", "", "Composition"],
    ["longueur",                 33,   3, "", "", "", "", "Longueur"],
    ["nombreDElements",          36,   2, "", "", "", "", "Nombre d’éléments"],
    ["regimeDeveloppeCL",        38, 400, "", "", "", "", "Régime développé associé à la composition"],
    ["idStructureAppartenanceEmetteur",438, 9, "", "", "", "", "Id structure d’appartenance de l’émetteur"],
    ["applicationEmettrice",      447,  2, "", "", "", "", "Application émettrice"],
    ["dateHeureMAJ",             449, 14, "", "", "", "", "Date et Heure de mise à jour"],
]

const structure_article_75 = [
    ["numeroCommande",  2, 10, "", "", "", "", "Numéro Commande"],
    ["rangDebut",      12,  3, "", "", "", "", "Rang Début n° commande"],
    ["codeCIDebut",    15,  6, "", "", "", "", "CI Début n° commande"],
    ["codeCHDebut",    21,  2, "", "", "", "", "CH Début n° commande"],
    ["rangFin",        23,  3, "", "", "", "", "Rang Fin n° commande"],
    ["codeCIFin",      26,  6, "", "", "", "", "CI Fin n° commande"],
    ["codeCHFin",      32,  2, "", "", "", "", "CH Fin n° commande"],
    ["numVDS",         34, 28, "", "", "", "", "Numéro de VDS"],
]

const structure_article_76 = [
    ["rangDuPoint",       2,  3, "", "", "", "", "Rang du point"],
    ["typeDePoint",       5,  1, "", "", "", "", "Type de point"],
    ["pointKilometrique", 6,  8, "", "", "", "", "Point Kilométrique"],
    ["vitesseProjetee",  14,  4, "", "", "", "", "Vitesse Projetée"],
    ["vitesseCalculee",  18,  3, "", "", "", "", "Vitesse Calculée"],
]

const structure_article_77 = [
    ["tauxTheorique",     2,  6, "", "", "", "", "Taux théorique"],
    ["tauxReel",          8,  7, "", "", "", "", "Taux réel"],
    ["codeConcentration",15,  1, "", "", "", "", "Code concentration"],
    ["rangDebut",        16,  3, "", "", "", "", "Rang début"],
    ["codeCIDebut",      19,  6, "", "", "", "", "CI début"],
    ["codeCHDebut",      25,  2, "", "", "", "", "CH début"],
    ["rangFin",          27,  3, "", "", "", "", "Rang fin"],
    ["codeCIFin",        30,  6, "", "", "", "", "CI fin"],
    ["codeCHFin",        36,  2, "", "", "", "", "CH fin"],
]

const structure_article_78 = [
    ["enginCalcul",      2,  8, "", "", "", "", "Engin calcul"],
    ["nombreEnginsCalcul",10, 1, "", "", "", "", "Nombre engins calcul"],
    ["tonnageCalcul",    11, 6, "", "", "", "", "Tonnage calcul"],
    ["rangDebut",        17, 3, "", "", "", "", "Rang début"],
    ["codeCIDebut",      20, 6, "", "", "", "", "CI début"],
    ["codeCHDebut",      26, 2, "", "", "", "", "CH début"],
    ["rangFin",          28, 3, "", "", "", "", "Rang fin"],
    ["codeCIFin",        31, 6, "", "", "", "", "CI fin"],
    ["codeCHFin",        37, 2, "", "", "", "", "CH fin"],
]

const structure_article_79 = [
    ["mnemoIndiceDeVitesse", 2, 6, "", "", "", "", "Mnémo Indice de vitesse"],
    ["rangDebut",            8, 3, "", "", "", "", "Rang début"],
    ["codeCIDebut",         11, 6, "", "", "", "", "CI début"],
    ["codeCHDebut",         17, 2, "", "", "", "", "CH début"],
    ["rangFin",             19, 3, "", "", "", "", "Rang fin"],
    ["codeCIFin",           22, 6, "", "", "", "", "CI fin"],
    ["codeCHFin",           28, 2, "", "", "", "", "CH fin"],
]

const structure_article_7A = [
    ["rangDebut",   2, 3, "", "", "", "", "Rang début"],
    ["codeCIDebut", 5, 6, "", "", "", "", "CI début"],
    ["codeCHDebut",11, 2, "", "", "", "", "CH début"],
    ["rangFin",    13, 3, "", "", "", "", "Rang fin"],
    ["codeCIFin",  16, 6, "", "", "", "", "CI fin"],
    ["codeCHFin",  22, 2, "", "", "", "", "CH fin"],
    ["typeCalcul", 24, 1, "", "", "", "", "Type Calcul"],
]

const structure_article_7B = [
    ["rangDebut",       2,  3, "", "", "", "", "Rang début"],
    ["codeCIDebut",     5,  6, "", "", "", "", "CI début"],
    ["codeCHDebut",    11,  2, "", "", "", "", "CH début"],
    ["rangFin",        13,  3, "", "", "", "", "Rang fin"],
    ["codeCIFin",      16,  6, "", "", "", "", "CI fin"],
    ["codeCHFin",      22,  2, "", "", "", "", "CH fin"],
    ["materielRemorque",24,  8, "", "", "", "", "Matériel Remorqué"],
]

const structure_article_7C = [
    ["rangDebut",     2,  3, "", "", "", "", "Rang début"],
    ["codeCIDebut",   5,  6, "", "", "", "", "CI début"],
    ["codeCHDebut",  11,  2, "", "", "", "", "CH début"],
    ["rangFin",      13,  3, "", "", "", "", "Rang fin"],
    ["codeCIFin",    16,  6, "", "", "", "", "CI fin"],
    ["codeCHFin",    22,  2, "", "", "", "", "CH fin"],
    ["vitesseMaximum",24,  3, "", "", "", "", "Vitesse Maximum"],
]

const structure_article_7D = [
    ["rangDebut",          2,  3, "", "", "", "", "Rang début"],
    ["codeCIDebut",        5,  6, "", "", "", "", "CI début"],
    ["codeCHDebut",       11,  2, "", "", "", "", "CH début"],
    ["rangFin",           13,  3, "", "", "", "", "Rang fin"],
    ["codeCIFin",         16,  6, "", "", "", "", "CI fin"],
    ["codeCHFin",         22,  2, "", "", "", "", "CH fin"],
    ["typeRenfort",       24,  3, "", "", "", "", "Type Renfort"],
    ["nombreEnginsRenfort",27,1, "", "", "", "", "Nombre Engins Renfort"],
    ["mnemoRenfort",      28,  8, "", "", "", "", "Mnémonique Renfort"],
]

const structure_article_7E = [
    ["rangDebut",             2,  3, "", "", "", "", "Rang début"],
    ["codeCIDebut",           5,  6, "", "", "", "", "CI début"],
    ["codeCHDebut",          11,  2, "", "", "", "", "CH début"],
    ["rangFin",              13,  3, "", "", "", "", "Rang fin"],
    ["codeCIFin",            16,  6, "", "", "", "", "CI fin"],
    ["codeCHFin",            22,  2, "", "", "", "", "CH fin"],
    ["commentaireFicheTrace",24,160,"","", "Commentaire Fiche Tracé"],
]

const structure_article_7F = [
    ["rangDebut",            2, 3, "", "", "", "", "Rang début"],
    ["codeCIDebut",          5, 6, "", "", "", "", "CI début"],
    ["codeCHDebut",         11, 2, "", "", "", "", "CH début"],
    ["rangFin",             13, 3, "", "", "", "", "Rang fin"],
    ["codeCIFin",           16, 6, "", "", "", "", "CI fin"],
    ["codeCHFin",           22, 2, "", "", "", "", "CH fin"],
    ["restrictionCirculation",24,1,"","", "Restriction Circulation"],
]

const structure_article_7G = [
    ["codeReceptionVoieOccupee",   2, 4, "", "", "", "", "Code Réception Voie Occupée"],
    ["libelleReceptionVoieOccupee",6,15, "", "", "", "", "Libellé Réception Voie Occupée"],
]

const structure_article_7H = [
    ["rangDuPoint",               2,  6, "", "", "", "", "Rang du point"],
    ["pointKilometrique",         8,  8, "", "", "", "", "Point kilométrique"],
    ["codeSectionLigne",         16,  6, "", "", "", "", "Code (section) ligne"],
    ["idReseauSRL",              22, 23, "", "", "", "", "ID Réseau SRL"],
    ["descriptionCourteVoie",    45, 10, "", "", "", "", "Description courte voie"],
    ["idReseauSRV",              55, 11, "", "", "", "", "ID Réseau SRV"],
    ["sensDeParcours",           66,  1, "", "", "", "", "Sens de parcours"],
    ["pointKilometriqueCumuleAKM",67, 8, "", "", "", "", "Point kilométrique cumulé (AKM)"],
    ["typeDeDiffusion",          75,  1, "", "", "", "", "Type de diffusion"],
]

const structure_article_8A = [
    ["varianteThor",          2, 1, "", "", "", "", "Variante THOR"],
    ["origineDuSillon",       3, 3, "", "", "", "", "Origine du sillon"],
    ["numeroDeDossier",       6,8, "", "", "", "", "Numéro de dossier"],
    ["versionDuDossier",     14,1, "", "", "", "", "Version du dossier"],
    ["ddaRectificatif",      15,8, "", "", "", "", "Date de début d’application du Rectificatif"],
    ["rangDebut",            23,3, "", "", "", "", "Rang début TTH"],
    ["codeCIDebut",          26,6, "", "", "", "", "CI début"],
    ["codeCHDebut",          32,2, "", "", "", "", "CH début"],
    ["rangFin",              34,3, "", "", "", "", "Rang fin TTH"],
    ["codeCIFin",            37,6, "", "", "", "", "CI fin"],
    ["codeCHFin",            43,2, "", "", "", "", "CH fin"],
    ["dateHeureMAJSsillon",  45,14,"","", "Date/heure mise à jour du sillon"],
    ["dateHeurvalidationDossierAVT",59,14,"","", "Date/heure de validation du dossier Avis-Trains"],
]

const structure_article_80 = [
    ["numFicheOpe",        2,10, "", "", "", "", "Numéro fiche OPE"],
    ["dateCreationFiche", 12, 8, "", "", "", "", "Date création de la fiche"],
    ["heureCreationFiche",20, 6, "", "", "", "", "Heure création de la fiche"],
    ["structureEmettriceFiche",26,5,"","", "MNEMO structure émettrice de la fiche"],
]

const structure_article_81 = [
    ["numTribu", 2,8, "", "", "", "", "Numéro interne tribu"],
]

const structure_article_90 = [
    ["numeroDossier", 2, 8, "", "", "", "", "Numéro dossier"],
    ["versionDossier",10, 1, "", "", "", "", "Version dossier"],
    ["natureDossier", 11, 1, "", "", "", "", "Nature dossier"],
    ["ddaDossier",    12, 8, "", "", "", "", "DDA dossier"],
    ["dfaDossier",    20, 8, "", "", "", "", "DFA dossier"],
    ["typeDossier",   28, 1, "", "", "", "", "Type dossier"],
]

const structure_article_91 = [
    ["numeroDOrdre",            2, 2, "", "", "", "", "Numéro d’ordre"],
    ["mnemoStructure",          4, 5, "", "", "", "", "MNEMO structure"],
    ["libelleConstruitStructure",9,100,"","", "Libellé construit de la structure"],
    ["attributLigne1",         109,30,"","", "Attribut Ligne 1"],
    ["attributLigne2",         139,30,"","", "Attribut Ligne 2"],
]

const structure_article_92 = [
    ["indicateurTypeDeVoie", 2,  1, "", "", "", "", "Indicateur type de voie"],
    ["indicateurTimbre",     3,  1, "", "", "", "", "Indicateur timbre"],
    ["objetDuDossier",       4,150, "", "", "", "", "OBJET du dossier"],
]

const structure_article_98 = [
    ["emetteur",               2,  2, "", "", "", "", "Emetteur"],
    ["nomClientDestinataire",  4,  6, "", "", "", "", "Nom du client destinataire"],
    ["dateHeure",             10, 16, "", "", "", "", "Date/Heure"],
]

// --- Après toutes tes constantes structure_article_X …

const structures = {
  "01": { fields: structure_article_01 },
  "02": { fields: structure_article_02 },
  "11": { fields: structure_article_11 },
  "50": { fields: structure_article_50 },
  "5A": { fields: structure_article_5A },
  "5B": { fields: structure_article_5B },
  "52": { fields: structure_article_52 },
  "52E": { fields: structure_article_52_etendu },
  "53": { fields: structure_article_53 },
  "54": { fields: structure_article_54 },
  "55": { fields: structure_article_55 },
  "56": { fields: structure_article_56 },
  "57": { fields: structure_article_57 },
  "58": { fields: structure_article_58 },
  "59": { fields: structure_article_59 },
  "60": { fields: structure_article_60 },
  "61": { fields: structure_article_61 },
  "63": { fields: structure_article_63 },
  "70": { fields: structure_article_70 },
  "72": { fields: structure_article_72 },
  "73": { fields: structure_article_73 },
  "74": { fields: structure_article_74 },
  "75": { fields: structure_article_75 },
  "76": { fields: structure_article_76 },
  "77": { fields: structure_article_77 },
  "78": { fields: structure_article_78 },
  "79": { fields: structure_article_79 },
  "7A": { fields: structure_article_7A },
  "7B": { fields: structure_article_7B },
  "7C": { fields: structure_article_7C },
  "7D": { fields: structure_article_7D },
  "7E": { fields: structure_article_7E },
  "7F": { fields: structure_article_7F },
  "7G": { fields: structure_article_7G },
  "7H": { fields: structure_article_7H },
  "8A": { fields: structure_article_8A },
  "80": { fields: structure_article_80 },
  "81": { fields: structure_article_81 },
  "90": { fields: structure_article_90 },
  "91": { fields: structure_article_91 },
  "92": { fields: structure_article_92 },
  "98": { fields: structure_article_98 },
};

// Exposition pour le navigateur
window.structures = structures;
