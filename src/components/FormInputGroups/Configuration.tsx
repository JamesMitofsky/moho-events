import { ConfigurationInputs } from "@/types/globalTypes";
import HandymanIcon from "@mui/icons-material/Handyman";
import Grid from "@mui/system/Unstable_Grid";
import { useFieldArray } from "react-hook-form";
import { SwitchElement, TextFieldElement } from "react-hook-form-mui";
import SelectMohoRoom from "../inputs/SelectMohoRoom";
import SelectOptions from "../inputs/SelectOptions";
import ArrayOfElementsWrapper from "../layouts/ArrayOfElementsWrapper";
import { TitledGroup } from "../layouts/TitledGroup";
import TitledArrayOfElements from "../layouts/TitledItemFromArray";

export default function ConfigurationGroup() {
  const { fields, append, remove } = useFieldArray({
    name: "configuration",
  });

  const handleAdd = () => {
    const blankConfiguration: ConfigurationInputs = {
      room: [],
      numberOfPeople: "",
      layout: "",
      furnishedBy: "",
      microphones: "",
      visio: false,
      captioning: false,
      services: [],
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
            deleteFunction={remove}
            key={field.id}
            label="Configuration"
            index={index}
          >
            <Grid xs={12} md={6}>
              <SelectMohoRoom
                name={`configuration.${index}.room`}
                multiple={true}
              />
            </Grid>

            <Grid xs={12} md={6}>
              <TextFieldElement
                fullWidth
                label="Nombre de pax"
                name={`configuration.${index}.numberOfPeople`}
              />
            </Grid>

            <Grid xs={12} md={6}>
              <TextFieldElement
                fullWidth
                label="Configuration"
                name={`configuration.${index}.layout`}
              />
            </Grid>

            <Grid xs={12} md={6}>
              <TextFieldElement
                fullWidth
                label="Mobilier"
                name={`configuration.${index}.furnishedBy`}
              />
            </Grid>

            <Grid xs={12} md={6}>
              <TextFieldElement
                fullWidth
                label="Microphones"
                name={`configuration.${index}.microphones`}
                type="number"
              />
            </Grid>

            <Grid xs={12} md={6}>
              <SelectOptions
                multiple={true}
                label="Prestataires"
                name={`configuration.${index}.services`}
                options={[]}
              />
            </Grid>

            <Grid xs={12} md={6}>
              <SwitchElement
                label="Visio"
                name={`configuration.${index}.visio`}
              />
            </Grid>

            <Grid xs={12} md={6}>
              <SwitchElement
                label="Captation"
                name={`configuration.${index}.captioning`}
              />
            </Grid>

            <Grid xs={12}>
              <TextFieldElement
                fullWidth
                multiline
                label="Remarques specifique à cette configuration"
                name={`configuration.${index}.comments`}
              />
            </Grid>
          </TitledArrayOfElements>
        ))}
      </ArrayOfElementsWrapper>
    </TitledGroup>
  );
}
