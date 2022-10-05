import { Button } from "@mui/material";
import { v4 as uuidv4 } from "uuid";
import { GroupStateObj, GroupInfo } from "../typeUtils";

const AddGroup = ({ groups, setGroups }: GroupStateObj) => {
  // TODO delete testing data
  const testGroup: GroupInfo = {
    name: "Nouvel événement",
    id: uuidv4(),
    description: "",
    startTime: new Date(),
    endTime: new Date(),
  };

  const addGroup = () => {
    setGroups((prevGroups) => [...prevGroups, testGroup]);
  };

  return <Button onClick={addGroup}>Add Testing Data</Button>;
};

export default AddGroup;
