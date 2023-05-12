import HomeIcon from "@mui/icons-material/Home";
import LogoutIcon from "@mui/icons-material/Logout";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import {
  Button,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
} from "@mui/material";
import Avatar from "@mui/material/Avatar";
import { getAuth, signOut } from "firebase/auth";
import {
  bindMenu,
  bindTrigger,
  usePopupState,
} from "material-ui-popup-state/hooks";
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
        <MenuItem component={Link} href="/restauration">
          <ListItemIcon>
            <RestaurantMenuIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Restauration</ListItemText>
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
