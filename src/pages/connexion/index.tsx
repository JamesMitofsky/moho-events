import CalendarPeople from "@/components/design/CalendarPeople";
import PageTitle from "@/components/layouts/PageTitle";
import { signInWithGoogle } from "@/services/firebase";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import { LoadingButton } from "@mui/lab";
import { Typography } from "@mui/material";
import { useState } from "react";

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
        évènements.
      </Typography>
      <LoadingButton
        startIcon={<HowToRegIcon />}
        variant="outlined"
        onClick={handleClick}
        loading={isLoading}
        sx={{ my: 5 }}
      >
        Authentifier avec Google
      </LoadingButton>
      <CalendarPeople widthLimit={3} />
    </>
  );
}
