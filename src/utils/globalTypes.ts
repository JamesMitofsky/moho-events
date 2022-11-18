// new types
interface dateAndTime {
  date: string;
  time: Date;
}
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
  organiserArrivalTime: dateAndTime;
  participantArrivalTime: dateAndTime;
  welcomeCoffee: dateAndTime;
  firstMeetingLocation: dateAndTime;
  lunch: dateAndTime;
  secondMeetingLocation: dateAndTime;
  departureTime: Date;
  comments: string;
}

// export interface DispatchSetEvents {
//   setGroups: React.Dispatch<React.SetStateAction<GroupInfo[]>>;
// }
// export interface GroupStateObj {
//   groups: GroupInfo[];
//   setGroups: DispatchSetEvents["setGroups"];
// }
