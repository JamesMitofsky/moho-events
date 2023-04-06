import { FieldPath } from "react-hook-form";

type SocietyInputs = {
  associationName: string;
  category: string;
  eventName: string;
  eventType: string;
  numberOfQuote: number;
  soldBy: string;
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
    start: Date | null;
    end: Date | null;
  };
  place: Places[];
  numberOfPeople: number | null;
  furnitureUsed: string;
  catering: string[];
  billedService: number | null;
  eventLayout: string;
  details: string;
  involvesRestaurant: boolean;
};
interface ProgramInputs {
  comments: string;
  numberOfPeople: number;
  eventDate: Date | { seconds: number };
  departureTime: Date;
  events: EventComponent[];
}

type WifiInputs = {
  username: string;
  password: string;
};

type SignageInputs = {
  lobby: string;
  comments: string;
};

type ConfigurationInputs = {
  room: string;
  numberOfPeople: number | null;
  layout: string;
  furnishedBy: string; // text editor
  microphones: number | null;
  visio: boolean | null;
  captioning: boolean | null;
  services: string;
  comments: string; // text editor
};

type AllEventGroups = {
  society: SocietyInputs;
  contact: ContactInputs;
  program: ProgramInputs;
  wifi: WifiInputs[];
  signage: SignageInputs;
  configuration: ConfigurationInputs[];
};

interface ModifiedServerResponse extends AllEventGroups {
  creationDetails: {
    creatorId: string;
    createdAt: Date;
    createdBy: string;
    creatorEmail: string;
  };
  docId: string;
}

interface UserObject {
  uid: string;
  displayName: string;
  email: string;
  photoURL: string;
}

export const nameof = <T>(name: keyof T) => name;

type AllEventGroupPaths = FieldPath<AllEventGroups>;

export type {
  Places,
  SocietyInputs,
  ContactInputs,
  ContactIndividual,
  ProgramInputs,
  WifiInputs,
  SignageInputs,
  AllEventGroups,
  ModifiedServerResponse,
  EventComponent,
  AllEventGroupPaths,
  UserObject,
};