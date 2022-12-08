import { signInWithGoogle } from "../services/firebase";
import { Button } from "@mui/material";

export default function Login() {
  return (
    <>
      <Button onClick={signInWithGoogle}>login here</Button>
    </>
  );
}
