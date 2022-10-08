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

const updateLocalGroup = (group: GroupInfo) => {
  // get all groups
  const groups: GroupInfo[] = getLocalGroups();

  // filter out the group with a matching id
  const filteredGroups: GroupInfo[] = groups.filter(
    (groupItem: GroupInfo) => groupItem.id !== group.id
  );

  filteredGroups.push(group);

  // set local groups using the filtered list
  setLocalGroups(filteredGroups);
};

const deleteGroup = (group: GroupInfo) => {
  // get all groups
  const groups: GroupInfo[] = getLocalGroups();

  // filter out the group with a matching id
  const filteredGroups: GroupInfo[] = groups.filter(
    (groupItem: GroupInfo) => groupItem.id !== group.id
  );

  // set local groups using the filtered list
  setLocalGroups(filteredGroups);
};

export { getLocalGroups, setLocalGroups, updateLocalGroup, deleteGroup };
