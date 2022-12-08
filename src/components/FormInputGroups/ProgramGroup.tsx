import { TextField, Typography } from "@mui/material";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { TitledGroup } from "../Layouts/TitledGroup";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { TimeAndPlaceInput } from "../inputs/TimeAndPlaceInput";
import Time from "../inputs/Time";

export const ProgramGroup = ({ register, control }: any) => {
  const allProps = {
    register,
    control,
  };

  return (
    <TitledGroup title="Programme">
      <LocalizationProvider dateAdapter={AdapterMoment}>
        <TimeAndPlaceInput
          componentTitle="Arrivée organisateurs"
          parentObj="program.organiserArrival"
          {...allProps}
        />
        <TimeAndPlaceInput
          componentTitle="Café d'accueil"
          parentObj="program.welcomeCoffee"
          {...allProps}
        />
        <TimeAndPlaceInput
          componentTitle="Arrivée participants"
          parentObj="program.participantArrival"
          {...allProps}
        />
        <TimeAndPlaceInput
          componentTitle="Premier Réunion / Atelier"
          parentObj="program.firstMeeting"
          {...allProps}
        />
        <TimeAndPlaceInput
          componentTitle="Déjeuner"
          parentObj="program.lunch"
          {...allProps}
        />
        <TimeAndPlaceInput
          componentTitle="Deuxième Réunion / Atelier"
          parentObj="program.secondMeeting"
          {...allProps}
        />
        <Typography>Misc.</Typography>
        <TextField
          label={"Nombre de pax"}
          {...register("program.numberOfPeople")}
        />
        <TextField
          label={"Commentaires de programme"}
          {...register("program.comments")}
        />
        <Time
          control={control}
          dataLabel="program.depatureTime"
          textLabel="Heure de départ"
        />
      </LocalizationProvider>
    </TitledGroup>
  );
};
