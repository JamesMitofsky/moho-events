import { useParams } from "react-router-dom";
import MetaTags from "../components/MetaTags";

const ViewEvent = () => {
  const { eventID } = useParams<{ eventID: string }>();

  return (
    <>
      <MetaTags title={eventID} />
      Here's the ID: {eventID}
    </>
  );
};

export default ViewEvent;
