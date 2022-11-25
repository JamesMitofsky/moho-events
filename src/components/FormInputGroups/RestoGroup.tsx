import { TextField } from "@mui/material";
import { TitledGroup } from "../Layouts/TitledGroup";

export const RestoGroup = ({ register }: any) => {
  return (
    <TitledGroup title="Restuaration">
      <TextField
        label={"je sais pas quoi faire"}
        {...register("restaurant.unknown")}
      />
    </TitledGroup>
  );
};
