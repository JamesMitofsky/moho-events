import { getLocalGroups } from "../utils/manageLocalStorage";
import PageTitle from "../components/Layouts/PageTitle";
import { useState } from "react";
import SubmitEvent from "../components/SubmitEvent";
import { useLocation } from "react-router-dom";

import ReturnHome from "../components/ReturnHome";

const EditEvent = () => {
  return (
    <>
      <ReturnHome />
      <PageTitle title="Modifier un événement" />
    </>
  );
};

export default EditEvent;
