import TextInput from "./TextInput";
import { Box, Typography } from "@mui/material";
import { groupedFieldLabels } from "../utils/globalVars";

interface Props {
  formData: any;
  updateFormData: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const AllTextInputs = ({ updateFormData }: Props) => {
  const inputFields = groupedFieldLabels.map((group) => {
    const groupOfInputs = Object.keys(group).map((fieldKey) => {
      if (fieldKey === "labelGroup") return null;
      return (
        <TextInput
          label={group[fieldKey as keyof typeof group]}
          value={""}
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

  // const something = Object.keys(groupedFieldLabels).map((key) => {
  //   console.log(key);

  //   return (
  //     <TextInput
  //       key={key}
  //       label={groupedFieldLabels[key as keyof typeof groupedFieldLabels]}
  //       value={""}
  //       name={key}
  //       onChange={updateFormData}
  //     />
  //   );
  // });

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
      {inputFields}
    </Box>
  );
};

export default AllTextInputs;
