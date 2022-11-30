import { signInWithGoogle } from "../services/firebase";
import { Button } from "@mui/material";
import { useContext } from "react";

export default function Login() {
  return (
    <>
      <Button onClick={signInWithGoogle}>login here</Button>
    </>
  );
}
