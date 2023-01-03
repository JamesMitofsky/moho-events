import AddGroupButton from "../components/AddGroupButton";
import EventsList from "../components/EventsList";
import PageTitle from "../components/Layouts/PageTitle";

const ListOfEvents = () => {
  return (
    <>
      <PageTitle title="Les Events" />
      <EventsList />
      <AddGroupButton />
    </>
  );
};

export default ListOfEvents;
