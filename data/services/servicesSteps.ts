import { type ServiceKey } from "./servicesBanner";

type StepData = {
  id: string
  title: string
  description: string
}

export const servicesSteps = {
  "releves-scans-3d": [
    {
      id: "1",
      title:"Premier contact",
      description: "Échange initial pour comprendre votre projet et vos objectifs. Présentation de notre approche et première estimation.",
    },
    {
      id: "2",
      title:"Analyse & Diagnostic",
      description: "Étude détaillée de vos besoins, analyse de la typologie du bâtiment et définition de la méthode de relevé adaptée.",
    },
    {
      id: "3",
      title:"Relevés terrain",
      description: "Intervention sur site avec nos équipements (laser mètre ou scan 3D). Travail méticuleux pour garantir la précision des données.",
    },
    {
      id: "4",
      title:"Suivi & Rendu final",
      description: "Points réguliers en visioconférence pendant la modélisation. Livraison des maquettes BIM et plans aux formats souhaités.",
    }
  ],
  "modelisation-bim": [
    {
      id: "1",
      title:"Analyse de vos documents",
      description: "Nous étudions vos plans, croquis ou relevés existants et définissons ensemble le niveau de détail souhaité et vos conventions BIM spécifiques.",
    },
    {
      id: "2",
      title:"Modélisation",
      description: "Notre équipe commence la modélisation sur Revit en respectant vos standards. Nous vous envoyons un premier rendu pour validation d’orientation.",
    },
    {
      id: "3",
      title:"Validation et ajustements",
      description: "Points d’avancement réguliers avec partage d’écrans, corrections en temps réel et ajustements selon vos retours pour garantir votre satisfaction.",
    },
    {
      id: "4",
      title:"Livraison complète",
      description: "Réception de votre maquette BIM aux formats RVT et IFC, accompagnée des plans 2D en PDF et DWG, prête à intégrer votre processus projet.",
    }
  ],
  "carnets-de-details": [
    {
      id: "1",
      title:"Analyse de vos besoins",
      description: "Nous étudions vos croquis, références produits ou éléments à détailler et définissons ensemble le niveau de précision requis.",
    },
    {
      id: "2",
      title:"Modélisation des détails",
      description: "Création des détails dans Revit avec le bon niveau de détail, respect des normes et intégration des spécifications techniques.",
    },
    {
      id: "3",
      title:"Validation et corrections",
      description: "Présentation des premiers détails pour validation, ajustements selon vos retours et finalisation graphique.",
    },
    {
      id: "4",
      title:"Livraison des carnets",
      description: "Réception de vos détails au format PDF mis en page ou intégrés dans votre maquette BIM, prêts à être utilisés.",
    }
  ],
  "familles-parametriques": [
    {
      id: "1",
      title:"Brief et spécifications",
      description: "Nous analysons vos besoins, plans produits ou références et définissons ensemble les paramètres nécessaires et le comportement souhaité.",
    },
    {
      id: "2",
      title:"Création du modèle test",
      description: "Développement d’une première version avec les paramètres de base pour validation du concept et de l’approche.",
    },
    {
      id: "3",
      title:"Finalisation",
      description: "Intégration de tous les paramètres, matériaux et options selon vos retours, avec documentation des fonctionnalités.",
    },
    {
      id: "4",
      title:"Livraison documentée",
      description: "Réception de votre famille Revit finalisée avec guide d’utilisation et conseils d’intégration dans vos projets.",
    }
  ],
  "synthese-tce": [
    {
      id: "1",
      title:"Collecte des maquettes",
      description: "Récupération de toutes vos maquettes (architecture, structure, CVC, électricité, plomberie) et définition des règles de détection.",
    },
    {
      id: "2",
      title:"Compilation et analyse",
      description: "Fusion des modèles dans Navisworks et lancement de la détection automatisée des conflits entre disciplines.",
    },
    {
      id: "3",
      title:"Classification et reporting",
      description: "Tri des clashs par criticité, création des vues explicatives et rédaction du rapport avec recommandations techniques.",
    },
    {
      id: "4",
      title:"Présentation des résultats",
      description: "Livraison du rapport final et réunion de présentation pour expliquer chaque conflit et valider les solutions proposées.",
    }
  ],
};
