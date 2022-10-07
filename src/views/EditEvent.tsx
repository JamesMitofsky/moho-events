import AllTextInputs from "../components/AllTextInputs";
import { getLocalGroups, setLocalGroups } from "../utils/manageLocalStorage";
import PageTitle from "../components/PageTitle";
import { GroupInfo } from "../typeUtils";
import { useState } from "react";

const EditEvent = () => {
  const [formData, setFormData] = useState<GroupInfo>({} as GroupInfo);

  const localGroups = getLocalGroups();

  const currentGroup: GroupInfo | undefined = localGroups.find(
    (group) => group.id === formData.id
  );

  return (
    <>
      <PageTitle title="Modifier un événement" />
      {/* <AllTextInputs formData={formData} updateFormData={updateFormData} /> */}
    </>
  );
};

export default EditEvent;
