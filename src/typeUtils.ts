export interface GroupInfo {
  associationName: string;
  eventName: string;
  eventType: string;
  numberOfQuote: string;
  category: string;
  soldBy: string;
  comments: string;
  companyName: string;
  contactName: string;
  telephoneNumber: string;
  email: string;
  id: string;
}

export interface GroupInfoFieldNames
  extends Omit<
    GroupInfo,
    "numberOfQuote" | "telephoneNumber" | "startTime" | "endTime" | "id"
  > {
  numberOfQuote: string;
  telephoneNumber: string;
  companyName: string;
  contactName: string;
  email: string;
  startTime: string;
  endTime: string;
}

export type EmptyForm = Omit<GroupInfo, "id">;

export interface DispatchSetEvents {
  setGroups: React.Dispatch<React.SetStateAction<GroupInfo[]>>;
}
export interface GroupStateObj {
  groups: GroupInfo[];
  setGroups: DispatchSetEvents["setGroups"];
}
