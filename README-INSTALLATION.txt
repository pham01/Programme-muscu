Programme muscu - APPLICATION WEB INSTALLABLE (PWA)
=====================================================

CONTENU
-------
- index.html : accueil qui ouvre automatiquement la semaine en cours
- semaine-01.html à semaine-16.html : une page distincte par semaine
- menu burger avec les 16 semaines
- manifest.webmanifest + service-worker.js : installation comme application
- assets/icons/ : icônes Android, Chrome, Apple et favicon
- Programme.pdf : programme original

MISE EN LIGNE SUR GITHUB PAGES
------------------------------
1. Décompresse ce ZIP.
2. Crée un dépôt GitHub, puis envoie TOUS les fichiers et dossiers contenus ici
   à la racine du dépôt. Ne téléverse pas uniquement index.html.
3. Dans GitHub : Settings > Pages.
4. Dans "Build and deployment", choisis "Deploy from a branch".
5. Sélectionne la branche main et le dossier /(root), puis Save.
6. Attends la publication et ouvre l'adresse HTTPS indiquée par GitHub Pages.

INSTALLATION SUR ANDROID AVEC GOOGLE CHROME
-------------------------------------------
1. Ouvre l'adresse GitHub Pages dans Google Chrome.
2. Ouvre le menu burger du site et touche "Installer l'app sur ce téléphone".
3. Si Chrome n'affiche pas encore la fenêtre, ouvre le menu ⋮ de Chrome puis
   choisis "Installer l'application" ou "Ajouter à l'écran d'accueil".
4. L'icône Programme muscu apparaîtra sur l'écran d'accueil et l'application
   s'ouvrira sans la barre d'adresse de Chrome.

IMPORTANT
---------
- L'installation ne fonctionne pas en ouvrant index.html depuis l'application
  Fichiers. Le site doit être servi en HTTPS, comme avec GitHub Pages.
- Après la première ouverture en ligne, les 16 semaines sont mises en cache et
  restent accessibles hors connexion.
- La progression est stockée localement sur le téléphone. Effacer les données
  de Chrome ou désinstaller l'application peut supprimer cette progression.
