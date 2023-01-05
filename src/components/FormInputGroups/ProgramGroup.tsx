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
import IsReadOnly from "../../services/IsReadOnly";
import { useContext } from "react";

interface Props {
  register: UseFormRegister<AllEventGroups>;
  control: Control<AllEventGroups>;
}

export const ProgramGroup = ({ register, control }: Props) => {
  const allProps = {
    register,
    control,
  };

  const isReadOnly = useContext<boolean>(IsReadOnly);

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
              <TextField
                inputProps={{ readOnly: isReadOnly }}
                label="Contenu"
                helperText="Ex: Pause café, Déjeuner, etc."
                {...register(`program.events.${index}.title`)}
              />
              <TimeAndPlaceInput
                parentObj={`program.events.${index}`}
                control={control}
              />
              <TextField
                inputProps={{ readOnly: isReadOnly }}
                label="Nombre de pax"
                {...register(`program.events.${index}.numberOfPeople`)}
              />
              <TextField
                inputProps={{ readOnly: isReadOnly }}
                label="Mobilier utilisé"
                {...register(`program.events.${index}.furnitureUsed`)}
              />
              <SelectOptions
                textLabel="Traiteurs"
                propLabel={`program.events.${index}.catering`}
                options={cateringOptions}
                {...allProps}
              />
              <TextField
                inputProps={{ readOnly: isReadOnly }}
                label="Service facturé"
                {...register(`program.events.${index}.billedService`)}
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
              <ControlledCheckbox
                control={control}
                textLabel="Pertinent à l'equip du restauration ?"
                propLabel={`program.events.${index}.involvesRestaurant`}
              />
              {/* prevent divider appearing beneath the last list item */}
              {fields.length > 1 && fields.length !== index + 1 && (
                <>
                  <Divider sx={{ mt: 2, mb: 2 }} />
                  <Typography variant="subtitle2">
                    Nouvelle programme
                  </Typography>
                </>
              )}
            </Box>
          ))}
          <Button variant="outlined" onClick={() => handleAdd()}>
            Ajouter une autre « programme »
          </Button>

          <Typography>Misc.</Typography>
          <TextField
            inputProps={{ readOnly: isReadOnly }}
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
