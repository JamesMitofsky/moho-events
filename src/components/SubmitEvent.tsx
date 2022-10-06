import { Button } from "@mui/material";
import { GroupInfo } from "../typeUtils";
import { getLocalGroups, setLocalGroups } from "../utils/manageLocalStorage";
import { v4 as uuidv4 } from "uuid";

interface Props {
  formData: GroupInfo;
  setFormData: React.Dispatch<React.SetStateAction<GroupInfo>>;
}

const SubmitEvent = ({ formData, setFormData }: Props) => {
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
    setFormData({
      associationName: "",
      eventName: "",
      eventType: "",
      numberOfQuote: 0,
      category: "",
      soldBy: "",
      comments: "",
      companyName: "",
      contactName: "",
      telephoneNumber: 0,
      email: "",
      id: uuidv4(),
      startTime: new Date(),
      endTime: new Date(),
    });
  };

  return <Button onClick={pushEventToArray}>Submit</Button>;
};
export default SubmitEvent;
