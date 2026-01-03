export interface Project {
  id: number;
  title: string;
  context: string;
  mission: string;
  buildingType: string;
  results: string;
  images: string[];
}

export const projects = [
    {
        id: 1,
        title: "Carnet de détails produit",
        context: "Lancement d’un nouveau produit: solution d’isolation thermique par l’extérieur (en façade)",
        mission: "Modélisation du produit sur Revit et mise en scène sur une maquette du batîment concerné",
        buildingType: 'Immeuble',
        results: 'Gain de temps: mise à jour automatique des cotes et des plans',
        images: [
        "/assets/images/projets/projet-1/image1.jpg",
        "/assets/images/projets/projet-1/image2.jpg",
        "/assets/images/projets/projet-1/image3.jpg",
        "/assets/images/projets/projet-1/image4.jpg",
        "/assets/images/projets/projet-1/image5.jpg",
        ]
    },
    {
        id: 2,
        title: "Modélisation & plans CVC DEF SAN",
        context: "Dans le cadre d’un projet de bâtiment industriel existant, le bureau d’étude s’est vu devoir rendre une aquette BIM mais n’avait pas les ressources en interne pour le faire",
        mission: "Modélisation Chauffage / Ventilation et climatisation / Plomberie et sanitaire / Editions des plans phase APD / Rendu maquette RVT IFC et plans en PDF et DWG",
        buildingType: "Industriel",
        results: "Détection de conflits et gain de temps pour la synthèse",
        images: [
        "/assets/images/projets/projet-2/image1.jpg",
        "/assets/images/projets/projet-2/image2.jpg",
        "/assets/images/projets/projet-2/image3.jpg",
        ]
    },
    {
        id: 3,
        title: "Dépot de permis de construire",
        context: "Le client particulier a besoin d’un permis de construire pour l’extension de sa maison",
        mission: "Relevé manuel sur place avec utilisation de la triangulation / Modélisation de la maison / Edition des pièces écrites nécéssaires pour le permis de construire",
        buildingType: "Maison individuelle existante",
        results: "",
        images: [
        "/assets/images/projets/projet-3/image1.jpg",
        "/assets/images/projets/projet-3/image2.jpg",
        "/assets/images/projets/projet-3/image2.jpg",   
        ]
    }
]