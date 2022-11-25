import { TextField } from "@mui/material";
import { TitledGroup } from "../Layouts/TitledGroup";

export const ProgramGroup = ({ register }: any) => {
  return (
    <TitledGroup title="Programme">
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
      <TextField
        label={"Heure de départ"}
        {...register("program.departureTime")}
      />
      <TextField
        label={"Commentaires de programme"}
        {...register("program.comments")}
      />
    </TitledGroup>
  );
};
