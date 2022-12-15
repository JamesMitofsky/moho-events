import { TitledGroup } from "../Layouts/TitledGroup";
import { TextField } from "@mui/material";
import TextEditor from "../TextEditor";

interface Props {
  register: any;
  control: any;
}

export const SignageGroup = ({ register, control }: Props) => {
  return (
    <TitledGroup title="Signalétique">
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
