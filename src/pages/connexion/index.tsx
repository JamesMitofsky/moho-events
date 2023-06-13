import PageTitle from "@/components/layouts/PageTitle";
import UserContext from "@/contexts/UserContext";
import { signInWithGoogle } from "@/services/firebase";
import GoogleIcon from "@mui/icons-material/Google";
import { LoadingButton } from "@mui/lab";
import { Box, Typography } from "@mui/material";
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
        Moho Events permet de facilement ajouter, modifier et gérer les
        évènements.
      </Typography>
      <LoadingButton
        startIcon={<GoogleIcon />}
        variant="outlined"
        onClick={handleClick}
        loading={isLoading}
        sx={{ my: 5 }}
      >
        Connexion
      </LoadingButton>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
        }}
      >
        <video
          autoPlay
          muted
          loop
          style={{ width: "100%", maxWidth: "500px", height: "auto" }}
        >
          <source src="moho-model.mp4" />
        </video>
      </Box>
    </>
  );
}
