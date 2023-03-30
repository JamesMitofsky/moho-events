import PageTitle from "../components/Layouts/PageTitle";
import CalendarPeople from "../components/design/CalendarPeople";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import { signInWithGoogle } from "../services/firebase";
import { Typography } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { useState } from "react";

export default function Login() {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleClick = () => {
    setIsLoading(true);
    signInWithGoogle();
  };

  function loginSuccess() {
    console.log("yip yuip");
  }

  return (
    <>
      <PageTitle title="Bienvenu" />
      <Typography variant="subtitle1">
        Moho Events permet de facilement ajouter, modifier et partager les
        evenements.
      </Typography>
      <div
        id="g_id_onload"
        data-client_id="1034566431316-6spots3luhs3t32baoutqc4rfoe2ejg8.apps.googleusercontent.com"
        data-context="signin"
        data-callback="loginSuccess"
        data-auto_select="true"
        data-itp_support="true"
        referrer-policy="no-referrer-when-downgrade"
      >
        this is it
      </div>
      <CalendarPeople widthLimit={3} />
    </>
  );
}
