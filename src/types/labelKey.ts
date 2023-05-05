const labelKeys = {
  generalInfo: {
    associationName: "Nom de la société",
    category: "Catégorie",
    eventName: "Nom de l'évènement",
    eventType: "Type d'évènement",
    numberOfQuote: "Numéro de devis",
    numberOfPeople: "Nombre de pax",
    dateAsISO: "Date d'évènement",
    comments: "Remarques",
  },
  program: {
    events: [
      {
        title: "Type",
        time: {
          start: "Heure de début",
          end: "Heure de fin",
        },
        place: "Lieu",
        numberOfPeople: "Nombre de pax",
        furnitureUsed: "Mobilier utilisé",
        catering: "Traiteurs",
        billedService: "Service facturé",
        eventLayout: "Format",
        details: "Détails",
        involvesRestaurant: "Restauration concernée",
      },
    ],
    comments: "Remarques",
  },
  wifi: {
    connectionInfo: [
      {
        username: "Identifiant",
        password: "Mot de passe",
      },
    ],
    comments: "Remarques",
  },
  configuration: [
    {
      room: "Lieu",
      numberOfPeople: "Nombre de pax",
      layout: "Configuration",
      furnishedBy: "Mobilier",
      microphones: "Microphones",
      visio: "Visio",
      captioning: "Captation",
      services: "Prestataires",
      comments: "Remarques",
    },
  ],
  contact: {
    individuals: [
      {
        companyName: "Nom de la société",
        contactName: "Nom de la personne",
        email: "Email",
        telephoneNumber: "Téléphone",
      },
    ],
    comments: "Remarques",
  },
  signage: {
    locationAndText: [
      {
        location: "Lieu",
        text: "Contenu",
      },
    ],
    comments: "Remarques",
  },
  creationDetails: {
    createdBy: "Vendu par",
  },
} as const;

export default labelKeys;
