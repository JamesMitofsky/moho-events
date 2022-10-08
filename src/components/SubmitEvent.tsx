import { Button } from "@mui/material";
import { GroupInfo, EmptyForm } from "../typeUtils";
import {
  getLocalGroups,
  setLocalGroups,
  updateLocalGroup,
} from "../utils/manageLocalStorage";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";

interface Props {
  emptyFormState: EmptyForm;
  formData: GroupInfo;
  setFormData: React.Dispatch<React.SetStateAction<GroupInfo>>;
  updateOrAdd: "update" | "add";
}

// expecting formData to be a GroupInfo object — its resolution is handled in the parent component.
const SubmitEvent = ({
  emptyFormState,
  formData,
  setFormData,
  updateOrAdd,
}: Props) => {
  // declare hook at the component level to be called later
  const navigate = useNavigate();

  const clearOldFormData = () => {
    setFormData({ ...emptyFormState, id: uuidv4() });
  };

  const routeUserHome = () => {
    navigate("/");
  };

  const routeUserBackToEvent = () => {
    navigate(`/evenement/${formData.id}`);
  };

  const formNotValid = (): boolean => {
    const valueMissing: boolean = Object.values(formData).some(
      (value: string) => {
        if (value === "") {
          alert("Veuillez remplir tous les champs");
          return true;
        }
        return false;
      }
    );

    return valueMissing ? true : false;
  };

  const pushEventToArray = () => {
    if (formNotValid()) return;

    // push new group to existing groups
    const existingGroups: GroupInfo[] = getLocalGroups();
    existingGroups.push(formData);

    // push the new inclusive array to local storage
    setLocalGroups(existingGroups);
    clearOldFormData();
    routeUserHome();
  };

  const updateEventInArray = () => {
    if (formNotValid()) return;

    // update the existing group
    updateLocalGroup(formData);

    // push the new inclusive array to local storage
    clearOldFormData();
    routeUserBackToEvent();
  };

  const handleClick: () => void =
    updateOrAdd === "add" ? pushEventToArray : updateEventInArray;

  return (
    <Button sx={{ mt: 0.5, mb: 4 }} onClick={handleClick}>
      Submit
    </Button>
  );
};
export default SubmitEvent;
