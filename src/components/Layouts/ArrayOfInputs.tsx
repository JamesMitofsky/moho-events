import { Box, TextField, Button } from "@mui/material";
import { useFieldArray } from "react-hook-form";
import { TimeAndPlaceInput } from "../inputs/TimeAndPlaceInput";

interface Props {
  control: any;
  propLabel: string;
  register: any;
  children: React.ReactNode;
}

// TODO: make this component consume a list of components to render with the form hook
export default function ArrayOfInputs({
  control,
  register,
  propLabel,
  children,
}: Props) {
  const { fields, append, prepend, remove, swap, move, insert } = useFieldArray(
    {
      control, // control props comes from useForm (optional: if you are using FormContext)
      name: propLabel, // unique name for your Field Array
    }
  );

  const ctrlAndReg = { control, register };

  const loopedChildren = fields.map((field, index) => {
    return (
      <Box key={field.id} sx={{ display: "grid", gap: 2 }}>
        {/* <TextField
            label="Contenu"
            {...register(`${propLabel}[${index}].title` as const)}
          />
          <TimeAndPlaceInput
            parentObj={`${propLabel}[${index}]`}
            {...ctrlAndReg}
          /> */}
        ({children})
      </Box>
    );
  });

  return (
    <Box sx={{ display: "grid", gap: 2 }}>
      {loopedChildren}
      <Button variant="contained" onClick={() => append({})}>
        Ajouter une autre programme
      </Button>
    </Box>
  );
}
