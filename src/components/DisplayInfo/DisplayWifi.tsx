import WifiPasswordIcon from "@mui/icons-material/WifiPassword";
import { WifiInputs } from "../../functions/globalTypes";
import { TitledGroup } from "../layouts/TitledGroup";
import DisplayText from "./DisplayFormats/DisplayText";

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
