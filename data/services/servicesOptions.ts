import { type ServiceKey } from "./servicesBanner";

type OptionData = {
  id: string
  title: string
  description: string
}

export const servicesOptions = {
  "releves-scans-3d": [
    {
      id: "1",
      title:"Relevé sur site",
      description: "Relevé manuel avec télémètre laser ou scan 3D selon la complexité du bâtiment.",
    },
    {
      id: "2",
      title:"Traitement des données",
      description: "Analyse et structuration du nuage de points pour optimiser la précision et la qualité de la future maquette BIM.",
    },
    {
      id: "3",
      title:"Maquette BIM & Plans",
      description: "Modélisation Revit et génération des plans 2D. Livrables prêts à intégrer dans votre flux de travail.",
    },
  ],
  "modelisation-bim": [
    {
      id: "1",
      title:"Tous corps d’état",
      description: "Représentation complète des éléments architecturaux, structurels et techniques (chauffage, ventilation, plomberie, électricité…) avec un niveau de précision adapté aux exigences du projet.",
    },
    {
      id: "2",
      title:"Plans 2D automatisés",
      description: "Génération automatique de plans, coupes et élévations à partir de la maquette 3D, avec mise en page professionnelle et cartouches personnalisés.",
    },
    {
      id: "3",
      title:"Rendu réaliste",
      description: "Visualisations photoréalistes du projet avec matériaux, éclairages et mobilier pour une projection fidèle du futur ouvrage et faciliter vos prises de décision.",
    },
  ],
  "carnets-de-details": [
    {
      id: "1",
      title:"Détails architecturaux",
      description: "Détails de façade, étanchéité, isolation, menuiseries, doublages et tous les points singuliers de votre projet architectural.",
    },
    {
      id: "2",
      title:"Détails structurels",
      description: "Assemblages, liaisons, fondations, éléments préfabriqués et tous les détails de structure avec dimensions et spécifications techniques.",
    },
    {
      id: "3",
      title:"Détails techniques",
      description: "Passages de réseaux, fixations, supports d’équipements et détails d’installation des lots techniques (CVC, plomberie, électricité).",
    },
  ],
  "familles-parametriques": [
    {
      id: "1",
      title:"Mobilier et équipements",
      description: "Création de familles pour mobilier architectural, équipements spécialisés, éléments décoratifs avec paramètres de dimensions et finitions.",
    },
    {
      id: "2",
      title:"Menuiseries sur-mesure",
      description: "Portes, fenêtres, vérandas, stores avec paramétrage complet : dimensions, quincaillerie, vitrages et performances thermiques.",
    },
    {
      id: "3",
      title:"Équipements techniques",
      description: "Appareils CVC, équipements industriels, luminaires avec connecteurs MEP et données techniques intégrées.",
    },
  ],
  "synthese-tce": [
    {
      id: "1",
      title:"Détection automatisée",
      description: "Analyse exhaustive des collisions entre tous les corps d’état avec classification par type et niveau de criticité.",
    },
    {
      id: "2",
      title:"Reporting professionnel",
      description: "Rapport complet avec captures d’écran, coordonnées des clashs et recommandations techniques pour la résolution.",
    },
    {
      id: "3",
      title:"Solutions techniques",
      description: "Propositions concrètes de résolution : dévoiements, modifications de tracés ou ajustements de conception selon les contraintes.",
    },
  ],
};
