import { AppBar, Toolbar } from "@mui/material";
import MohoEventsLogo from "./MohoEventsLogo";

const NavBar = () => {
  return (
    <AppBar sx={{ mb: 2 }} position="static">
      <Toolbar sx={{ pt: 0.2, pb: 0.6 }}>
        <MohoEventsLogo color="white" height={45} />
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
