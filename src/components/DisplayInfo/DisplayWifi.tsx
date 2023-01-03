import { Box, Typography } from "@mui/material";
import {
  ProgramInputs,
  SignageInputs,
  WifiInputs,
} from "../../utils/globalTypes";
import { TitledGroup } from "../Layouts/TitledGroup";
import DisplayText from "./DisplayFormats/DisplayText";
import WifiPasswordIcon from "@mui/icons-material/WifiPassword";

export default function DisplayWifi({
  arrayOfWifis,
}: {
  arrayOfWifis: WifiInputs[];
}) {
  return (
    <TitledGroup icon={WifiPasswordIcon} title="Wifi Accés">
      {arrayOfWifis.map((wifi) => {
        return (
          <>
            <DisplayText content={wifi.username} label="Identifiant" />
            <DisplayText content={wifi.password} label="Mot de passe" />
          </>
        );
      })}
    </TitledGroup>
  );
}
