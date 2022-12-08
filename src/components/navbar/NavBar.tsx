import { AppBar, Toolbar } from "@mui/material";
import MohoEventsLogo from "../MohoEventsLogo";
import { Link } from "react-router-dom";
import UserContext from "../../services/UserContext";
import { useContext } from "react";
import UserIcon from "./UserIcon";

const NavBar = () => {
  const { photoURL }: { photoURL: string } = useContext(UserContext);

  return (
    <AppBar sx={{ mb: 2 }} position="static">
      <Toolbar
        sx={{
          pt: 0.2,
          pb: 0.6,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Link to="/liste-des-evenements">
          <MohoEventsLogo color="white" height={45} />
        </Link>
        {photoURL && <UserIcon photoURL={photoURL} />}
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
