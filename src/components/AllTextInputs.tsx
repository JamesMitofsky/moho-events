import TextInput from "./TextInput";
import { GroupInfo, GroupInfoFieldNames } from "../utils/globalTypes";
import { Box } from "@mui/material";
import { fieldNames } from "../utils/globalVars";

interface Props {
  formData: GroupInfo;
  updateFormData: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const AllTextInputs = ({ formData, updateFormData }: Props) => {
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
