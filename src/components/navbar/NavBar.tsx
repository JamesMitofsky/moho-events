import { AppBar, Toolbar } from "@mui/material";
import Link from "next/link";
import { useContext } from "react";
import UserContext from "../../contexts/UserContext";
import MohoEventsLogo from "../MohoEventsLogo";
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
        <Link href="/tout">
          <MohoEventsLogo color="white" height={45} />
        </Link>
        {photoURL && displayName && (
          <UserIcon photoURL={photoURL} name={displayName} />
        )}
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
