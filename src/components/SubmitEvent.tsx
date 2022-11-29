import { Button } from "@mui/material";
import { GroupInfo, EmptyForm } from "../utils/globalTypes";
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

  const routeUser = (path: string) => {
    navigate(path);
  };

  const formNotValid = (): boolean => {
    const valueMissing = Object.values(formData).some(x => Boolean(x))

    if (valueMissing) {
      alert("Veuillez remplir tous les champs");
    }

    return valueMissing;
  };

  const pushEventToArray = () => {
    if (formNotValid()) return;

    // push new group to existing groups
    const existingGroups = getLocalGroups();
    existingGroups.push(formData);

    // push the new inclusive array to local storage
    setLocalGroups(existingGroups);
    clearOldFormData();
    routeUser("/");
  };

  const updateEventInArray = () => {
    if (formNotValid()) return;

    // update the existing group
    updateLocalGroup(formData);

    // push the new inclusive array to local storage
    clearOldFormData();
    routeUser(`/evenement/${formData.id}`);
  };

  const handleClick = updateOrAdd === "add" ? pushEventToArray : updateEventInArray;

  return (
    <Button sx={{ mt: 0.5, mb: 4 }} onClick={handleClick}>
      Submit
    </Button>
  );
};
export default SubmitEvent;
