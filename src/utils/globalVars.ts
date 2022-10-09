import { EmptyForm, GroupInfoFieldNames } from "./globalTypes";

const emptyFormState: EmptyForm = {
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

const fieldNames: GroupInfoFieldNames = {
  associationName: "Nom de l'association",
  eventName: "Nom de l'événement",
  eventType: "Type d'événement",
  numberOfQuote: "Nombre de devis",
  category: "Catégorie",
  soldBy: "Vendu par",
  comments: "Commentaires",
  companyName: "Nom de l'entreprise",
  contactName: "Nom du contact",
  telephoneNumber: "Numéro de téléphone",
  email: "Email",
  startTime: "Date de début",
  endTime: "Date de fin",
};

export { emptyFormState, fieldNames };
