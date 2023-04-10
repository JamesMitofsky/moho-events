import WifiPasswordIcon from "@mui/icons-material/WifiPassword";
import { Box, Button, Divider } from "@mui/material";
import { useFieldArray } from "react-hook-form";
import { TextFieldElement } from "react-hook-form-mui";
import { TitledGroup } from "../layouts/TitledGroup";
import TitledGroupSubtitle from "../layouts/TitledGroupSubtitle";

export default function WifiGroup() {
  const { fields, append, prepend, remove, swap, move, insert } = useFieldArray(
    {
      name: "wifi",
    }
  );
  return (
    <TitledGroup icon={WifiPasswordIcon} title={"Wifi Accés"}>
      <Box sx={{ display: "grid", gap: 2 }}>
        {fields.map((field, index) => (
          <Box key={field.id} sx={{ display: "grid", gap: 2 }}>
            <TitledGroupSubtitle
              label="Code"
              index={index}
              listLength={fields.length}
            />
            <TextFieldElement
              fullWidth
              label="Identifiant"
              name={`wifi.${index}.username`}
            />
            <TextFieldElement
              fullWidth
              label="Mot de passe"
              name={`wifi.${index}.password`}
            />
            <Divider sx={{ my: 2 }} />
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
}
