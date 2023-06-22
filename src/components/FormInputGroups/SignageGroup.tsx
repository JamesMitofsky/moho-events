import { SignageLocationAndText } from "@/types/globalTypes";
import SignpostIcon from "@mui/icons-material/Signpost";
import Grid from "@mui/system/Unstable_Grid";
import { TextFieldElement, useFieldArray } from "react-hook-form-mui";
import ArrayOfElementsWrapper from "../layouts/ArrayOfElementsWrapper";
import { TitledGroup } from "../layouts/TitledGroup";
import TitledArrayOfElements from "../layouts/TitledItemFromArray";

export default function SignageGroup() {
  const { fields, append, remove } = useFieldArray({
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
      <ArrayOfElementsWrapper
        noCardWrapper={true}
        addLabel="Signalétique"
        handleAddItem={handleAdd}
      >
        {fields.map((field, index) => (
          <TitledArrayOfElements
            deleteFunction={remove}
            key={field.id}
            typeOfItem="Signalétique"
            index={index}
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
        <TextFieldElement
          fullWidth
          multiline
          label="Remarques"
          name={`signage.comments`}
        />
      </Grid>
    </TitledGroup>
  );
}
