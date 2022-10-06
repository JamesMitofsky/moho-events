import { Button } from "@mui/material";
import { GroupInfo, EmptyForm } from "../typeUtils";
import { getLocalGroups, setLocalGroups } from "../utils/manageLocalStorage";
import { v4 as uuidv4 } from "uuid";

interface Props {
  emptyFormState: EmptyForm;
  formData: GroupInfo;
  setFormData: React.Dispatch<React.SetStateAction<GroupInfo>>;
}

const SubmitEvent = ({ emptyFormState, formData, setFormData }: Props) => {
  const pushEventToArray = () => {
    console.log("pushing", formData);

    // push new group to existing groups
    const existingGroups: GroupInfo[] = getLocalGroups();
    existingGroups.push(formData);

    // push the new inclusive array to local storage
    setLocalGroups(existingGroups);
    clearOldFormData();
  };

  const clearOldFormData = () => {
    setFormData({ ...emptyFormState, id: uuidv4() });
  };

  return <Button onClick={pushEventToArray}>Submit</Button>;
};
export default SubmitEvent;
