import { TextField, Typography, Box, Button } from "@mui/material";
import { TitledGroup } from "../Layouts/TitledGroup";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { TimeAndPlaceInput } from "../inputs/TimeAndPlaceInput";
import Time from "../inputs/Time";
import { useFieldArray } from "react-hook-form";
import TextEditor from "../TextEditor";

interface Props {
  register: any;
  control: any;
  setValue: any;
}

export const ProgramGroup = ({ register, control, setValue }: Props) => {
  const allProps = {
    register,
    control,
  };

  const { fields, append, prepend, remove, swap, move, insert } = useFieldArray(
    {
      control, // control props comes from useForm (optional: if you are using FormContext)
      name: "program.events", // unique name for your Field Array
    }
  );

  return (
    <TitledGroup title="Programme">
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        {/* TODO: abstract into component container  */}
        <Box sx={{ display: "grid", gap: 2 }}>
          {fields.map((field, index) => (
            <Box key={field.id} sx={{ display: "grid", gap: 2, mb: 5 }}>
              <TextField
                label="Contenu"
                {...register(`program.events[${index}].title` as const)}
              />
              <TimeAndPlaceInput
                parentObj={`program.events[${index}]`}
                {...allProps}
              />
            </Box>
          ))}
          <Button variant="outlined" onClick={() => append({})}>
            Ajouter une autre programme
          </Button>

          <Typography>Misc.</Typography>
          <TextField
            label={"Nombre de pax"}
            {...register("program.numberOfPeople")}
          />
          <TextEditor objLabel="program.comments" control={control} />
          {/* <TextField label={"Remarque"} {...register("program.comments")} /> */}
          <Time
            control={control}
            dataLabel="program.depatureTime"
            textLabel="Heure de départ"
          />
        </Box>
      </LocalizationProvider>
    </TitledGroup>
  );
};
