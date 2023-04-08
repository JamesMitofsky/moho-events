import AddIcCallIcon from "@mui/icons-material/AddIcCall";
import { Box, Button, Divider } from "@mui/material";
import { useContext } from "react";
import { useFieldArray } from "react-hook-form";
import { TextFieldElement } from "react-hook-form-mui";
import { ContactIndividual } from "../../functions/globalTypes";
import ReadOnlyContext from "../contexts/ReadOnlyContext";
import PhoneNumber from "../inputs/PhoneNumber";
import TextEditor from "../inputs/TextEditor";
import { TitledGroup } from "../layouts/TitledGroup";
import TitledGroupSubtitle from "../layouts/TitledGroupSubtitle";

export default function ContactGroup() {
  const { isReadOnly } = useContext(ReadOnlyContext);

  const { fields, append, prepend, remove, swap, move, insert } = useFieldArray(
    {
      name: "contact.individuals", // unique name for your Field Array
    }
  );

  const blankContactInputs: ContactIndividual = {
    companyName: "",
    contactName: "",
    email: "",
    telephoneNumber: "",
  };

  const handleAdd = () => {
    append(blankContactInputs);
  };

  return (
    <TitledGroup icon={AddIcCallIcon} title="Contact">
      {fields.map((field, index) => (
        <Box key={field.id} sx={{ display: "grid", gap: 2 }}>
          <TitledGroupSubtitle
            label="Contact"
            index={index}
            listLength={fields.length}
          />
          <TextFieldElement
            fullWidth
            label="Nom de la société"
            name={`contact.individuals.${index}.companyName`}
          />
          <TextFieldElement
            fullWidth
            label="Nom de la personne"
            name={`contact.individuals.${index}.contactName`}
          />
          <PhoneNumber
            propLabel={`contact.individuals.${index}.telephoneNumber`}
          />
          <TextFieldElement
            fullWidth
            label="Email"
            name={`contact.individuals.${index}.email`}
          />
          <Divider sx={{ mt: 2, mb: 2 }} />
        </Box>
      ))}
      {!isReadOnly && (
        <Button variant="outlined" onClick={() => handleAdd()}>
          Ajouter une autre « contact »
        </Button>
      )}

      <TextEditor objLabel={`contact.comments`} displayLabel="Remarques" />
    </TitledGroup>
  );
}
