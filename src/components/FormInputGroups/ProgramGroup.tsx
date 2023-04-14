import DateRangeIcon from "@mui/icons-material/DateRange";
import { useContext } from "react";
import { useFieldArray, useWatch } from "react-hook-form";
import { SwitchElement, TextFieldElement } from "react-hook-form-mui";
import ReadOnlyContext from "../../contexts/ReadOnlyContext";
import { EventComponent } from "../../types/globalTypes";
import AddButton from "../buttons/AddButton";
import SelectOptions from "../inputs/SelectOptions";
import TextEditor from "../inputs/TextEditor";
import { TimeAndPlaceInput } from "../inputs/TimeAndPlaceInput";
import TitledArrayOfElements from "../layouts/TitledArrayOfElements";
import { TitledGroup } from "../layouts/TitledGroup";

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
    <TitledGroup icon={DateRangeIcon} title="Programme">
      {/* TODO: abstract into component container  */}
      {fields.map((field, index) => (
        <TitledArrayOfElements
          key={field.id}
          label="Partie"
          index={index}
          listLength={fields.length}
        >
          <TextFieldElement
            fullWidth
            label="Contenu"
            name={`program.events.${index}.title`}
            helperText="Ex: Pause café, Déjeuner, etc."
          />
          <TimeAndPlaceInput parentObj={`program.events.${index}`} />
          <SwitchElement
            label="Pertinent à l'equipe du restauration?"
            name={`program.events.${index}.involvesRestaurant`}
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
        </TitledArrayOfElements>
      ))}
      {!isReadOnly && (
        <AddButton label="Partie d'évènement" onClick={handleAdd} />
      )}

      <TextEditor objLabel="program.comments" displayLabel="Remarques" />
    </TitledGroup>
  );
}
