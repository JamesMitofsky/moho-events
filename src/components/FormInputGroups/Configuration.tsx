import DashboardIcon from "@mui/icons-material/Dashboard";
import { Box, Button, Divider } from "@mui/material";
import { useFieldArray } from "react-hook-form";
import { TextFieldElement } from "react-hook-form-mui";
import ControlledCheckbox from "../inputs/ControlledCheckbox";
import SelectMohoRoom from "../inputs/SelectMohoRoom";
import TextEditor from "../inputs/TextEditor";
import { TitledGroup } from "../layouts/TitledGroup";
import TitledGroupSubtitle from "../layouts/TitledGroupSubtitle";

export default function ConfigurationGroup() {
  const { fields, append, prepend, remove, swap, move, insert } = useFieldArray(
    {
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
            <TitledGroupSubtitle
              label="Configuration"
              index={index}
              listLength={fields.length}
            />
            <SelectMohoRoom
              propLabel={`configuration.${index}.room`}
              isUnique={true}
            />
            <TextFieldElement
              fullWidth
              label="Nombre de pax"
              name={`configuration.${index}.numberOfPeople`}
            />
            <TextFieldElement
              fullWidth
              label="Configuration"
              name={`configuration.${index}.layout`}
            />
            <TextFieldElement
              fullWidth
              label="Mobilier"
              name={`configuration.${index}.furnishedBy`}
            />
            <TextFieldElement
              fullWidth
              label="Microphones"
              name={`configuration.${index}.microphones`}
              type="number"
            />
            <ControlledCheckbox
              propLabel={`configuration.${index}.visio`}
              textLabel="Visio"
            />
            <ControlledCheckbox
              propLabel={`configuration.${index}.captioning`}
              textLabel="Captation"
            />
            <TextFieldElement
              fullWidth
              label="Prestetaires"
              name={`configuration.${index}.services`}
              type="number"
            />
            <TextEditor
              displayLabel="Remarques"
              objLabel={`configuration.${index}.comments`}
            />
            <Divider sx={{ my: 2 }} />
          </Box>
        ))}
        <Button variant="outlined" onClick={() => handleAdd()}>
          Ajouter un autre « Mise en Place »
        </Button>
      </Box>
    </TitledGroup>
  );
}
