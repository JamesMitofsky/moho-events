import { TextField, Typography } from "@mui/material";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { TitledGroup } from "../Layouts/TitledGroup";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { TimeAndPlaceInput } from "../inputs/TimeAndPlaceInput";

export const ProgramGroup = ({ register }: any) => {
  return (
    <TitledGroup title="Programme">
      <LocalizationProvider dateAdapter={AdapterMoment}>
        <TimeAndPlaceInput
          componentTitle="Arrivée organisateurs"
          parentObj="program.organiserArrival"
          register={register}
        />
        <TimeAndPlaceInput
          componentTitle="Café d'accueil"
          parentObj="program.welcomeCoffee"
          register={register}
        />
        <TimeAndPlaceInput
          componentTitle="Arrivée participants"
          parentObj="program.participantArrival"
          register={register}
        />
        <TimeAndPlaceInput
          componentTitle="Premier Réunion / Atelier"
          parentObj="program.firstMeeting"
          register={register}
        />
        <TimeAndPlaceInput
          componentTitle="Déjeuner"
          parentObj="program.lunch"
          register={register}
        />
        <TimeAndPlaceInput
          componentTitle="Deuxième Réunion / Atelier"
          parentObj="program.secondMeeting"
          register={register}
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
        <TimePicker
          {...register("program.depatureTime")}
          label="Heure de départ"
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
    </TitledGroup>
  );
};
