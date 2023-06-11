import CalendarPeople from "@/components/design/CalendarPeople";
import PageTitle from "@/components/layouts/PageTitle";
import UserContext from "@/contexts/UserContext";
import { signInWithGoogle } from "@/services/firebase";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import { LoadingButton } from "@mui/lab";
import { Typography } from "@mui/material";
import { useContext, useState } from "react";

export default function Login() {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { setUser } = useContext(UserContext);

  const handleClick = async () => {
    console.log("Login click detected");
    setIsLoading(true);
    const user = await signInWithGoogle();
    console.log("Login processing...");
    setUser(user.user);
    console.log("Login completed");

    console.log("Redirecting to /tout");
  };

  return (
    <>
      <PageTitle title="Bienvenue" />
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
