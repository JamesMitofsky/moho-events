import SignpostIcon from "@mui/icons-material/Signpost";
import { Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import Grid from "@mui/system/Unstable_Grid";
import { v4 as uuid4 } from "uuid";
import { SignageInputs } from "../../types/globalTypes";
import { TitledGroup } from "../layouts/TitledGroup";
import TitledArrayOfElements from "../layouts/TitledItemFromArray";
import DisplayHTML from "./DisplayFormats/DisplayHTML";
import DisplayText from "./DisplayFormats/DisplayText";

export default function DisplaySignage({
  locationAndText,
  comments,
}: SignageInputs) {
  return (
    <TitledGroup icon={SignpostIcon} title="Signalétique">
      {locationAndText[0].location !== "" ? (
        locationAndText.map((item, index) => {
          return (
            <TitledArrayOfElements
              key={uuid4()}
              label="Signalétique"
              index={index}
              listLength={locationAndText.length}
            >
              <DisplayText content={item.location} label="Lieu" />
              <DisplayText content={item.text} label="Contenu" />
            </TitledArrayOfElements>
          );
        })
      ) : (
        <Grid xs={12}>
          <Typography sx={{ color: grey[600], fontSize: 12 }}>
            Aucune partie de signalétique
          </Typography>
        </Grid>
      )}

      <DisplayHTML html={comments} label="Remarques" />
    </TitledGroup>
  );
}
