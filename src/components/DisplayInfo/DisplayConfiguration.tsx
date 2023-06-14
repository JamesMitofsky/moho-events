import { ConfigurationInputs } from "@/types/globalTypes";
import HandymanIcon from "@mui/icons-material/Handyman";
import { Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import Grid from "@mui/system/Unstable_Grid";
import { v4 as uuid4 } from "uuid";
import { TitledGroup } from "../layouts/TitledGroup";
import TitledArrayOfElements from "../layouts/TitledItemFromArray";
import DisplayBoolean from "./DisplayFormats/DisplayBoolean";
import DisplayList from "./DisplayFormats/DisplayList";
import DisplayText from "./DisplayFormats/DisplayText";

type Props = {
  configurations: ConfigurationInputs[];
};

export default function DisplayConfiguration({ configurations }: Props) {
  return (
    <TitledGroup icon={HandymanIcon} title="Configuration">
      {configurations[0].room[0] ? (
        configurations.map((configuration, index) => {
          return (
            <TitledArrayOfElements
              key={uuid4()}
              typeOfItem="Partie"
              index={index}
            >
              <DisplayList items={configuration.room} label="Lieu" />

              <DisplayText
                content={configuration.numberOfPeople}
                label="Nombre de personnes"
              />
              <DisplayText
                content={configuration.layout}
                label="Configuration"
              />
              <DisplayText
                content={configuration.furnishedBy}
                label="Mobilier"
              />
              <DisplayText
                content={configuration.microphones}
                label="Microphones"
              />
              <DisplayList
                items={configuration.services}
                label="Prestataires"
              />

              <DisplayBoolean boolean={configuration.visio} label="Visio" />
              <DisplayBoolean
                boolean={configuration.captioning}
                label="Captation"
              />
              <DisplayText content={configuration.comments} label="Remarques" />
            </TitledArrayOfElements>
          );
        })
      ) : (
        <Grid xs={12}>
          <Typography sx={{ color: grey[600], fontSize: 12 }}>
            Acune configuration
          </Typography>
        </Grid>
      )}
    </TitledGroup>
  );
}
