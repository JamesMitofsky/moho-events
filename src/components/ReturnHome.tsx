import { Button } from "@mui/material";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import Link from "next/link";

const ReturnHome = () => {
  return (
    <Button
      startIcon={<NavigateBeforeIcon />}
      component={Link}
      href="/tout"
      aria-label="Retour à l'accueil"
    >
      Retourner à l'accueil
    </Button>
  );
};

export default ReturnHome;
