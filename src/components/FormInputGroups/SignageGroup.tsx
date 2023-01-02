import { TitledGroup } from "../Layouts/TitledGroup";
import { TextField } from "@mui/material";
import TextEditor from "../TextEditor";
import { Control, UseFormRegister } from "react-hook-form";
import { AllEventGroups } from "../../utils/globalTypes";
import SignpostIcon from "@mui/icons-material/Signpost";

interface Props {
  register: UseFormRegister<AllEventGroups>;
  control: Control<AllEventGroups>;
}

export const SignageGroup = ({ register, control }: Props) => {
  return (
    <TitledGroup icon={SignpostIcon} title="Signalétique">
      <TextField label={"Tableau d'accueil"} {...register("signage.lobby")} />
      <TextField
        label={"Autres informations"}
        {...register("signage.otherInfo")}
      />
      <TextEditor
        objLabel="signage.comments"
        control={control}
        displayLabel="Remarques"
      />
    </TitledGroup>
  );
};
