import { AppBar, Toolbar } from "@mui/material";
import MohoEventsLogo from "../MohoEventsLogo";
import { Link } from "react-router-dom";
import UserContext from "../../services/UserContext";
import { useContext } from "react";
import Image from "mui-image";

const NavBar = () => {
  const user = useContext(UserContext);
  console.log(user.photoURL);
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
        <Link to="/">
          <MohoEventsLogo color="white" height={45} />
        </Link>
        <Image
          style={{ borderRadius: "50%" }}
          src={user.photoURL}
          height={45}
          width="auto"
          shift="right"
        />
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
