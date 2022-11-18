const societyLabels = {
  associationName: "Nom de la société",
  category: "Catégorie",
  eventName: "Nom de l'événement",
  eventType: "Type d'événement",
  numberOfQuote: "Nombre de devis",
  soldBy: "Vendu par",
  societyComments: "Commentaires de société",
};
const contactLabels = {
  companyName: "Nom de la société",
  contactName: "Nom de la personne",
  telephoneNumber: "Numéro de téléphone",
  email: "Email",
  contactComments: "Commentaires de contact",
};

const programLabels = {
  numberOfPeople: "Nombre de pax",
  organiserArrivalTime: "Arrivée organisateurs",
  participantArrivalTime: "Arrivée participants",
  welcomeCoffee: "Café d'accueil",
  firstMeeting: "Réunion / Atelier",
  lunch: "Déjeuner",
  secondMeeting: "Réunion / Atelier",
  departureTime: "Heure de départ",
  programComments: "Commentaires de programme",
};

const signageLabels = {
  lobby: "Tableau d'accueil",
  otherInfo: "Autres informations",
  signageComments: "Commentaires de signalétique",
};

const wifiAccessLabels = {
  username: "Identifiant",
  password: "Mot de passe",
};

// export all objects in an array
const groupedFieldLabels = {
  ...societyLabels,
  ...contactLabels,
  ...programLabels,
  ...signageLabels,
  ...wifiAccessLabels,
};

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
