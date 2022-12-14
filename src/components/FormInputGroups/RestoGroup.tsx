import { TextField } from "@mui/material";
import { TitledGroup } from "../Layouts/TitledGroup";
import TextEditor from "../TextEditor";

interface Props {
  register: any;
  control: any;
}

export const RestoGroup = ({ register, control }: Props) => {
  return (
    <TitledGroup title="Restauration">
      <TextField
        label={"je sais pas quoi faire"}
        {...register("restaurant.unknown")}
      />
    </TitledGroup>
  );
};
