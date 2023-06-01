import { FieldPath } from "react-hook-form";

type GeneralInfoInputs = {
  associationName: string;
  category: string;
  eventName: string;
  eventType: string;
  numberOfQuote: string;
  numberOfPeople: string;
  dateAsISO: string;
  comments: string;
};

type ContactIndividual = {
  companyName: string;
  contactName: string;
  telephoneNumber: string;
  email: string;
};

type ContactInputs = {
  individuals: ContactIndividual[];
  comments: string;
};

type Places =
  | ""
  | "Entrée principale"
  | "Salle de conférence (Inspire)"
  | "Gymnase"
  | "Cube | Rez de Chaussée"
  | "Cube | +1"
  | "VIP 1"
  | "VIP 2"
  | "VIP 3"
  | "Amphi"
  | "Atrium"
  | "Dare"
  | "Rotonde"
  | "Disrupt"
  | "Biergarten"
  | "Atrium"
  | "Experiment"
  | "Share"
  | "Moholicious"
  | "Imagine"
  | "Solve"
  | "Make"
  | "Lead"
  | "Cocktail espcae (à côté du Gymnase)"
  | "4 Rue de la Gare";

type EventComponent = {
  title: string;
  time: {
    start: Date | string;
    end: Date | string;
  };
  place: Places[];
  numberOfPeople: string;
  furnitureUsed: string;
  catering: string;
  billedService: string;
  eventLayout: string;
  details: string;
  involvesRestaurant: boolean;
  cateringComments: string;
  comments: string;
};
interface ProgramInputs {
  events: EventComponent[];
  comments: string;
}

type UsernameAndPassword = {
  username: string;
  password: string;
};

type WifiInputs = {
  connectionInfo: UsernameAndPassword[];
  comments: string; // text editor
};

type SignageLocationAndText = {
  location: string;
  text: string;
};

type SignageInputs = {
  locationAndText: SignageLocationAndText[];
  comments: string; // text editor
};

type ConfigurationInputs = {
  room: string;
  numberOfPeople: string;
  layout: string;
  furnishedBy: string; // text editor
  microphones: string;
  visio: boolean | string;
  captioning: boolean | string;
  services: string;
  comments: string; // text editor
};

type AllEventGroups = {
  generalInfo: GeneralInfoInputs;
  contact: ContactInputs;
  program: ProgramInputs;
  wifi: WifiInputs;
  signage: SignageInputs;
  configuration: ConfigurationInputs[];
  creationDetails: {
    versionOfFormInputs: 1.2;
  };
};

interface ModifiedServerResponse extends AllEventGroups {
  creationDetails: {
    creatorId: string;
    createdAt: { seconds: number };
    createdBy: string;
    creatorEmail: string;
    versionOfFormInputs: 1.2;
  };
  id: string;
}

interface UserObject {
  uid: string;
  displayName: string;
  email: string;
  photoURL: string;
}

export const nameof = <T>(name: keyof T) => name;

type AllEventGroupPaths = FieldPath<AllEventGroups>;

type ModifiedServerResponsePaths = FieldPath<ModifiedServerResponse>;

export type {
  ModifiedServerResponsePaths,
  Places,
  GeneralInfoInputs,
  ContactInputs,
  ContactIndividual,
  ConfigurationInputs,
  ProgramInputs,
  WifiInputs,
  SignageInputs,
  AllEventGroups,
  ModifiedServerResponse,
  EventComponent,
  AllEventGroupPaths,
  UserObject,
  UsernameAndPassword,
  SignageLocationAndText,
};
