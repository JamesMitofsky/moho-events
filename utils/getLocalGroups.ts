import { LocalStorageKey, GroupInfo } from "../typeUtils";

const getLocalGroups = (isPageReady: boolean): GroupInfo[] | [] => {
  if (!isPageReady) return [];

  // push local storage to the group state
  const localKey: LocalStorageKey = "groups";
  const res: string = localStorage.getItem(localKey) || "undefined";

  // exit function if there was no local storage
  if (res === "undefined") return [];

  // return array of groups from local storage
  const parsedRes: GroupInfo[] = JSON.parse(res);
  return parsedRes;
};

export default getLocalGroups;
