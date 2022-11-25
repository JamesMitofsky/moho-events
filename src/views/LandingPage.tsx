import { GroupInfo } from "../utils/globalTypes";
import EventList from "../components/GroupList";
import Welcome from "../components/Welcome";
import PageTitle from "../components/Layouts/PageTitle";
import { useStorageState } from "react-storage-hooks";

const Home = () => {
  const [groups, setGroups, writeError] = useStorageState<GroupInfo[]>(
    localStorage,
    import.meta.env.VITE_LOCALLY_STORED_GROUPS,
    []
  );

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
