import Image from "mui-image";
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
import { useNavigate } from "react-router-dom";

export default function UserIcon({ photoURL }: { photoURL: string }) {
  const navigate = useNavigate();
  const routeHome = () => {
    navigate("/tout");
  };

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
        <Image
          style={{ borderRadius: "50%" }}
          src={photoURL}
          height={45}
          width="auto"
          shift="right"
          distance={10}
        />
      </Button>
      <Menu {...bindMenu(popupState)}>
        <MenuItem onClick={routeHome}>
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
