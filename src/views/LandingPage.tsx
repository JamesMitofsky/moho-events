import Welcome from "../components/Welcome";
import PageTitle from "../components/Layouts/PageTitle";

const Home = () => {
  return (
    <>
      {/* TODO: add real condition */}
      {true ? (
        <Welcome />
      ) : (
        <>
          <PageTitle title="Liste des Groupes" />
          List of events
          {/* <EventList groups={groups} setGroups={setGroups} /> */}
        </>
      )}
    </>
  );
};

export default Home;
