import { TitledGroup } from "../layouts/TitledGroup";
import { TextField, Box, Button, Divider } from "@mui/material";
import { useFieldArray, Control, UseFormRegister } from "react-hook-form";
import { AllEventGroups } from "../../utilities/globalTypes";
import WifiPasswordIcon from "@mui/icons-material/WifiPassword";

interface Props {
  register: UseFormRegister<AllEventGroups>;
  control: Control<AllEventGroups>;
}

export const WifiGroup = ({ register, control }: Props) => {
  const { fields, append, prepend, remove, swap, move, insert } = useFieldArray(
    {
      control, // control props comes from useForm (optional: if you are using FormContext)
      name: "wifi",
    }
  );
  return (
    <TitledGroup icon={WifiPasswordIcon} title={"Wifi Accés"}>
      <Box sx={{ display: "grid", gap: 2 }}>
        {fields.map((field, index) => (
          <Box key={field.id} sx={{ display: "grid", gap: 2 }}>
            <TextField
              label={"Identifiant"}
              {...register(`wifi.${index}.username`)}
            />
            <TextField
              label={"Mot de passe"}
              {...register(`wifi.${index}.password`)}
            />
            {/* prevent divider appearing beneath the last list item */}
            {fields.length > 1 && fields.length !== index + 1 && (
              <Divider sx={{ mt: 2, mb: 2 }} />
            )}
          </Box>
        ))}
        <Button
          variant="outlined"
          onClick={() => append({ username: "", password: "" })}
        >
          Ajouter un autre « Wifi Identifiant »
        </Button>
      </Box>
    </TitledGroup>
  );
};
