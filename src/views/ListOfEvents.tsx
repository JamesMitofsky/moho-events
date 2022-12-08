import AddGroupButton from "../components/AddGroupButton";
import EventsList from "../components/EventsList";
import PageTitle from "../components/Layouts/PageTitle";

const ListOfEvents = () => {
  return (
    <>
      <PageTitle title="Liste des Groupes" />
      List of events
      <EventsList />
      <AddGroupButton />
    </>
  );
};

export default ListOfEvents;
