import { useEffect, useState } from "react";
import { GroupInfo, GroupStateObj } from "../typeUtils";
import { getLocalGroups, setLocalGroups } from "../utils/manageLocalStorage";
import EventList from "../components/GroupList";
import Welcome from "../components/Welcome";
import PageTitle from "../components/PageTitle";

type GroupStateArray = [
  groups: GroupInfo[],
  setGroups: GroupStateObj["setGroups"]
];

const Home = () => {
  // store all group objects in this highest level array
  const [groups, setGroups]: GroupStateArray = useState<GroupInfo[]>([]);
  // track state of local storage to avoid overwriting it
  const [localChecked, setLocalChecked] = useState<boolean>(false);

  // on page load, push groups to rendered state
  useEffect(() => {
    // push response to the group state
    setGroups(getLocalGroups());
    setLocalChecked(true);
  }, []);

  // as a secondary effect, when the group state changes, push to local in the background
  useEffect(() => {
    if (!localChecked) return;

    // push response to the group state
    setLocalGroups(groups);
  }, [groups]);
  return (
    <>
      {groups.length === 0 ? (
        <Welcome />
      ) : (
        <>
          <PageTitle title="Liste des Groupes" />
          <EventList groups={groups} setGroups={setGroups} />
        </>
      )}
    </>
  );
};

export default Home;
