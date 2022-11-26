type timeAndPlace = {
  time: Date;
  place: "entry1" | "publicSpace" | "vip3";
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
  organiserArrivalTime: timeAndPlace;
  participantArrivalTime: timeAndPlace;
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

export type {
  SocietyInputs,
  ContactInputs,
  ProgramInputs,
  WifiInputs,
  SignageInputs,
  timeAndPlace,
};
