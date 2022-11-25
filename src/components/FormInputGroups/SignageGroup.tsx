import { TitledGroup } from "../Layouts/TitledGroup";
import { TextField } from "@mui/material";

export const SignageGroup = ({ register }: any) => {
  return (
    <TitledGroup title="Signalétique">
      <TextField label={"Tableau d'accueil"} {...register("signage.lobby")} />
      <TextField
        label={"Autres informations"}
        {...register("signage.otherInfo")}
      />
      <TextField
        label={"Commentaires de signalétique"}
        {...register("signage.comments")}
      />
    </TitledGroup>
  );
};
