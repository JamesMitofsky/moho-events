import { TextField, Typography, Box, Button, Divider } from "@mui/material";
import { TitledGroup } from "../Layouts/TitledGroup";
import { TimeAndPlaceInput } from "../inputs/TimeAndPlaceInput";
import Time from "../inputs/Time";
import TextEditor from "../TextEditor";
import { useFieldArray, Control, UseFormRegister } from "react-hook-form";
import { AllEventGroups, EventComponent } from "../../utils/globalTypes";
import SelectOptions from "../inputs/SelectOptions";
import ControlledCheckbox from "../inputs/ControlledCheckbox";
import DateRangeIcon from "@mui/icons-material/DateRange";
import ControlledDate from "../inputs/ControlledDate";
import SimpleTextInput from "../inputs/SimpleTextInput";
import { useContext } from "react";
import ReadOnlyContext from "../../services/ReadOnlyContext";

interface Props {
  register: UseFormRegister<AllEventGroups>;
  control: Control<AllEventGroups>;
}

export const ProgramGroup = ({ register, control }: Props) => {
  const { isReadOnly } = useContext(ReadOnlyContext);

  const allProps = {
    register,
    control,
  };

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
      control, // control props comes from useForm (optional: if you are using FormContext)
      name: "program.events", // unique name for your Field Array
    }
  );

  return (
    <>
      <TitledGroup icon={DateRangeIcon} title="Programme">
        {/* TODO: abstract into component container  */}
        <Box sx={{ display: "grid", gap: 2 }}>
          {fields.map((field, index) => (
            <Box key={field.id} sx={{ display: "grid", gap: 2 }}>
              <Typography variant="subtitle2">
                Programme #{index + 1}
              </Typography>
              <SimpleTextInput
                label="Contenu"
                propLabel={`program.events.${index}.title`}
                helperText="Ex: Pause café, Déjeuner, etc."
                register={register}
              />
              <TimeAndPlaceInput
                parentObj={`program.events.${index}`}
                control={control}
              />
              <ControlledCheckbox
                control={control}
                textLabel="Pertinent à l'equipe du restauration?"
                propLabel={`program.events.${index}.involvesRestaurant`}
                useSwitch={true}
              />
              <SimpleTextInput
                label="Nombre de pax"
                propLabel={`program.events.${index}.numberOfPeople`}
                register={register}
              />
              <TextEditor
                objLabel={`program.events.${index}.furnitureUsed`}
                control={control}
                displayLabel="Mobilier utilisé"
              />
              <SelectOptions
                textLabel="Traiteurs"
                propLabel={`program.events.${index}.catering`}
                options={cateringOptions}
                {...allProps}
              />
              <SimpleTextInput
                label="Service facturé"
                propLabel={`program.events.${index}.billedService`}
                register={register}
              />
              <SelectOptions
                textLabel="Format"
                propLabel={`program.events.${index}.eventLayout`}
                options={formatConfigurations}
                {...allProps}
              />
              <TextEditor
                displayLabel="Détails"
                objLabel={`program.events.${index}.details`}
                {...allProps}
              />
              <Divider sx={{ mt: 2, mb: 2 }} />
            </Box>
          ))}
          {!isReadOnly && (
            <Button variant="outlined" onClick={() => handleAdd()}>
              Ajouter une autre « programme »
            </Button>
          )}

          <Typography variant="subtitle2">Autres détails</Typography>
          <TextField
            label={"Nombre de pax"}
            {...register("program.numberOfPeople")}
          />
          <ControlledDate
            control={control}
            dataLabel="program.eventDate"
            textLabel="Date d'événement"
          />
          <Time
            control={control}
            dataLabel="program.departureTime"
            textLabel="Heure de départ"
          />
          <TextEditor
            objLabel="program.comments"
            control={control}
            displayLabel="Remarques"
          />
        </Box>
      </TitledGroup>
    </>
  );
};
