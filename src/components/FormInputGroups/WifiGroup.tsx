import { TitledGroup } from "../Layouts/TitledGroup";
import { TextField } from "@mui/material";
import { UseFormRegister } from "react-hook-form";
import { AllEventGroups } from "../../utils/globalTypes";

interface Props {
  register: UseFormRegister<AllEventGroups>;
}

export const WifiGroup = ({ register }: Props) => {
  return (
    <TitledGroup title={"Wifi Accés"}>
      <TextField label={"Identifiant"} {...register("wifi.username")} />
      <TextField label={"Mot de passe"} {...register("wifi.password")} />
    </TitledGroup>
  );
};
