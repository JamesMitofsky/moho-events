import { TitledGroup } from "../Layouts/TitledGroup";
import { TextField, Box, Button, Divider } from "@mui/material";
import { useFieldArray, Control, UseFormRegister } from "react-hook-form";
import { AllEventGroups } from "../../utils/globalTypes";
import TextEditor from "../TextEditor";
import SelectMohoRoom from "../inputs/SelectMohoRoom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ControlledCheckbox from "../inputs/ControlledCheckbox";

interface Props {
  register: UseFormRegister<AllEventGroups>;
  control: Control<AllEventGroups>;
}

export const Configuration = ({ register, control }: Props) => {
  const { fields, append, prepend, remove, swap, move, insert } = useFieldArray(
    {
      control, // control props comes from useForm (optional: if you are using FormContext)
      name: "configuration",
    }
  );

  const handleAdd = () => {
    const blankConfiguration = {
      room: "",
      numberOfPeople: null,
      layout: "",
      furnishedBy: "",
      microphones: null,
      visio: null,
      captioning: null,
      services: "",
      comments: "",
    };
    append(blankConfiguration);
  };

  return (
    <TitledGroup icon={DashboardIcon} title="Mise en Place">
      <Box sx={{ display: "grid", gap: 2 }}>
        {fields.map((field, index) => (
          <Box key={field.id} sx={{ display: "grid", gap: 2 }}>
            <SelectMohoRoom
              control={control}
              propLabel={`configuration.${index}.room`}
              isUnique={true}
            />
            <TextField
              label="Nombre de pax"
              {...register(`configuration.${index}.numberOfPeople`)}
            />
            <TextField
              label="Configuration"
              {...register(`configuration.${index}.layout`)}
            />
            <TextField
              label="Mobilier"
              {...register(`configuration.${index}.furnishedBy`)}
            />
            <TextField
              label="Microphones"
              {...register(`configuration.${index}.microphones`)}
              type="number"
            />
            <ControlledCheckbox
              control={control}
              propLabel={`configuration.${index}.visio`}
              textLabel="Visio"
            />
            <ControlledCheckbox
              control={control}
              propLabel={`configuration.${index}.captioning`}
              textLabel="Captation"
            />
            <TextField
              label="Prestetaires"
              {...register(`configuration.${index}.services`)}
            />
            <TextEditor
              displayLabel="Remarques"
              objLabel={`configuration.${index}.comments`}
              control={control}
            />
            {/* prevent divider appearing beneath the last list item */}
            {fields.length > 1 && fields.length !== index + 1 && (
              <Divider sx={{ mt: 2, mb: 2 }} />
            )}
          </Box>
        ))}
        <Button variant="outlined" onClick={() => handleAdd()}>
          Ajouter un autre « Mise en Place »
        </Button>
      </Box>
    </TitledGroup>
  );
};
