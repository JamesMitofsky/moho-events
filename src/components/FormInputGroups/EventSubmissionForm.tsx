import { AllEventGroups, ModifiedServerResponse } from "@/types/globalTypes";
import SaveIcon from "@mui/icons-material/Save";
import { Button } from "@mui/material";
import { FormContainer, SubmitHandler } from "react-hook-form-mui";
import SpacedChildren from "../layouts/SpacedChildren";
import Configuration from "./Configuration";
import ContactGroup from "./ContactGroup";
import GeneralInfoGroup from "./GeneralInfoGroup";
import ProgramGroup from "./ProgramGroup";
import SignageGroup from "./SignageGroup";
import WifiGroup from "./WifiGroup";

type PossibleInputType = AllEventGroups | ModifiedServerResponse;

type Props = {
  formDefaultValues: PossibleInputType;
  onSubmit: SubmitHandler<PossibleInputType>;
};

const EventSubmissionForm = ({ formDefaultValues, onSubmit }: Props) => {
  return (
    <FormContainer defaultValues={formDefaultValues} onSuccess={onSubmit}>
      <SpacedChildren>
        <GeneralInfoGroup />
        <ContactGroup />
        <ProgramGroup />
        <SignageGroup />
        <WifiGroup />
        <Configuration />

        <Button
          startIcon={<SaveIcon />}
          sx={{ width: "fit-content", ml: "auto" }}
          variant="contained"
          type="submit"
        >
          Sauveguarder
        </Button>
      </SpacedChildren>
    </FormContainer>
  );
};

export default EventSubmissionForm;
