import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";

const ReturnHome = () => {
  const navigate = useNavigate();
  const routeUser = () => {
    navigate("/");
  };

  return (
    <Button
      startIcon={<NavigateBeforeIcon />}
      onClick={routeUser}
      aria-label="return to last page"
    >
      Retourner à l'accueil
    </Button>
  );
};

export default ReturnHome;
