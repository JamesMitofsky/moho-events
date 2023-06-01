import ContactMailIcon from "@mui/icons-material/ContactMail";
import Grid from "@mui/system/Unstable_Grid";
import { useContext } from "react";
import { useFieldArray } from "react-hook-form";
import { TextFieldElement } from "react-hook-form-mui";
import ReadOnlyContext from "../../contexts/ReadOnlyContext";
import { ContactIndividual } from "../../types/globalTypes";
import PhoneNumber from "../inputs/PhoneNumber";
import ArrayOfElementsWrapper from "../layouts/ArrayOfElementsWrapper";
import { TitledGroup } from "../layouts/TitledGroup";
import TitledArrayOfElements from "../layouts/TitledItemFromArray";

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
    <TitledGroup icon={ContactMailIcon} title="Contact">
      <ArrayOfElementsWrapper addLabel="Contact" handleAddItem={handleAdd}>
        {fields.map((field, index) => (
          <TitledArrayOfElements key={field.id} label="Contact" index={index}>
            <Grid xs={12} md={6}>
              <TextFieldElement
                fullWidth
                label="Nom de la société"
                name={`contact.individuals.${index}.companyName`}
              />
            </Grid>

            <Grid xs={12} md={6}>
              <TextFieldElement
                fullWidth
                label="Nom de la personne"
                name={`contact.individuals.${index}.contactName`}
              />
            </Grid>
            <Grid xs={12} md={6}>
              <PhoneNumber
                propLabel={`contact.individuals.${index}.telephoneNumber`}
              />
            </Grid>
            <Grid xs={12} md={6}>
              <TextFieldElement
                fullWidth
                label="Email"
                name={`contact.individuals.${index}.email`}
              />
            </Grid>
          </TitledArrayOfElements>
        ))}
      </ArrayOfElementsWrapper>

      <Grid xs={12}>
        <TextFieldElement
          fullWidth
          label="Remarques"
          multiline
          name="contact.comments"
        />
      </Grid>
    </TitledGroup>
  );
}
