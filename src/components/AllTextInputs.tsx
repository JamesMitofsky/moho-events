import TextInput from "./TextInput";
import { Box, Typography } from "@mui/material";
import { groupedFieldLabels } from "../utils/globalVars";

interface Props {
  formData: any;
  updateFormData: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const AllTextInputs = ({ formData, updateFormData }: Props) => {
  // filter through all field groupings
  const inputFields = groupedFieldLabels.map((group) => {
    // for each field grouping, create input fields
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

    // taking this new input fields from the current grouping, add a header
    const groupOfInputsWithHeader = (
      <>
        <Typography variant="h3">{group.labelGroup}</Typography>
        {groupOfInputs}
      </>
    );

    // reader the input fields with their header
    return groupOfInputsWithHeader;
  });

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
      {inputFields}
    </Box>
  );
};

export default AllTextInputs;
