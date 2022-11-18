import TextInput from "./TextInput";
import { Box } from "@mui/material";
import { groupedFieldLabels } from "../utils/globalVars";

interface Props {
  formData: any;
  updateFormData: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const AllTextInputs = ({ updateFormData }: Props) => {
  const inputFields = Object.keys(groupedFieldLabels).map((key) => {
    return (
      <TextInput
        key={key}
        label={groupedFieldLabels[key as keyof typeof groupedFieldLabels]}
        value={""}
        name={key}
        onChange={updateFormData}
      />
    );
  });

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
      {inputFields}
    </Box>
  );
};

export default AllTextInputs;
