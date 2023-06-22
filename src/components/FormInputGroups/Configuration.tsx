import Grid from "@mui/system/Unstable_Grid";
import { SwitchElement, TextFieldElement } from "react-hook-form-mui";
import SelectMohoRoom from "../inputs/SelectMohoRoom";
import SelectOptions from "../inputs/SelectOptions";

type Props = {
  index: number;
};

export default function ConfigurationGroup({ index }: Props) {
  return (
    <>
      <Grid xs={12} md={6}>
        <SelectMohoRoom
          name={`program.events.${index}.configuration.room`}
          multiple={true}
        />
      </Grid>

      <Grid xs={12} md={6}>
        <TextFieldElement
          fullWidth
          label="Nombre de personnes"
          name={`program.events.${index}.configuration.numberOfPeople`}
        />
      </Grid>

      <Grid xs={12} md={6}>
        <TextFieldElement
          fullWidth
          label="Configuration"
          name={`program.events.${index}.configuration.layout`}
        />
      </Grid>

      <Grid xs={12} md={6}>
        <TextFieldElement
          fullWidth
          multiline
          label="Mobilier"
          name={`program.events.${index}.configuration.furnishedBy`}
        />
      </Grid>

      <Grid xs={12} md={6}>
        <TextFieldElement
          fullWidth
          label="Microphones"
          name={`program.events.${index}.configuration.microphones`}
          type="number"
        />
      </Grid>

      <Grid xs={12} md={6}>
        <SelectOptions
          multiple={true}
          label="Prestataires"
          name={`program.events.${index}.configuration.services`}
          options={[]}
        />
      </Grid>

      <Grid xs={12} md={6}>
        <SwitchElement
          label="Visio"
          name={`program.events.${index}.configuration.visio`}
        />
      </Grid>

      <Grid xs={12} md={6}>
        <SwitchElement
          label="Captation"
          name={`program.events.${index}.configuration.captioning`}
        />
      </Grid>

      <Grid xs={12}>
        <TextFieldElement
          fullWidth
          multiline
          label="Remarques specifique à cette configuration"
          name={`program.events.${index}.configuration.comments`}
        />
      </Grid>
    </>
  );
}
