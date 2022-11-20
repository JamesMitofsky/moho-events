const societyLabels = {
  labelGroup: "Société",
  associationName: "Nom de la société",
  category: "Catégorie",
  eventName: "Nom de l'événement",
  eventType: "Type d'événement",
  numberOfQuote: "Nombre de devis",
  soldBy: "Vendu par",
  societyComments: "Commentaires de société",
};
const contactLabels = {
  labelGroup: "Contact",
  companyName: "Nom de la société",
  contactName: "Nom de la personne",
  telephoneNumber: "Numéro de téléphone",
  email: "Email",
  contactComments: "Commentaires de contact",
};

const programLabels = {
  labelGroup: "Programme",
  numberOfPeople: "Nombre de pax",
  organiserArrivalTime: "Arrivée organisateurs",
  participantArrivalTime: "Arrivée participants",
  welcomeCoffee: "Café d'accueil",
  firstMeeting: "Premier Réunion / Atelier",
  lunch: "Déjeuner",
  secondMeeting: "Deuxième Réunion / Atelier",
  departureTime: "Heure de départ",
  programComments: "Commentaires de programme",
};

const signageLabels = {
  labelGroup: "Signalétique",
  lobby: "Tableau d'accueil",
  otherInfo: "Autres informations",
  signageComments: "Commentaires de signalétique",
};

const wifiAccessLabels = {
  labelGroup: "Wifi Accés",
  username: "Identifiant",
  password: "Mot de passe",
};

// export all objects in an array
const groupedFieldLabels = [
  societyLabels,
  contactLabels,
  programLabels,
  signageLabels,
  wifiAccessLabels,
];

const resturantFields = {};

const emptyFormState = {
  associationName: "",
  eventName: "",
  eventType: "",
  numberOfQuote: "",
  category: "",
  soldBy: "",
  comments: "",
  companyName: "",
  contactName: "",
  telephoneNumber: "",
  email: "",
};

export { groupedFieldLabels, emptyFormState };
