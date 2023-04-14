import ContactMailIcon from "@mui/icons-material/ContactMail";
import { useContext } from "react";
import { useFieldArray } from "react-hook-form";
import { TextFieldElement } from "react-hook-form-mui";
import ReadOnlyContext from "../../contexts/ReadOnlyContext";
import { ContactIndividual } from "../../types/globalTypes";
import AddButton from "../buttons/AddButton";
import PhoneNumber from "../inputs/PhoneNumber";
import TextEditor from "../inputs/TextEditor";
import TitledArrayOfElements from "../layouts/TitledArrayOfElements";
import { TitledGroup } from "../layouts/TitledGroup";

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
      {fields.map((field, index) => (
        <TitledArrayOfElements
          key={field.id}
          label="Contact"
          index={index}
          listLength={fields.length}
        >
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
        </TitledArrayOfElements>
      ))}
      {!isReadOnly && <AddButton onClick={handleAdd} label="Contact" />}

      <TextEditor objLabel={`contact.comments`} displayLabel="Remarques" />
    </TitledGroup>
  );
}
