type timeAndPlace = {
  time: string;
  place:
    | "VIP 1"
    | "VIP 2"
    | "VIP 3"
    | "Amphi"
    | "Atrium"
    | "Biergarten"
    | "Cube | Rez de Chausser"
    | "Cube | +1"
    | "Atrium"
    | "Experiment room"
    | "Share"
    | "Moholicious"
    | "Imagine"
    | "Conference Room (Inspire)"
    | "Solve"
    | "Make Room"
    | "Lead"
    | "Cocktail espcae (à côté du Gymnase)"
    | "Gymnase";
};
type SocietyInputs = {
  associationName: string;
  category: string;
  eventName: string;
  eventType: string;
  numberOfQuote: number;
  soldBy: string;
  comments: string;
};

type ContactInputs = {
  companyName: string;
  contactName: string;
  telephoneNumber: number;
  email: string;
  comments: string;
};

type ProgramInputs = {
  numberOfPeople: number;
  organiserArrival: timeAndPlace;
  participantArrival: timeAndPlace;
  welcomeCoffee: timeAndPlace;
  firstMeetingLocation: timeAndPlace;
  lunch: timeAndPlace;
  secondMeetingLocation: timeAndPlace;
  departureTime: Date;
  comments: string;
};
type WifiInputs = {
  username: string;
  password: string;
};

type SignageInputs = {
  lobby: string;
  otherInfo: string;
  comments: string;
};

type AllEventGroups = {
  society: SocietyInputs;
  contact: ContactInputs;
  program: ProgramInputs;
  wifi: WifiInputs;
  signage: SignageInputs;
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

export type {
  SocietyInputs,
  ContactInputs,
  ProgramInputs,
  WifiInputs,
  SignageInputs,
  timeAndPlace,
  AllEventGroups,
  ModifiedServerResponse,
};
