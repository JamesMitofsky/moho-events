import { TextField, Box } from "@mui/material";
import { TimeAndPlaceInput } from "../inputs/TimeAndPlaceInput";
import { TitledGroup } from "../Layouts/TitledGroup";
import TextEditor from "../TextEditor";
import { Control, UseFormRegister } from "react-hook-form";
import { AllEventGroups } from "../../utils/globalTypes";
import SelectOptions from "../inputs/SelectOptions";

interface Props {
  register: UseFormRegister<AllEventGroups>;
  control: Control<AllEventGroups>;
}

export const RestoGroup = ({ register, control }: Props) => {
  const restoObj = "restaurant";
  // {`${restoObj}`} is a trick to avoid mistyping the object name

  return (
    <Box sx={{ display: "grid", gap: 2 }}>
      <TitledGroup title="Restauration">
        <TimeAndPlaceInput control={control} parentObj={`${restoObj}`} />
        <TextField
          label={"Nombre de pax"}
          {...register(`${restoObj}.numberOfPeople`)}
        />
        <TextEditor
          control={control}
          objLabel={`${restoObj}.details`}
          displayLabel="Détails"
        />
        <TextEditor
          control={control}
          objLabel={`${restoObj}.price`}
          displayLabel="Prix"
        />
        <SelectOptions
          control={control}
          propLabel={`${restoObj}.catering`}
          textLabel="Traiteurs"
          options={[]}
          helperText="Tappez 'Entrée' après chaque traiteur"
        />
        <TextEditor
          control={control}
          objLabel={`${restoObj}.furnitureUsed`}
          displayLabel="Mobilier utilisé"
        />
        <TextEditor
          control={control}
          objLabel={`${restoObj}.comments`}
          displayLabel="Remarques"
        />
      </TitledGroup>
    </Box>
  );
};
