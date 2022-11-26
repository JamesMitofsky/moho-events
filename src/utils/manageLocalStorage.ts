const getLocalGroups = (): any[] | [] => {
  // push local storage to the group state
  const res: string =
    localStorage.getItem(import.meta.env.VITE_LOCALLY_STORED_GROUPS) ||
    "undefined";

  // exit function if there was no local storage
  if (res === "undefined") return [];

  // return array of groups from local storage
  const parsedRes: any[] = JSON.parse(res);
  return parsedRes;
};

const setLocalGroups = (groups: any[]) => {
  // stringify groups array
  const stringifiedGroups: string = JSON.stringify(groups);
  localStorage.setItem(
    import.meta.env.VITE_LOCALLY_STORED_GROUPS,
    stringifiedGroups
  );
};

const updateLocalGroup = (group: any) => {
  // get all groups
  const groups: any[] = getLocalGroups();

  // filter out the group with a matching id
  const filteredGroups: any[] = groups.filter(
    (groupItem: any) => groupItem.id !== group.id
  );

  filteredGroups.push(group);

  // set local groups using the filtered list
  setLocalGroups(filteredGroups);
};

const deleteGroup = (group: any) => {
  // get all groups
  const groups: any[] = getLocalGroups();

  // filter out the group with a matching id
  const filteredGroups: any[] = groups.filter(
    (groupItem: any) => groupItem.id !== group.id
  );

  // set local groups using the filtered list
  setLocalGroups(filteredGroups);
};

export { getLocalGroups, setLocalGroups, updateLocalGroup, deleteGroup };
