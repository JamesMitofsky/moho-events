import { AppBar, Toolbar } from "@mui/material";
import MohoEventsLogo from "./MohoEventsLogo";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <AppBar sx={{ mb: 2 }} position="static">
      <Toolbar sx={{ pt: 0.2, pb: 0.6 }}>
        <Link to="/">
          <MohoEventsLogo color="white" height={45} />
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
