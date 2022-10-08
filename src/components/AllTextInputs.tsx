import TextInput from "./TextInput";
import { GroupInfo, GroupInfoFieldNames } from "../typeUtils";
import { Box } from "@mui/material";

interface Props {
  formData: GroupInfo;
  updateFormData: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const AllTextInputs = ({ formData, updateFormData }: Props) => {
  const fieldNames: GroupInfoFieldNames = {
    associationName: "Nom de l'association",
    eventName: "Nom de l'événement",
    eventType: "Type d'événement",
    numberOfQuote: "Nombre de devis",
    category: "Catégorie",
    soldBy: "Vendu par",
    comments: "Commentaires",
    companyName: "Nom de l'entreprise",
    contactName: "Nom du contact",
    telephoneNumber: "Numéro de téléphone",
    email: "Email",
    startTime: "Date de début",
    endTime: "Date de fin",
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
      {Object.keys(fieldNames).map((key) => {
        // if the key is a date object, return a date picker
        if (key === "startTime" || key === "endTime" || key === "telephone")
          return;

        return (
          <TextInput
            key={key}
            label={fieldNames[key as keyof GroupInfoFieldNames]}
            value={formData[key as keyof GroupInfo]}
            name={key}
            onChange={updateFormData}
          />
        );
      })}
    </Box>
  );
};

export default AllTextInputs;
