import Image from "mui-image";
import {
  MenuItem,
  Menu,
  Button,
  ListItemText,
  ListItemIcon,
} from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import {
  usePopupState,
  bindTrigger,
  bindMenu,
} from "material-ui-popup-state/hooks";

export default function UserIcon({ photoURL }: { photoURL: string }) {
  const popupState = usePopupState({ variant: "popover", popupId: "menu" });

  function handleLogout(popupState: any) {
    console.log("logout");
    popupState.close();
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
