import { ComponentFactory } from "react";

export interface GroupInfo {
  associationName: string;
  eventName: string;
  eventType: string;
  numberOfQuote: number | null;
  category: string;
  soldBy: string;
  comments: string;
  companyName: string;
  contactName: string;
  telephoneNumber: number | null;
  email: string;
  id: string;
  startTime: Date;
  endTime: Date;
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
