import { TextField } from "@mui/material";
import { TitledGroup } from "../Layouts/TitledGroup";
import TextEditor from "../TextEditor";

interface Props {
  register: any;
  control: any;
}

export const SocietyGroup = ({ register, control }: Props) => {
  return (
    <TitledGroup title={"Société"}>
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
