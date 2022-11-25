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
        <TextField
          label={"Arrivée organisateurs"}
          {...register("program.organiserArrivalTime")}
        />
        <TextField
          label={"Arrivée participants"}
          {...register("program.participantArrivalTime")}
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

        {/* working below here */}
        {/* <TextField
        InputLabelProps={{ shrink: true }}
        type="date"
        label={"Heure de départ"}
        {...register("program.departureTime", { valueAsDate: true })}
      /> */}
        <TimePicker
          {...register("program.departureTime", { valueAsDate: true })}
          label="Heure de départ"
          renderInput={(params) => <TextField {...params} />}
        />

        {/* working above here */}
        <TextField
          label={"Commentaires de programme"}
          {...register("program.comments")}
        />
      </LocalizationProvider>
    </TitledGroup>
  );
};
