export type GroupInfo = {
  name: string;
  id: string;
  description: string;
  startTime: Date;
  endTime: Date;
};

export interface DispatchSetEvents {
  setGroups: React.Dispatch<React.SetStateAction<GroupInfo[]>>;
}
export interface GroupStateObj {
  groups: GroupInfo[];
  setGroups: DispatchSetEvents["setGroups"];
}

export type LocalStorageKey = "groups";
