import AddGroupButton from "../components/AddGroupButton";
import PageTitle from "../components/Layouts/PageTitle";

const ListOfEvents = () => {
  return (
    <>
      <PageTitle title="Liste des Groupes" />
      List of events
      {/* <EventList groups={groups} setGroups={setGroups} /> */}
      <AddGroupButton />
    </>
  );
};

export default ListOfEvents;
