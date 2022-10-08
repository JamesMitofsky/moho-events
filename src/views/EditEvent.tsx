import AllTextInputs from "../components/AllTextInputs";
import { getLocalGroups } from "../utils/manageLocalStorage";
import PageTitle from "../components/PageTitle";
import { GroupInfo, EmptyForm } from "../typeUtils";
import { useState } from "react";
import SubmitEvent from "../components/SubmitEvent";
import { useLocation } from "react-router-dom";

const EditEvent = () => {
  // get id from URL
  const path = useLocation().pathname;
  const id = path.split("/")[2];

  const localGroups = getLocalGroups();
  const currentGroup: GroupInfo | undefined = localGroups.find(
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

  const emptyFormState: EmptyForm = {
    associationName: "",
    eventName: "",
    eventType: "",
    numberOfQuote: "",
    category: "",
    soldBy: "",
    comments: "",
    companyName: "",
    contactName: "",
    telephoneNumber: "",
    email: "",
  };

  return (
    <>
      <PageTitle title="Modifier un événement" />
      <AllTextInputs formData={group} updateFormData={updateFormData} />
      {/* <SubmitEvent
        emptyFormState={emptyFormState}
        formData={formData}
        setFormData={setFormData}
      /> */}
    </>
  );
};

export default EditEvent;
