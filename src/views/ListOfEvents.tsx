import AddGroupButton from "../components/AddGroupButton";
import EventsList from "../components/EventsList";
import PageTitle from "../components/Layouts/PageTitle";

const ListOfEvents = () => {
  return (
    <>
      <PageTitle title="Liste des Groupes" />
      <EventsList />
      <AddGroupButton />
    </>
  );
};

export default ListOfEvents;
