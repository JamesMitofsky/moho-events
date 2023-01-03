import { TextField } from "@mui/material";
import { TitledGroup } from "../Layouts/TitledGroup";
import TextEditor from "../TextEditor";
import { Control, UseFormRegister } from "react-hook-form";
import { AllEventGroups } from "../../utils/globalTypes";
import GroupsIcon from "@mui/icons-material/Groups";

interface Props {
  register: UseFormRegister<AllEventGroups>;
  control: Control<AllEventGroups>;
}

export const SocietyGroup = ({ register, control }: Props) => {
  return (
    <TitledGroup icon={GroupsIcon} title={"Société"}>
      <TextField
        label={"Nom de la société"}
        {...register("society.associationName")}
      />
      <TextField label={"Catégorie"} {...register("society.category")} />
      <TextField
        label={"Nom de l'événement"}
        {...register("society.eventName")}
      />
      <TextField
        label={"Type d'événement"}
        {...register("society.eventType")}
      />
      <TextField
        type="number"
        label={"Nombre de devis"}
        {...register("society.numberOfQuote", {
          valueAsNumber: true,
        })}
      />
      <TextField label={"Vendu par"} {...register("society.soldBy")} />
      <TextEditor
        objLabel="society.comments"
        displayLabel="Remarques"
        control={control}
      />
    </TitledGroup>
  );
};
