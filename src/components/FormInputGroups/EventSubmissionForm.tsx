import { uploadEventData } from "@/services/cloudFirestore";
import { AllEventGroups } from "@/types/globalTypes";
import { SendSharp } from "@mui/icons-material";
import { Button } from "@mui/material";
import router from "next/router";
import { FormContainer, SubmitHandler } from "react-hook-form-mui";
import SpacedChildren from "../layouts/SpacedChildren";
import Configuration from "./Configuration";
import ContactGroup from "./ContactGroup";
import GeneralInfoGroup from "./GeneralInfoGroup";
import ProgramGroup from "./ProgramGroup";
import SignageGroup from "./SignageGroup";
import WifiGroup from "./WifiGroup";

const EventSubmissionForm = () => {
  // const router = useRouter();

  const formDefaultValues: AllEventGroups = {
    generalInfo: {
      associationName: "",
      category: "",
      eventName: "",
      eventType: "",
      numberOfQuote: null,
      numberOfPeople: null,
      eventDate: null,
      comments: "",
    },
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
      comments: "",
    },
    wifi: {
      connectionInfo: [
        {
          username: "",
          password: "",
        },
      ],
      comments: "",
    },
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
    signage: {
      locationAndText: [
        {
          location: "",
          text: "",
        },
      ],
      comments: "",
    },
  };

  const onSubmit: SubmitHandler<AllEventGroups> = async (data) => {
    console.log(data);
    const docRef = await uploadEventData(data);
    if (docRef) {
      console.log("success");
      // TODO redirect to page with the completed, static form, triggering confetti
      router.push(`/evenement/${docRef}`);
    }
  };

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
