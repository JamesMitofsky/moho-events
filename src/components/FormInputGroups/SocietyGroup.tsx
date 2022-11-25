import { TextField } from "@mui/material";
import { TitledGroup } from "../Layouts/TitledGroup";

export const SocietyGroup = ({ register }: any) => {
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
        label={"Nombre de devis"}
        {...register("society.numberOfQuote")}
      />
      <TextField label={"Vendu par"} {...register("society.soldBy")} />
      <TextField
        label={"Commentaires de société"}
        {...register("society.comments")}
      />
    </TitledGroup>
  );
};

export interface SocietyInputs {
  associationName: string;
  category: string;
  eventName: string;
  eventType: string;
  numberOfQuote: number;
  soldBy: string;
  comments: string;
}
