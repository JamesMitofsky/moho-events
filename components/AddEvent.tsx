import { GroupInfo } from "../typeUtils";
import { Button } from "@mui/material";
import uuid4 from "uuid4";
import { GroupStateObj } from "../typeUtils";

// this should be marked as a NextComponentType, but it's not accepting the Props param
// in the traditional <Props> fashion

const AddEvent = ({ groups, setGroups }: GroupStateObj) => {
  // TODO delete testing data
  const testGroup: GroupInfo = {
    name: "Nouvel événement",
    id: uuid4(),
    description: "",
    startTime: new Date(),
    endTime: new Date(),
  };

  const addGroup = () => {
    setGroups((prevGroups) => ({ ...prevGroups, testGroup }));
  };
  const openCreationModal = () => {
    console.log("open modal");
    setGroups([testGroup]);
  };
  console.log(groups);

  return <Button onClick={openCreationModal}>Add Event</Button>;
};

export default AddEvent;
