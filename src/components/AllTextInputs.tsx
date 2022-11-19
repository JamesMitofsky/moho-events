import TextInput from "./TextInput";
import { Box, Typography } from "@mui/material";
import { groupedFieldLabels } from "../utils/globalVars";

interface Props {
  formData: any;
  updateFormData: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const AllTextInputs = ({ formData, updateFormData }: Props) => {
  const inputFields = groupedFieldLabels.map((group) => {
    const groupOfInputs = Object.keys(group).map((fieldKey) => {
      if (fieldKey === "labelGroup") return null;
      return (
        <TextInput
          label={group[fieldKey as keyof typeof group]}
          value={formData[fieldKey as keyof typeof group]}
          name={fieldKey}
          onChange={updateFormData}
        />
      );
    });
    const groupOfInputsWithHeader = (
      <>
        <Typography variant="h3">{group.labelGroup}</Typography>
        {groupOfInputs}
      </>
    );
    return groupOfInputsWithHeader;
  });

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
      {inputFields}
    </Box>
  );
};

export default AllTextInputs;
