import { useForm, SubmitHandler } from "react-hook-form";
import { ContactGroup } from "./ContactGroup";
import { SocietyGroup } from "./SocietyGroup";
import { SignageGroup } from "./SignageGroup";
import { WifiGroup } from "./WifiGroup";
import { PaddedChildren } from "../layouts/PaddedChildren";
import { Button } from "@mui/material";
import { ProgramGroup } from "./ProgramGroup";
import { useRouter } from "next/navigation";
import { AllEventGroups } from "../../utilities/globalTypes";
import { uploadEventData } from "../../services/cloudFirestore";
import { Configuration } from "./Configuration";
import SpacedChildren from "../layouts/SpacedChildren";
import { FormContainer } from "react-hook-form-mui";
import { FormEvent } from "react";
import { SendSharp } from "@mui/icons-material";

const EventSubmissionForm = () => {
  const router = useRouter();

  const formDefaultValues = {
    program: {
      events: [
        {
          title: "",
          time: {
            start: null,
            end: null,
          },
          place: [],
          numberOfPeople: null,
          furnitureUsed: "",
          catering: [],
          billedService: null,
          eventLayout: "",
          details: "",
          involvesRestaurant: false,
        },
      ],
    },
    wifi: [
      {
        username: "",
        password: "",
      },
    ],
    configuration: [
      {
        room: "",
        numberOfPeople: null,
        layout: "",
        furnishedBy: "",
        microphones: null,
        visio: null,
        captioning: null,
        services: "",
        comments: "",
      },
    ],
    contact: {
      individuals: [
        {
          companyName: "",
          contactName: "",
          email: "",
          telephoneNumber: "",
        },
      ],
      comments: "",
    },
  };

  const { register, handleSubmit, control, watch } = useForm<AllEventGroups>();

  console.log(watch());

  const onSubmit: SubmitHandler<AllEventGroups> = async (data) => {
    const docRef = await uploadEventData(data);
    if (docRef) {
      console.log("success");
      // TODO redirect to page with the completed, static form, triggering confetti
      router.push(`/evenement/${docRef}`);
    }
  };

  const regCtrlProps = { register, control };

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */

    <FormContainer defaultValues={formDefaultValues}>
      <SpacedChildren>
        <SocietyGroup {...regCtrlProps} />
        {/* <ContactGroup {...regCtrlProps} />
        <ProgramGroup {...regCtrlProps} watch={watch} />
        <SignageGroup {...regCtrlProps} />
        <WifiGroup {...regCtrlProps} />
        <Configuration {...regCtrlProps} /> */}

        <Button
          endIcon={<SendSharp />}
          sx={{ width: "fit-content", ml: "auto" }}
          variant="contained"
        >
          Submit
        </Button>
      </SpacedChildren>
    </FormContainer>
  );
};

export default EventSubmissionForm;
