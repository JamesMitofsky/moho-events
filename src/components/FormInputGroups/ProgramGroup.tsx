import DateRangeIcon from "@mui/icons-material/DateRange";
import { Box, Button, Divider, Typography } from "@mui/material";
import { useContext } from "react";
import { useFieldArray, useWatch } from "react-hook-form";
import { TextFieldElement } from "react-hook-form-mui";
import ReadOnlyContext from "../../services/ReadOnlyContext";
import { EventComponent } from "../../utilities/globalTypes";
import ControlledCheckbox from "../inputs/ControlledCheckbox";
import ControlledDate from "../inputs/ControlledDate";
import ControlledTime from "../inputs/ControlledTime";
import SelectOptions from "../inputs/SelectOptions";
import TextEditor from "../inputs/TextEditor";
import { TimeAndPlaceInput } from "../inputs/TimeAndPlaceInput";
import { TitledGroup } from "../layouts/TitledGroup";
import TitledGroupSubtitle from "../layouts/TitledGroupSubtitle";

export default function ProgramGroup() {
  const watchArray = useWatch({
    name: `program.events`,
  });

  const { isReadOnly } = useContext(ReadOnlyContext);

  const blankProgramEvent: EventComponent = {
    title: "",
    time: {
      start: null,
      end: null,
    },
    place: [],
    numberOfPeople: null,
    furnitureUsed: "",
    catering: [],
    billedService: null,
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
    <>
      <TitledGroup icon={DateRangeIcon} title="Programme">
        <TextFieldElement
          fullWidth
          label="Nombre de pax"
          name="program.numberOfPeople"
        />
        <ControlledDate
          dataLabel="program.eventDate"
          textLabel="Date d'événement"
        />
        <ControlledTime
          dataLabel="program.departureTime"
          textLabel="Heure de départ"
        />
        {/* TODO: abstract into component container  */}
        <Box sx={{ display: "grid", gap: 2 }}>
          {fields.map((field, index) => (
            <Box key={field.id} sx={{ display: "grid", gap: 2 }}>
              <TitledGroupSubtitle
                label="Partie"
                index={index}
                listLength={fields.length}
              />
              <TextFieldElement
                fullWidth
                label="Contenu"
                name={`program.events.${index}.title`}
                helperText="Ex: Pause café, Déjeuner, etc."
              />
              <TimeAndPlaceInput parentObj={`program.events.${index}`} />
              <ControlledCheckbox
                textLabel="Pertinent à l'equipe du restauration?"
                propLabel={`program.events.${index}.involvesRestaurant`}
                useSwitch={true}
              />

              {watchArray[index]?.involvesRestaurant && (
                <>
                  <TextFieldElement
                    fullWidth
                    label="Nombre de pax"
                    name={`program.events.${index}.numberOfPeople`}
                  />
                  <TextEditor
                    displayLabel="Mobilier utilisé"
                    objLabel={`program.events.${index}.furnitureUsed`}
                  />
                  <SelectOptions
                    textLabel="Traiteurs"
                    propLabel={`program.events.${index}.catering`}
                    options={cateringOptions}
                  />
                  <TextFieldElement
                    fullWidth
                    label="Service facturé"
                    name={`program.events.${index}.billedService`}
                  />
                  <SelectOptions
                    textLabel="Format"
                    propLabel={`program.events.${index}.eventLayout`}
                    options={formatConfigurations}
                  />
                  <TextEditor
                    displayLabel="Détails"
                    objLabel={`program.events.${index}.details`}
                  />
                </>
              )}
              <Divider sx={{ my: 2 }} />
            </Box>
          ))}
          {!isReadOnly && (
            <Button variant="outlined" onClick={() => handleAdd()}>
              Ajouter une autre « programme »
            </Button>
          )}

          <Typography variant="subtitle2">Autres détails</Typography>

          <TextEditor objLabel="program.comments" displayLabel="Remarques" />
        </Box>
      </TitledGroup>
    </>
  );
}
