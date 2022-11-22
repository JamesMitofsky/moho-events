export enum societyLabels {
  labelGroup = "Société",
  associationName = "Nom de la société",
  category = "Catégorie",
  eventName = "Nom de l'événement",
  eventType = "Type d'événement",
  numberOfQuote = "Nombre de devis",
  soldBy = "Vendu par",
  societyComments = "Commentaires de société",
}

export enum contactLabels {
  labelGroup = "Contact",
  companyName = "Nom de la société",
  contactName = "Nom de la personne",
  telephoneNumber = "Numéro de téléphone",
  email = "Email",
  contactComments = "Commentaires de contact",
}

export enum programLabels {
  labelGroup = "Programme",
  numberOfPeople = "Nombre de pax",
  organiserArrivalTime = "Arrivée organisateurs",
  participantArrivalTime = "Arrivée participants",
  welcomeCoffee = "Café d'accueil",
  firstMeeting = "Premier Réunion / Atelier",
  lunch = "Déjeuner",
  secondMeeting = "Deuxième Réunion / Atelier",
  departureTime = "Heure de départ",
  programComments = "Commentaires de programme",
}

export enum signageLabels {
  labelGroup = "Signalétique",
  lobby = "Tableau d'accueil",
  otherInfo = "Autres informations",
  signageComments = "Commentaires de signalétique",
}

export enum wifiAccessLabels {
  labelGroup = "Wifi Accés",
  username = "Identifiant",
  password = "Mot de passe",
}

// export all objects in an array
// export enum groupedFieldLabels [
//   societyLabels,
//   contactLabels,
//   programLabels,
//   signageLabels,
//   wifiAccessLabels,
// ];

export enum resturantFields {}

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

export { emptyFormState };
