import SignpostIcon from "@mui/icons-material/Signpost";
import { TextFieldElement } from "react-hook-form-mui";
import { TitledGroup } from "../layouts/TitledGroup";

export default function SignageGroup() {
  return (
    <TitledGroup icon={SignpostIcon} title="Signalétique">
      <TextFieldElement
        fullWidth
        label="Tableau d'accueil"
        name="signage.lobby"
      />
      <TextFieldElement fullWidth label="Remarques" name="signage.comments" />
    </TitledGroup>
  );
}
