import { TextField, Box } from "@mui/material";
import { TimeAndPlaceInput } from "../inputs/TimeAndPlaceInput";
import { TitledGroup } from "../Layouts/TitledGroup";
import TextEditor from "../TextEditor";

interface Props {
  register: any;
  control: any;
}

export const RestoGroup = ({ register, control }: Props) => {
  const restoObj = "restaurant";
  // {`${restoObj}`} is a trick to avoid mistyping the object name

  return (
    <Box sx={{ display: "grid", gap: 2 }}>
      <TitledGroup title="Restauration">
        <TimeAndPlaceInput control={control} parentObj={`${restoObj}`} />
      </TitledGroup>
      <TextField
        label={"Nombre de pax"}
        {...register(`${restoObj}.numberOfPeople`)}
      />
      <TextEditor
        control={control}
        objLabel={`${restoObj}.details`}
        displayLabel="Détails"
      />
      <TextField label={"Prix"} {...register(`${restoObj}.price`)} />
      <TextField label={"Traiteurs"} {...register(`${restoObj}.catering`)} />
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
    </Box>
  );
};
