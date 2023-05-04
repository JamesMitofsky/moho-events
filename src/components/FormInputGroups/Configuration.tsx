import HandymanIcon from "@mui/icons-material/Handyman";
import { useFieldArray } from "react-hook-form";
import { SwitchElement, TextFieldElement } from "react-hook-form-mui";
import SelectMohoRoom from "../inputs/SelectMohoRoom";
import TextEditor from "../inputs/TextEditor";
import ArrayOfElementsWrapper from "../layouts/ArrayOfElementsWrapper";
import { TitledGroup } from "../layouts/TitledGroup";
import TitledArrayOfElements from "../layouts/TitledItemFromArray";

export default function ConfigurationGroup() {
  const { fields, append, prepend, remove, swap, move, insert } = useFieldArray(
    {
      name: "configuration",
    }
  );

  const handleAdd = () => {
    const blankConfiguration = {
      room: "",
      numberOfPeople: "",
      layout: "",
      furnishedBy: "",
      microphones: "",
      visio: "",
      captioning: "",
      services: "",
      comments: "",
    };
    append(blankConfiguration);
  };

  return (
    <TitledGroup icon={HandymanIcon} title="Mise en Place">
      <ArrayOfElementsWrapper
        addLabel="Configuration"
        handleAddItem={handleAdd}
      >
        {fields.map((field, index) => (
          <TitledArrayOfElements
            key={field.id}
            label="Configuration"
            index={index}
            listLength={fields.length}
          >
            <SelectMohoRoom
              name={`configuration.${index}.room`}
              multiple={true}
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
            <SwitchElement
              label="Visio"
              name={`configuration.${index}.visio`}
            />
            <SwitchElement
              label="Captation"
              name={`configuration.${index}.captioning`}
            />
            <TextFieldElement
              fullWidth
              label="Prestataires"
              name={`configuration.${index}.services`}
              type="number"
            />
            <TextEditor
              displayLabel="Remarques specifique à cette configuration"
              objLabel={`configuration.${index}.comments`}
            />
          </TitledArrayOfElements>
        ))}
      </ArrayOfElementsWrapper>
    </TitledGroup>
  );
}
