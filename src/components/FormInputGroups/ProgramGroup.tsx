import DateRangeIcon from "@mui/icons-material/DateRange";
import Grid from "@mui/system/Unstable_Grid";
import { useFieldArray, useWatch } from "react-hook-form";
import { SwitchElement, TextFieldElement } from "react-hook-form-mui";
import { EventComponent } from "../../types/globalTypes";
import SelectMohoRoom from "../inputs/SelectMohoRoom";
import TimeRangePicker from "../inputs/TimeRangePicker";
import ArrayOfElementsWrapper from "../layouts/ArrayOfElementsWrapper";
import { TitledGroup } from "../layouts/TitledGroup";
import TitledArrayOfElements from "../layouts/TitledItemFromArray";
import CateringInputGroup from "./childrenOfGroupInputs/CateringInputGroup";
import ConfigurationInputGroup from "./childrenOfGroupInputs/ConfigurationInputGroup";

export default function ProgramGroup() {
  const watchArray = useWatch({
    name: `program.events`,
  });

  const blankProgramEvent: EventComponent = {
    title: "",
    time: {
      start: "",
      end: "",
    },
    place: [],
    numberOfPeople: "",
    furnitureUsed: "",
    catering: [],
    billedService: "",
    eventLayout: "",
    details: "",
    membership: "",
    involvesRestaurant: false,
    involvesConfiguration: false,
    cateringComments: "",
    comments: "",
    configuration: {
      room: [],
      numberOfPeople: "",
      layout: "",
      furnishedBy: "",
      microphones: "",
      visio: false,
      captioning: false,
      services: [],
      comments: "",
    },
  };

  const handleAdd = () => {
    append(blankProgramEvent);
  };

  const formatConfigurations = [
    "Debout",
    "Cocktail",
    "Buffet",
    "Assis",
    "Table ronde",
    "Table carrée",
    "Table rectangulaire",
  ];

  const cateringOptions = ["Le Spot", "Moholicious", "Dely"];

  const { fields, append, remove } = useFieldArray({
    name: "program.events", // unique name for your Field Array
  });

  return (
    <TitledGroup icon={DateRangeIcon} title="Programme">
      <ArrayOfElementsWrapper
        addLabel="Partie d'évènement"
        handleAddItem={handleAdd}
      >
        {fields.map((field, index) => (
          <TitledArrayOfElements
            key={field.id}
            typeOfItem="Partie"
            index={index}
            deleteFunction={remove}
          >
            <Grid xs={12} md={6}>
              <TextFieldElement
                fullWidth
                label="Type"
                name={`program.events.${index}.title`}
                helperText="Ex: Pause café, Déjeuner, etc."
              />
            </Grid>
            <Grid xs={12} md={6}>
              <SelectMohoRoom
                multiple={true}
                name={`program.events.${index}.place`}
              />
            </Grid>
            <Grid xs={12}>
              <TimeRangePicker dataLabel={`program.events.${index}.time`} />
            </Grid>
            <Grid xs={12}>
              <TextFieldElement
                multiline
                fullWidth
                label="Remarques"
                name={`program.events.${index}.comments`}
              />
            </Grid>
            <Grid xs={12}>
              <SwitchElement
                label="Restauration concerné?"
                name={`program.events.${index}.involvesRestaurant`}
              />
            </Grid>
            {watchArray[index]?.involvesRestaurant && (
              <CateringInputGroup
                cateringOptions={cateringOptions}
                formatConfigurations={formatConfigurations}
                index={index}
              />
            )}
            <Grid xs={12}>
              <SwitchElement
                label="Mise en place?"
                name={`program.events.${index}.involvesConfiguration`}
              />
            </Grid>
            {watchArray[index]?.involvesConfiguration && (
              <ConfigurationInputGroup index={index} />
            )}
          </TitledArrayOfElements>
        ))}
      </ArrayOfElementsWrapper>

      <Grid xs={12}>
        <TextFieldElement
          multiline
          fullWidth
          label="Remarques"
          name={`program.comments`}
        />
      </Grid>
    </TitledGroup>
  );
}
