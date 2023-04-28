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
      numberOfQuote: "",
      numberOfPeople: "",
      eventDate: "",
      comments: "",
    },
    program: {
      events: [
        {
          title: "",
          time: {
            start: "",
            end: "",
          },
          place: [],
          numberOfPeople: "",
          furnitureUsed: "",
          catering: [],
          billedService: "",
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
        numberOfPeople: "",
        layout: "",
        furnishedBy: "",
        microphones: "",
        visio: "",
        captioning: "",
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
    creationDetails: {
      versionOfFormInputs: 1,
    },
  };

  const onSubmit: SubmitHandler<AllEventGroups> = async (data) => {
    const convertEventDateToString = (obj: AllEventGroups): AllEventGroups => {
      const newObj = {
        ...obj,
        generalInfo: {
          ...obj.generalInfo,
          eventDate: obj.generalInfo.eventDate.toString(),
        },
      };
      return newObj as AllEventGroups;
    };

    const parsedData = convertEventDateToString(data);
    console.log(parsedData);

    const docRef = await uploadEventData(parsedData);
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
