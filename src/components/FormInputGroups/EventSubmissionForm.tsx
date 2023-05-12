import { AllEventGroups } from "@/types/globalTypes";
import { SendSharp } from "@mui/icons-material";
import { Button } from "@mui/material";
import { FormContainer, SubmitHandler } from "react-hook-form-mui";
import SpacedChildren from "../layouts/SpacedChildren";
import Configuration from "./Configuration";
import ContactGroup from "./ContactGroup";
import GeneralInfoGroup from "./GeneralInfoGroup";
import ProgramGroup from "./ProgramGroup";
import SignageGroup from "./SignageGroup";
import WifiGroup from "./WifiGroup";

// this will actually be modified server response, but that's not relevant to the form
type Props = {
  formDefaultValues: AllEventGroups;
  onSubmit: SubmitHandler<AllEventGroups>;
};

const EventSubmissionForm = ({ formDefaultValues, onSubmit }: Props) => {
  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */

    <FormContainer
      defaultValues={formDefaultValues}
      // onSubmit={() => handleSubmit(onSubmit)}
      onSuccess={onSubmit}
    >
      <SpacedChildren>
        <GeneralInfoGroup />
        <ContactGroup />
        <ProgramGroup />
        <SignageGroup />
        <WifiGroup />
        <Configuration />

        <Button
          endIcon={<SendSharp />}
          sx={{ width: "fit-content", ml: "auto" }}
          variant="contained"
          type="submit"
        >
          Submit
        </Button>
      </SpacedChildren>
    </FormContainer>
  );
};

export default EventSubmissionForm;
