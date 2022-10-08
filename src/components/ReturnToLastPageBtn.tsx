import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";

const ReturnToLastPageBtn = () => {
  const navigate = useNavigate();
  const routeUser = () => {
    navigate(-1);
  };

  return (
    <Button
      startIcon={<NavigateBeforeIcon />}
      onClick={routeUser}
      aria-label="return to last page"
    >
      Retourner
    </Button>
  );
};

export default ReturnToLastPageBtn;
