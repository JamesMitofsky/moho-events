import { LocalStorageKey, GroupInfo } from "../typeUtils";

const getLocalGroups = (): GroupInfo[] | [] => {
  // push local storage to the group state
  const localKey: LocalStorageKey = "groups";
  const res: string = localStorage.getItem(localKey) || "undefined";

  // exit function if there was no local storage
  if (res === "undefined") return [];

  // return array of groups from local storage
  const parsedRes: GroupInfo[] = JSON.parse(res);
  return parsedRes;
};

const setLocalGroups = (groups: GroupInfo[]) => {
  // push local storage to the group state
  const localKey: LocalStorageKey = "groups";

  // stringify groups array
  const stringifiedGroups: string = JSON.stringify(groups);
  localStorage.setItem(localKey, stringifiedGroups);
};

export { getLocalGroups, setLocalGroups };
