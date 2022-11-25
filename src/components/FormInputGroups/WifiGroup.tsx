import { TitledGroup } from "../Layouts/TitledGroup";
import { TextField } from "@mui/material";

export const WifiGroup = ({ register }: any) => {
  return (
    <TitledGroup title={"Wifi Accés"}>
      <TextField label={"Identifiant"} {...register("society.username")} />
      <TextField label={"Mot de passe"} {...register("society.password")} />
    </TitledGroup>
  );
};
