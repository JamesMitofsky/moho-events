import HandymanIcon from "@mui/icons-material/Handyman";
import { useFieldArray } from "react-hook-form";
import { SwitchElement, TextFieldElement } from "react-hook-form-mui";
import AddButton from "../buttons/AddButton";
import SelectMohoRoom from "../inputs/SelectMohoRoom";
import TextEditor from "../inputs/TextEditor";
import TitledArrayOfElements from "../layouts/TitledArrayOfElements";
import { TitledGroup } from "../layouts/TitledGroup";

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
    <TitledGroup icon={HandymanIcon} title="Mise en Place">
      {fields.map((field, index) => (
        <TitledArrayOfElements
          key={field.id}
          label="Configuration"
          index={index}
          listLength={fields.length}
        >
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
          <SwitchElement label="Visio" name={`configuration.${index}.visio`} />
          <SwitchElement
            label="Captation"
            name={`configuration.${index}.captioning`}
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
        </TitledArrayOfElements>
      ))}
      <AddButton label="Configuration" onClick={handleAdd} />
    </TitledGroup>
  );
}
