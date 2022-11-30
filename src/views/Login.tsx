import { signInWithGoogle } from "../services/firebase";
import { Button } from "@mui/material";
import { useContext } from "react";
import UserContext from "../services/UserContext";

export default function Login() {
  let msg = useContext(UserContext);
  const user = useContext(UserContext);
  console.log("inside login", user);
  return (
    <>
      <Button onClick={signInWithGoogle}>login here</Button>
    </>
  );
}
