import AllTextInputs from "../components/AllTextInputs";
import { getLocalGroups } from "../utils/manageLocalStorage";
import PageTitle from "../components/PageTitle";
import { GroupInfo } from "../utils/globalTypes";
import { useState } from "react";
import SubmitEvent from "../components/SubmitEvent";
import { useLocation } from "react-router-dom";
import { emptyFormState } from "../utils/globalVars";
import ReturnHome from "../components/ReturnHome";

const EditEvent = () => {
  // get id from URL
  const path = useLocation().pathname;
  const id = path.split("/")[2]; // TODO - split to method, add unit test - any better way to do this maybe like useParams?

  const localGroups = getLocalGroups();
  const currentGroup = localGroups.find(
    (thisGroup) => thisGroup.id === id
  );

  // update group state as fields are changed
  const [group, setGroup] = useState<GroupInfo>(currentGroup as GroupInfo);
  const updateFormData = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGroup((prevGroup) => ({
      ...prevGroup,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      <ReturnHome />
      <PageTitle title="Modifier un événement" />
      <AllTextInputs formData={group} updateFormData={updateFormData} />
      <SubmitEvent
        emptyFormState={emptyFormState}
        formData={group}
        setFormData={setGroup}
        updateOrAdd="update"
      />
    </>
  );
};

export default EditEvent;
