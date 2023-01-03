import { TitledGroup } from "../Layouts/TitledGroup";
import { TextField, Box, Divider, Typography, Button } from "@mui/material";
import TextEditor from "../TextEditor";
import { Control, UseFormRegister, useFieldArray } from "react-hook-form";
import { AllEventGroups, ContactIndividual } from "../../utils/globalTypes";
import AddIcCallIcon from "@mui/icons-material/AddIcCall";

interface Props {
  register: UseFormRegister<AllEventGroups>;
  control: Control<AllEventGroups>;
}

export const ContactGroup = ({ register, control }: Props) => {
  const { fields, append, prepend, remove, swap, move, insert } = useFieldArray(
    {
      control, // control props comes from useForm (optional: if you are using FormContext)
      name: "contact.individuals", // unique name for your Field Array
    }
  );

  const blankContactInputs: ContactIndividual = {
    companyName: "",
    contactName: "",
    email: "",
    telephoneNumber: "",
  };

  const handleAdd = () => {
    append(blankContactInputs);
  };

  return (
    <TitledGroup icon={AddIcCallIcon} title="Contact">
      {fields.map((field, index) => (
        <Box key={field.id} sx={{ display: "grid", gap: 2 }}>
          <TextField
            label={"Nom de la société"}
            {...register(`contact.individuals.${index}.companyName`)}
          />
          <TextField
            label={"Nom de la personne"}
            {...register(`contact.individuals.${index}.contactName`)}
          />
          <TextField
            label={"Numéro de téléphone"}
            {...register(`contact.individuals.${index}.telephoneNumber`)}
          />
          <TextField
            label={"Email"}
            {...register(`contact.individuals.${index}.email`, {
              required: "Required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "L'adresse email n'est pas valide",
              },
            })}
          />
          {/* prevent divider appearing beneath the last list item */}
          {fields.length > 1 && fields.length !== index + 1 && (
            <>
              <Divider sx={{ mt: 2, mb: 2 }} />
              <Typography variant="subtitle2">Nouveau contact</Typography>
            </>
          )}
        </Box>
      ))}
      <Button variant="outlined" onClick={() => handleAdd()}>
        Ajouter une autre « contact »
      </Button>
      <TextEditor
        objLabel={`contact.comments`}
        displayLabel="Remarques"
        control={control}
      />
    </TitledGroup>
  );
};
