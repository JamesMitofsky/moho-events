import TextInput from "./TextInput";
import { Box } from "@mui/material";
import { groupedFieldLabels } from "../utils/globalVars";
import InputGroup from "./InputGroup";

interface Props {
  formData: any;
  updateFormData: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const AllTextInputs = ({ formData, updateFormData }: Props) => {
  const createTextInputs = (group: {}) => {
    return Object.keys(group).map((fieldKey) => {
      // exclude the header property from being rendered as a text input
      if (fieldKey === "labelGroup") return null;

      // filter the inputs according to their type (expecting Date, string, or number)
      return (
        <TextInput
          label={group[fieldKey as keyof typeof group]}
          value={formData[fieldKey as keyof typeof group]}
          name={fieldKey}
          onChange={updateFormData}
        />
      );
    });
  };

  // filter through all field groupings
  const inputFields = groupedFieldLabels.map((group) => {
    // for each field grouping, create input fields
    const inputsOfGroup = createTextInputs(group);

    // taking this new input fields from the current grouping, add a header
    return <InputGroup header={group.labelGroup}>{inputsOfGroup}</InputGroup>;
  });

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
      {inputFields}
    </Box>
  );
};

export default AllTextInputs;
