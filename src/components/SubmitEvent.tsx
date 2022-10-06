import { Button } from "@mui/material";
import { GroupInfo } from "../typeUtils";

interface Props {
  formData: GroupInfo;
}

const SubmitEvent = ({ formData }: Props) => {
  const pushEventToArray = () => {
    console.log("pushing", formData);
  };

  return <Button onClick={pushEventToArray}>Submit</Button>;
};
export default SubmitEvent;
