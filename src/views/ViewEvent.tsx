import { useEffect, useState } from "react";
import { GroupInfo, GroupStateObj } from "../typeUtils";

import { getLocalGroups, setLocalGroups } from "../utils/manageLocalStorage";

import { useParams } from "react-router-dom";

const ViewEvent = () => {
  const { eventID } = useParams<{ eventID: string }>();
  return (
    <>
      Here's the ID:
      {eventID}
    </>
  );
};

export default ViewEvent;
