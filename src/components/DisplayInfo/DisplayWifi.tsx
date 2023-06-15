import { WifiInputs } from "@/types/globalTypes";
import WifiPasswordIcon from "@mui/icons-material/WifiPassword";
import { Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import Grid from "@mui/system/Unstable_Grid";
import { v4 as uuid4 } from "uuid";
import { TitledGroup } from "../layouts/TitledGroup";
import TitledArrayOfElements from "../layouts/TitledItemFromArray";
import DisplayText from "./DisplayFormats/DisplayText";

export default function DisplayWifi({ connectionInfo, comments }: WifiInputs) {
  return (
    <TitledGroup icon={WifiPasswordIcon} title="Accès Wifi">
      {connectionInfo[0].username !== "" ? (
        connectionInfo.map((info, index) => {
          return (
            <TitledArrayOfElements
              key={uuid4()}
              typeOfItem="Wifi"
              index={index}
            >
              <DisplayText content={info.username} label="Identifiant" />
              <DisplayText content={info.password} label="Mot de passe" />
            </TitledArrayOfElements>
          );
        })
      ) : (
        <Grid xs={12}>
          <Typography sx={{ color: grey[600], fontSize: 12 }}>
            Aucune connexion de wifi
          </Typography>
        </Grid>
      )}

      <DisplayText content={comments} label="Remarques" />
    </TitledGroup>
  );
}
