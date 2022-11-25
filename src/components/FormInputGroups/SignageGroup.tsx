import { TitledGroup } from "../Layouts/TitledGroup";
import { TextField } from "@mui/material";

export const SignageGroup = ({ register }: any) => {
  return (
    <TitledGroup title="Signalétique">
      <TextField label={"Tableau d'accueil"} {...register("signage.lobby")} />
      <TextField
        label={"Arrivée organisateurs"}
        {...register("signage.otherInfo")}
      />
      <TextField
        label={"Autres informations"}
        {...register("signage.participantArrivalTime")}
      />
      <TextField
        label={"Commentaires de signalétique"}
        {...register("signage.comments")}
      />
    </TitledGroup>
  );
};
