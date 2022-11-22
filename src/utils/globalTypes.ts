// types used locally within this global types file
interface timeAndPlace {
  dateAndTime: Date;
  place: "accueil" | "atrium" | "somewhere else" | "";
}

// input types
export interface SocietyInputs {
  associationName: string;
  category: string;
  eventName: string;
  eventType: string;
  numberOfQuote: number;
  soldBy: string;
  comments: string;
}

export interface ContactInputs {
  companyName: string;
  contactName: string;
  telephoneNumber: number;
  email: string;
  comments: string;
}

export interface ProgramInputs {
  numberOfPeople: number;
  organiserArrivalTime: timeAndPlace;
  participantArrivalTime: timeAndPlace;
  welcomeCoffee: timeAndPlace;
  firstMeetingLocation: timeAndPlace;
  lunch: timeAndPlace;
  secondMeetingLocation: timeAndPlace;
  departureTime: Date;
  comments: string;
}
export interface WifiInputs {
  username: string;
  password: string;
}

// export interface AllInputs = {...SocietyInputs; ContactInputs & ProgramInputs};
