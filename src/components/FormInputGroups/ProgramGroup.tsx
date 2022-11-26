import { TextField } from "@mui/material";
import { TitledGroup } from "../Layouts/TitledGroup";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";

export const ProgramGroup = ({ register }: any) => {
  return (
    <TitledGroup title="Programme">
      <LocalizationProvider dateAdapter={AdapterMoment}>
        <TextField
          label={"Nombre de pax"}
          {...register("program.numberOfPeople")}
        />
        <TimePicker
          {...register("program.organiserArrivalTime")}
          label="Arrivée organisateurs"
          renderInput={(params) => <TextField {...params} />}
        />
        <TimePicker
          {...register("program.participantArrivalTime")}
          label="Arrivée participants"
          renderInput={(params) => <TextField {...params} />}
        />
        <TextField
          label={"Café d'accueil"}
          {...register("program.welcomeCoffee")}
        />
        <TextField
          label={"Premier Réunion / Atelier"}
          {...register("program.firstMeeting")}
        />
        <TextField label={"Déjeuner"} {...register("program.lunch")} />
        <TextField
          label={"Deuxième Réunion / Atelier"}
          {...register("program.secondMeeting")}
        />
        <TimePicker
          {...register("program.departureTime")}
          label="Heure de départ"
          renderInput={(params) => <TextField {...params} />}
        />
        <TextField
          label={"Commentaires de programme"}
          {...register("program.comments")}
        />
      </LocalizationProvider>
    </TitledGroup>
  );
};
