import { useEffect, useState } from "react";
import { GroupInfo, GroupStateObj } from "../typeUtils";

import { getLocalGroups, setLocalGroups } from "../utils/manageLocalStorage";

import EventList from "../components/GroupList";
import AddGroupButton from "../components/AddGroupButton";

type GroupStateArray = [
  groups: GroupInfo[],
  setGroups: GroupStateObj["setGroups"]
];

const Home = () => {
  // store all group objects in this highest level array
  const [groups, setGroups]: GroupStateArray = useState<GroupInfo[]>([]);

  // on page load, push groups to rendered state
  useEffect(() => {
    // push response to the group state
    setGroups(getLocalGroups());
  }, []);

  // as a secondary effect, when the group state changes, push to local in the background
  useEffect(() => {
    // TODO find simpler way to avoid clearing the local storage
    if (groups.length === 0) return;
    // push response to the group state
    setLocalGroups(groups);
  }, [groups]);
  return (
    <>
      <EventList groups={groups} setGroups={setGroups} />
      <AddGroupButton />
    </>
  );
};

export default Home;
