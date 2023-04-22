import { SignageLocationAndText } from "@/types/globalTypes";
import SignpostIcon from "@mui/icons-material/Signpost";
import { useFieldArray } from "react-hook-form-mui";
import ControlledTextField from "../inputs/ControlledTextField";
import TextEditor from "../inputs/TextEditor";
import ArrayOfElementsWrapper from "../layouts/ArrayOfElementsWrapper";
import { TitledGroup } from "../layouts/TitledGroup";
import TitledArrayOfElements from "../layouts/TitledItemFromArray";

export default function SignageGroup() {
  const { fields, append } = useFieldArray({
    name: "signage.locationAndText",
  });

  const handleAdd = () => {
    const blankConfiguration: SignageLocationAndText = {
      location: "",
      text: "",
    };
    append(blankConfiguration);
  };

  return (
    <TitledGroup icon={SignpostIcon} title="Signalétique">
      <ArrayOfElementsWrapper addLabel="Signalétique" handleAddItem={handleAdd}>
        {fields.map((field, index) => (
          <TitledArrayOfElements
            key={field.id}
            label="Signalétique"
            index={index}
            listLength={fields.length}
          >
            <ControlledTextField
              fullWidth
              label="L'endoit"
              name={`signage.locationAndText.${index}.location`}
            />
            <ControlledTextField
              fullWidth
              label="Contenu"
              name={`signage.locationAndText.${index}.text`}
            />
          </TitledArrayOfElements>
        ))}
      </ArrayOfElementsWrapper>
      <TextEditor displayLabel="Remarques" objLabel="signage.comments" />
    </TitledGroup>
  );
}
