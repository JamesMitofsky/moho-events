import UserContext from "@/contexts/UserContext";
import { useContext } from "react";
import Login from "./connexion";
import ListOfEvents from "./tout";

export default function HomePage() {
  const { user } = useContext(UserContext);

  return <>{user.displayName ? <ListOfEvents /> : <Login />}</>;
}
