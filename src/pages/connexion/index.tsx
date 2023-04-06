import PageTitle from "@/components/layouts/PageTitle";
import CalendarPeople from "@/components/design/CalendarPeople";
import { signInWithGoogle } from "@/services/firebase";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import { Typography } from "@mui/material";
import { useState } from "react";
import { LoadingButton } from "@mui/lab";

export default function Login() {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleClick = () => {
    setIsLoading(true);
    signInWithGoogle();
  };

  return (
    <>
      <PageTitle title="Bienvenu" />
      <Typography variant="subtitle1">
        Moho Events permet de facilement ajouter, modifier et partager les
        evenements.
      </Typography>
      <LoadingButton
        startIcon={<HowToRegIcon />}
        variant="outlined"
        onClick={handleClick}
        loading={isLoading}
        sx={{ mt: 5, mb: 5 }}
      >
        Authentifier avec Google
      </LoadingButton>
      <CalendarPeople widthLimit={3} />
    </>
  );
}
