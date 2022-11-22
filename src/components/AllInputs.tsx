import { Box } from "@mui/material";
// import { groupedFieldLabels } from "../utils/globalVars";
import { SocietyGroup } from "./FormInputGroups/SocietyGroup";
import { ContactGroup } from "./FormInputGroups/ContactGroup";
import { SignageGroup } from "./FormInputGroups/SignageGroup";
import { WifiGroup } from "./FormInputGroups/WifiGroup";

import { BoxWrapper } from "./BoxWrapper";

interface Props {
  formData: any;
  updateFormData: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const AllInputs = ({ formData, updateFormData }: Props) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
      <BoxWrapper
        Element={
          <SocietyGroup {...formData.society} onChange={updateFormData} />
        }
      />
      <BoxWrapper
        Element={
          <ContactGroup {...formData.contact} onChange={updateFormData} />
        }
      />
      <BoxWrapper
        Element={
          <SignageGroup {...formData.signage} onChange={updateFormData} />
        }
      />
      <BoxWrapper
        Element={<WifiGroup {...formData.wifi} onChange={updateFormData} />}
      />
    </Box>
  );
};

export default AllInputs;
