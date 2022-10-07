import { Button } from "@mui/material";
import { GroupInfo, EmptyForm } from "../typeUtils";
import { getLocalGroups, setLocalGroups } from "../utils/manageLocalStorage";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";

interface Props {
  emptyFormState: EmptyForm;
  formData: GroupInfo;
  setFormData: React.Dispatch<React.SetStateAction<GroupInfo>>;
}

const SubmitEvent = ({ emptyFormState, formData, setFormData }: Props) => {
  // declare hook at the component level to be called later
  const navigate = useNavigate();

  const clearOldFormData = () => {
    setFormData({ ...emptyFormState, id: uuidv4() });
  };

  const routeUserHome = () => {
    navigate("/");
  };

  const formNotValid = (): boolean => {
    const valueMissing: boolean = Object.values(formData).some(
      (value: string) => {
        if (value === "") return true;
        return false;
      }
    );

    return valueMissing ? true : false;
  };

  const pushEventToArray = () => {
    if (formNotValid()) {
      // todo: add error message for user
      alert("Veuillez remplir tous les champs");
      return;
    }

    // push new group to existing groups
    const existingGroups: GroupInfo[] = getLocalGroups();
    existingGroups.push(formData);

    // push the new inclusive array to local storage
    setLocalGroups(existingGroups);
    clearOldFormData();
    routeUserHome();
  };

  return (
    <Button sx={{ mt: 0.5, mb: 4 }} onClick={pushEventToArray}>
      Submit
    </Button>
  );
};
export default SubmitEvent;
