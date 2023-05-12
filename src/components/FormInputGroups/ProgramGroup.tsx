import DateRangeIcon from "@mui/icons-material/DateRange";
import Grid from "@mui/system/Unstable_Grid";
import { useContext } from "react";
import { useFieldArray, useWatch } from "react-hook-form";
import { SwitchElement, TextFieldElement } from "react-hook-form-mui";
import ReadOnlyContext from "../../contexts/ReadOnlyContext";
import { EventComponent } from "../../types/globalTypes";
import SelectMohoRoom from "../inputs/SelectMohoRoom";
import SelectOptions from "../inputs/SelectOptions";
import TimeRangePicker from "../inputs/TimeRangePicker";
import ArrayOfElementsWrapper from "../layouts/ArrayOfElementsWrapper";
import { TitledGroup } from "../layouts/TitledGroup";
import TitledArrayOfElements from "../layouts/TitledItemFromArray";

export default function ProgramGroup() {
  const watchArray = useWatch({
    name: `program.events`,
  });

  const { isReadOnly } = useContext(ReadOnlyContext);

  const blankProgramEvent: EventComponent = {
    title: "",
    time: {
      start: "",
      end: "",
    },
    place: "",
    numberOfPeople: "",
    furnitureUsed: "",
    catering: "",
    billedService: "",
    eventLayout: "",
    details: "",
    involvesRestaurant: false,
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

  const { fields, append, prepend, remove, swap, move, insert } = useFieldArray(
    {
      name: "program.events", // unique name for your Field Array
    }
  );

  return (
    <TitledGroup icon={DateRangeIcon} title="Programme">
      <ArrayOfElementsWrapper
        addLabel="Partie d'évènement"
        handleAddItem={handleAdd}
      >
        {fields.map((field, index) => (
          <TitledArrayOfElements
            key={field.id}
            label="Partie"
            index={index}
            listLength={fields.length}
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
              <SelectMohoRoom name={`program.events.${index}.place`} />
            </Grid>
            <Grid xs={12} md={6}>
              <TimeRangePicker dataLabel={`program.events.${index}.time`} />
            </Grid>
            <Grid xs={12} md={6}>
              <SwitchElement
                label="Restauration concerné?"
                name={`program.events.${index}.involvesRestaurant`}
              />
            </Grid>
            {watchArray[index]?.involvesRestaurant && (
              <Grid container spacing={2}>
                <Grid xs={12} md={6}>
                  <TextFieldElement
                    fullWidth
                    label="Nombre de pax"
                    name={`program.events.${index}.numberOfPeople`}
                  />
                </Grid>
                <Grid xs={12} md={6}>
                  <SelectOptions
                    label="Traiteurs"
                    name={`program.events.${index}.catering`}
                    options={cateringOptions}
                  />
                </Grid>
                <Grid xs={12} md={6}>
                  <TextFieldElement
                    fullWidth
                    label="Service facturé"
                    name={`program.events.${index}.billedService`}
                  />
                </Grid>
                <Grid xs={12} md={6}>
                  <SelectOptions
                    label="Format"
                    name={`program.events.${index}.eventLayout`}
                    options={formatConfigurations}
                  />
                </Grid>
                <Grid xs={12} md={6}>
                  <TextFieldElement
                    multiline
                    fullWidth
                    label="Mobilier utilisé"
                    name={`program.events.${index}.furnitureUsed`}
                  />
                </Grid>
                <Grid xs={12} md={6}>
                  <TextFieldElement
                    multiline
                    fullWidth
                    label="Détails"
                    name={`program.events.${index}.details`}
                  />
                </Grid>
              </Grid>
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
