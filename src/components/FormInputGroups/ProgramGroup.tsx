import { TextField, Typography, Box, Button, Divider } from "@mui/material";
import { TitledGroup } from "../Layouts/TitledGroup";
import { TimeAndPlaceInput } from "../inputs/TimeAndPlaceInput";
import Time from "../inputs/Time";
import TextEditor from "../TextEditor";
import { useFieldArray, Control, UseFormRegister } from "react-hook-form";
import { AllEventGroups } from "../../utils/globalTypes";

interface Props {
  register: UseFormRegister<any>;
  control: Control<any>;
}

export const ProgramGroup = ({ register, control }: Props) => {
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
      {/* TODO: abstract into component container  */}
      <Box sx={{ display: "grid", gap: 2 }}>
        {fields.map((field, index) => (
          <Box key={field.id} sx={{ display: "grid", gap: 2 }}>
            <TextField
              label="Contenu"
              helperText="Ex: Pause café, Déjeuner, etc."
              {...register(`program.events[${index}].title`)}
            />
            <TimeAndPlaceInput
              parentObj={`program.events[${index}]`}
              {...allProps}
            />
            {/* prevent divider appearing beneath the last list item */}
            {fields.length > 1 && fields.length !== index + 1 && (
              <Divider sx={{ mt: 2, mb: 2 }} />
            )}
          </Box>
        ))}
        <Button variant="contained" onClick={() => append({})}>
          Ajouter une autre programme
        </Button>

        <Typography>Misc.</Typography>
        <TextField
          label={"Nombre de pax"}
          {...register("program.numberOfPeople")}
        />
        <TextEditor
          objLabel="program.comments"
          control={control}
          displayLabel="Remarques"
        />
        <Time
          control={control}
          dataLabel="program.depatureTime"
          textLabel="Heure de départ"
        />
      </Box>
    </TitledGroup>
  );
};
