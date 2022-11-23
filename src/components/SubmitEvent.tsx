import { Button } from "@mui/material";

interface Props {
  formData: any;
}

// expecting formData to be a GroupInfo object — its resolution is handled in the parent component.
const SubmitEvent = ({}) => {
  const handleClick = () => {};

  return (
    <Button sx={{ mt: 0.5, mb: 4 }} onClick={handleClick}>
      Submit
    </Button>
  );
};
export default SubmitEvent;
