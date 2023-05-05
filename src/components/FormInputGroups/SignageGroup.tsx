import { SignageLocationAndText } from "@/types/globalTypes";
import SignpostIcon from "@mui/icons-material/Signpost";
import Grid from "@mui/system/Unstable_Grid";
import { TextFieldElement, useFieldArray } from "react-hook-form-mui";
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
            <Grid xs={12} md={6}>
              <TextFieldElement
                fullWidth
                label="Lieu"
                name={`signage.locationAndText.${index}.location`}
              />
            </Grid>
            <Grid xs={12} md={6}>
              <TextFieldElement
                fullWidth
                label="Contenu"
                name={`signage.locationAndText.${index}.text`}
              />
            </Grid>
          </TitledArrayOfElements>
        ))}
      </ArrayOfElementsWrapper>
      <Grid xs={12}>
        <TextEditor displayLabel="Remarques" objLabel="signage.comments" />
      </Grid>
    </TitledGroup>
  );
}
