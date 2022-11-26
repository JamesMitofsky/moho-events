import { TitledGroup } from "../Layouts/TitledGroup";
import { TextField } from "@mui/material";

export const ContactGroup = ({ register }: any) => {
  return (
    <TitledGroup title="Contact">
      <TextField
        label={"Nom de la société"}
        {...register("contact.companyName")}
      />
      <TextField
        label={"Nom de la personne"}
        {...register("contact.contactName")}
      />
      <TextField
        label={"Numéro de téléphone"}
        {...register("contact.telephoneNumber")}
      />
      <TextField
        label={"Email"}
        {...register("contact.email", {
          required: "Required",
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "L'adresse email n'est pas valide",
          },
        })}
      />
      <TextField
        label={"Commentaires de contact"}
        {...register("contact.comments")}
      />
    </TitledGroup>
  );
};
