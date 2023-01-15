import { AppBar, Toolbar } from "@mui/material";
import MohoEventsLogo from "../MohoEventsLogo";
import { Link } from "react-router-dom";
import UserContext from "../../services/UserContext";
import { useContext } from "react";
import UserIcon from "./UserIcon";

const NavBar = () => {
  const { photoURL, displayName } = useContext(UserContext);

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
        <Link to="/tout">
          <MohoEventsLogo color="white" height={45} />
        </Link>
        <UserIcon photoURL={photoURL} name={displayName} />
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
