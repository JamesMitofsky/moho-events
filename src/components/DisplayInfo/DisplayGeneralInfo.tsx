import GroupsIcon from "@mui/icons-material/Groups";
import Grid from "@mui/system/Unstable_Grid/Grid";
import {
  GeneralInfoInputs,
  ModifiedServerResponse,
} from "../../types/globalTypes";
import { TitledGroup } from "../layouts/TitledGroup";
import DisplayHTML from "./DisplayFormats/DisplayHTML";
import DisplayText from "./DisplayFormats/DisplayText";

type Props = GeneralInfoInputs & {
  createdBy: ModifiedServerResponse["creationDetails"]["createdBy"];
};

export default function DisplayGeneralInfo({
  associationName,
  category,
  eventName,
  numberOfQuote,
  comments,
  createdBy,
}: Props) {
  return (
    <TitledGroup icon={GroupsIcon} title="Société">
      <Grid container spacing={2}>
        <Grid xs={12} md={6}>
          <DisplayText content={associationName} label="Nom de la société" />
        </Grid>
        <Grid xs={12} md={6}>
          <DisplayText content={category} label="Catégorie" />
        </Grid>
        <Grid xs={12} md={6}>
          <DisplayText content={eventName} label="Nom de l'évènement" />
        </Grid>
        <Grid xs={12} md={6}>
          <DisplayText
            content={numberOfQuote.toString()}
            label="Nombre de devis"
          />
        </Grid>
        <Grid xs={12} md={6}>
          <DisplayText content={createdBy} label="Vendu par" />
        </Grid>

        <Grid xs={12} md={6}>
          <DisplayHTML html={comments} label="Remarques" />
        </Grid>
      </Grid>
    </TitledGroup>
  );
}
