# Bab Digital, site vitrine

Site de l'agence web Bab Digital (باب ديجيتال) : « Ouvrez la porte à vos clients ».
En français, avec une version arabe (bouton FR / عربي, page de droite à gauche).

Fait en HTML, CSS et un peu de JavaScript, sans framework ni étape de build.
Hébergé sur Vercel (projet `babdigital`, adresse https://babdigital.vercel.app) : chaque envoi (push) sur la branche `main` est mis en ligne.
L'ancienne adresse https://mohcin-portfolio.vercel.app renvoie vers la nouvelle.

## Fichiers

- `index.html` : la page d'accueil.
- `exemples/` : quatre exemples de design, pour des entreprises imaginaires (`cafe.html`, `salon-de-beaute.html`, `auto-ecole.html`, `cabinet-dentaire.html`). Ce ne sont pas des clients.
- `css/style.css` : styles de l'accueil. `css/exemples.css` : styles des exemples (un thème par page).
- `js/main.js` : tous les textes, en français et en arabe, et les petits scripts (langue, menu, animations).
- `logo.svg`, `logo-icon.svg`, `logo-white.svg` : le logo complet, l'icône seule (favicon, photo de profil) et la version blanche pour fonds sombres.
- `logo-512.png`, `apple-touch-icon.png` : l'icône en image. `og-image.png` : l'aperçu affiché quand le lien est partagé (1200 x 630).
- `img/` : la forme d'arc et le motif zellige (ils sont aussi recopiés dans les fichiers CSS).
- `exemples/img/` : les illustrations des exemples et les photos du cabinet dentaire (licence Unsplash, sans personnes).
- `vercel.json` : renvoie les anciennes adresses `/demos/...` vers les nouvelles pages, et `/questionnaire/` vers le questionnaire
  (https://babdigital-questionnaire.vercel.app, dépôt `mohcin-client-intake`).

## Modifier un texte

Dans `js/main.js`, chaque texte a sa version `fr` et sa version `ar`.
Le français est aussi écrit dans les pages HTML (c'est ce qui s'affiche sans JavaScript) : changez les deux.

## Le logo

Le mot « bab digital » est écrit avec la police Sora (Google Fonts). Les fichiers `logo.svg` et `logo-white.svg`
la chargent eux-mêmes quand on les ouvre dans un navigateur.

## Couleurs et polices

Encre `#14141A`, sable `#F6F0E6`, vert zellige `#0F5C4D`, terracotta `#C8553D` (seulement pour les boutons), blanc.
Titres en Sora, texte en Inter, arabe en Tajawal.

## À faire

- Instagram et TikTok : remplacer `href="#"` dans `index.html` (lignes marquées TODO).
- Nom de domaine : quand il sera relié (par exemple babdigital.ma), remplacer `https://babdigital.vercel.app` sur les lignes marquées ADRESSE.
