import SelectOptions from "@/components/inputs/SelectOptions";
import Grid from "@mui/material/Unstable_Grid2";
import { TextFieldElement } from "react-hook-form-mui";

type Props = {
  index: number;
  cateringOptions: string[];
  formatConfigurations: string[];
};

export default function CateringInputGroup({
  index,
  cateringOptions,
  formatConfigurations,
}: Props) {
  return (
    <>
      <Grid xs={12} md={6}>
        <TextFieldElement
          fullWidth
          label="Nombre de personnes"
          name={`program.events.${index}.numberOfPeople`}
        />
      </Grid>
      <Grid xs={12} md={6}>
        <SelectOptions
          multiple={true}
          label="Traiteurs"
          name={`program.events.${index}.catering`}
          options={cateringOptions}
        />
      </Grid>
      <Grid xs={12} md={6}>
        <TextFieldElement
          fullWidth
          label="Service facturé"
          name={`program.events.${index}.billedService`}
        />
      </Grid>
      <Grid xs={12} md={6}>
        <SelectOptions
          label="Format"
          name={`program.events.${index}.eventLayout`}
          options={formatConfigurations}
        />
      </Grid>
      <Grid xs={12} md={6}>
        <TextFieldElement
          fullWidth
          label="Prix / forfait"
          name={`program.events.${index}.membership`}
        />
      </Grid>
      <Grid xs={12} md={6}>
        <TextFieldElement
          multiline
          fullWidth
          label="Mobilier utilisé"
          name={`program.events.${index}.furnitureUsed`}
        />
      </Grid>
      <Grid xs={12} md={6}>
        <TextFieldElement
          multiline
          fullWidth
          label="Détails"
          name={`program.events.${index}.details`}
        />
      </Grid>
      <Grid xs={12} md={6}>
        <TextFieldElement
          multiline
          fullWidth
          label="Remarques de restauration"
          name={`program.events.${index}.cateringComments`}
        />
      </Grid>
    </>
  );
}
