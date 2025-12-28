export type ArticleKey =
| "naviswork-ou-solibri"
| "plugin-diroots"
| "revit-phases"

export const articles = {
    "naviswork-ou-solibri":{
        id:"1",
        slug: "actualites/naviswork-ou-solibri",
        title: "Naviswork ou Solibri ?",
        author:"InsideBIM",
        excerpt: "Navisworks vs Solibri : quel outil pour quelle mission BIM ?",
        image:"/",
        content: `
            Quand on parle de coordination BIM, deux noms reviennent souvent : Navisworks (Autodesk) et Solibri (Nemetschek).

            Mais si ces deux outils sont souvent comparés, ils n'ont pas exactement le même rôle, ni les mêmes atouts. Voici une comparaison claire et concrète.

            Navisworks : l'outil du terrain et de la synthèse rapide

            Navisworks est idéal pour :
            - La revue de maquettes multi-formats
            - Une prise en main rapide pour la visualisation et la clash detection
            - La phase chantier/synthèse pour gérer les conflits entre lots
            - La compatibilité avec Revit, IFC, DWG, etc.

            Point d'attention : il est moins puissant sur le contrôle de données ou les règles de qualité.

            C'est l'outil du "coordo BIM chantier" qui veut aller vite et efficacement.

            Solibri : le maître du contrôle qualité et de la conformité

            Solibri excelle dans :
            - L'analyse de règles complexes (normes, espaces, accessibilité)
            - Le contrôle approfondi des IFC et des données
            - La phase conception ou DOE, pour garantir la conformité des livrables

            Points d'attention :
            - Moins intuitif, avec une courbe d'apprentissage plus technique
            - Moins orienté "clash visuel", plus orienté "clash logique"

            C'est l'outil du "contrôleur BIM" qui veut livrer un DOE propre et normé.

            Mon conseil : ne les opposez pas. Combinez-les.

            Dans certains projets, j'utilise Navisworks pour la synthèse visuelle et Solibri pour la validation des données.

            Chaque outil a son terrain d'excellence. L'essentiel, c'est de bien les connaître pour mieux les choisir.
    `
    },
    "plugin-diroots":{
        id:"2",
        slug: "actualites/plugin-diroots",
        title: "Le plugin DiRoots, utile ?",
        author:"InsideBIM",
        excerpt: "Nous avons testé le plugin DiRoots sur un vrai projet BIM. Voici ce que nous en pensons.",
        image:"/",
        content:`
        Nous avons testé le plugin DiRoots sur un vrai projet BIM. Voici ce que nous en pensons.

        En tant qu’indépendants, nous sommes toujours à la recherche d’outils qui peuvent :
        ✅ faire gagner du temps,
        ✅ éviter les erreurs répétitives,
        ✅ et améliorer nos livrables.

        Dernièrement, nous avons intégré le plugin dans un projet sur Revit. Et honnêtement, nous avons été agréablement surpris.

        Ce que le plugin nous a permis de faire :
        ✔️ Générer automatiquement des feuilles à partir d’un gabarit
        ✔️ Réduire considérablement le temps de duplication & nommage
        ✔️ Structurer les nomenclatures avec beaucoup plus de clarté

        Et surtout : moins de tâches répétitives, plus de focus sur la qualité de la maquette.

        💡 Notre conseil : si vous travaillez sur des projets complexes avec beaucoup de feuilles ou de paramètres à gérer, jetez un œil à la suite DiRoots. Certains plugins sont même gratuits.

        👉 Si vous êtes intéressé par les outils BIM qui améliorent la productivité sans sacrifier la qualité, nous pouvons vous accompagner sur vos projets pour mettre en place ce genre d’automatisation.
        `
    },
    "revit-phases":{
        id:"3",
        slug: "actualites/revit-phases",
        title: "Revit: les phases",
        author:"InsideBIM",
        excerpt: "Maîtriser les phases dans Revit: un atout pour une gestion efficace des projets !",
        image:"/",
        content:`
        Si vous travaillez sur Revit, vous avez sûrement déjà rencontré la notion de phases. Pourtant, elles sont souvent sous-exploitées, alors qu’elles peuvent transformer votre workflow !

        📌 Pourquoi utiliser les phases ?
        Les phases permettent de gérer l’évolution d’un projet dans le temps : état existant, démolition, construction neuve… Idéal pour la rénovation, les extensions ou les chantiers en plusieurs étapes !

        ⚙️ Quelques bonnes pratiques :
        ✅ Bien paramétrer les phases dès le début du projet pour éviter les erreurs en cours de route.
        ✅ Utiliser les filtres de phases pour contrôler l’affichage des éléments (existant, à démolir, neuf).
        ✅ Exploiter les nomenclatures pour générer des quantitatifs précis selon chaque phase.
        ✅ Comparer différentes versions d’un projet sans dupliquer les fichiers.

        🚀 Gain de temps, meilleure lisibilité et gestion optimisée du projet : les phases dans Revit sont un outil puissant pour les architectes, ingénieurs et BIM managers.

        💡 Et vous, utilisez-vous les phases dans vos projets Revit ? Des astuces à partager ?
        `
    },
}