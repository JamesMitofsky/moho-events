import {
  MenuItem,
  Menu,
  Button,
  ListItemText,
  ListItemIcon,
} from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import HomeIcon from "@mui/icons-material/Home";
import {
  usePopupState,
  bindTrigger,
  bindMenu,
} from "material-ui-popup-state/hooks";
import { signOut, getAuth } from "firebase/auth";
import Avatar from "@mui/material/Avatar";
import Link from "next/link";

export default function UserIcon({
  photoURL,
  name,
}: {
  photoURL: string;
  name?: string;
}) {
  const popupState = usePopupState({ variant: "popover", popupId: "menu" });
  const auth = getAuth();

  function handleLogout(popupState: any) {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        popupState.close();
      })
      .catch((error) => {
        // An error happened.
      });
  }

  return (
    <>
      <Button id="user-profile-button" {...bindTrigger(popupState)}>
        <Avatar alt={name} src={photoURL} />
      </Button>
      <Menu {...bindMenu(popupState)}>
        <MenuItem component={Link} href="/tout">
          <ListItemIcon>
            <HomeIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>L'Accueil</ListItemText>
        </MenuItem>
        <MenuItem onClick={() => handleLogout(popupState)}>
          <ListItemIcon>
            <LogoutIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Déconnexion</ListItemText>
        </MenuItem>
      </Menu>
    </>
  );
}
