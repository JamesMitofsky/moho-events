import { Box } from "@mui/material";
// import { groupedFieldLabels } from "../utils/globalVars";
import { SocietyGroup } from "./FormInputGroups/SocietyGroup";
import { ContactGroup } from "./FormInputGroups/ContactGroup";
import { SignageGroup } from "./FormInputGroups/SignageGroup";
import { WifiGroup } from "./FormInputGroups/WifiGroup";

import { PaddedChildren } from "./Layouts/PaddedChildren";

interface Props {
  formData: any;
  updateFormData: (
    e: React.ChangeEvent<HTMLInputElement>,
    inputGroup: "society" | "contact" | "program" | "wifi"
  ) => void;
}

const AllInputs = ({ formData, updateFormData }: Props) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
      <PaddedChildren padding={3}>
        <SocietyGroup {...formData.society} onChange={updateFormData} />
        <ContactGroup {...formData.contact} onChange={updateFormData} />
        <SignageGroup {...formData.signage} onChange={updateFormData} />
        <WifiGroup {...formData.wifi} onChange={updateFormData} />
      </PaddedChildren>
    </Box>
  );
};

export default AllInputs;
