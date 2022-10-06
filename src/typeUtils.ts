export interface GroupInfo {
  associationName: string;
  eventName: string;
  eventType: string;
  numberOfQuote: number;
  category: string;
  soldBy: string;
  comments: string;
  contact: {
    companyName: string;
    contactName: string;
    telephoneNumber: number;
    email: string;
  };
  id: string;
  startTime: Date;
  endTime: Date;
}

export interface DispatchSetEvents {
  setGroups: React.Dispatch<React.SetStateAction<GroupInfo[]>>;
}
export interface GroupStateObj {
  groups: GroupInfo[];
  setGroups: DispatchSetEvents["setGroups"];
}

export type LocalStorageKey = "groups";

export type UnfinishedGroup = "UnfinishedGroup";
