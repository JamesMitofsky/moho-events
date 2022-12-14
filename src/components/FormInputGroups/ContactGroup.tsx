import { TitledGroup } from "../Layouts/TitledGroup";
import { TextField } from "@mui/material";
import TextEditor from "../TextEditor";
import { Control, UseFormRegister } from "react-hook-form";
import { AllEventGroups } from "../../utils/globalTypes";

interface Props {
  register: UseFormRegister<AllEventGroups>;
  control: Control<AllEventGroups>;
}

export const ContactGroup = ({ register, control }: Props) => {
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
      <TextEditor
        objLabel="contact.comments"
        displayLabel="Remarques"
        control={control}
      />
    </TitledGroup>
  );
};
