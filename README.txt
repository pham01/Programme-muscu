FITMASS LEGACY - VERSION GITHUB PAGES MULTI-PAGES

CONTENU
- index.html : affiche automatiquement la semaine en cours
- semaine-01.html à semaine-16.html : une page distincte par semaine
- assets/ : fichiers sources CSS et JavaScript conservés pour faciliter les modifications
- Programme.pdf : programme d'origine

CORRECTION MOBILE
Le CSS et le JavaScript sont désormais intégrés directement dans chaque page HTML.
L'affichage reste donc stylé même quand une application Android n'autorise pas le chargement du dossier assets.

TEST RECOMMANDÉ
L'aperçu direct depuis Google Files utilise une adresse content:// et peut empêcher la navigation entre fichiers voisins.
Pour tester toutes les pages, publiez le dossier complet sur GitHub Pages ou ouvrez-le avec un petit serveur local.

GITHUB PAGES
1. Décompressez le ZIP.
2. Envoyez tout son contenu à la racine du dépôt, sans déplacer les fichiers.
3. Dans GitHub : Settings > Pages > Deploy from a branch.
4. Choisissez la branche main et le dossier /(root).
5. Ouvrez l'adresse fournie par GitHub Pages.
