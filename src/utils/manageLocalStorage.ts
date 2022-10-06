import { GroupInfo } from "../typeUtils";

const getLocalGroups = (): GroupInfo[] | [] => {
  // push local storage to the group state
  const res: string =
    localStorage.getItem(import.meta.env.VITE_LOCALLY_STORED_GROUPS) ||
    "undefined";

  // exit function if there was no local storage
  if (res === "undefined") return [];

  // return array of groups from local storage
  const parsedRes: GroupInfo[] = JSON.parse(res);
  return parsedRes;
};

const setLocalGroups = (groups: GroupInfo[]) => {
  // stringify groups array
  const stringifiedGroups: string = JSON.stringify(groups);
  localStorage.setItem(
    import.meta.env.VITE_LOCALLY_STORED_GROUPS,
    stringifiedGroups
  );
};

export { getLocalGroups, setLocalGroups };
