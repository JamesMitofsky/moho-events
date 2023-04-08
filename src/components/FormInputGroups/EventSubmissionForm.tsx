import { uploadEventData } from "@/services/cloudFirestore";
import { AllEventGroups } from "@/utilities/globalTypes";
import { SendSharp } from "@mui/icons-material";
import { Button } from "@mui/material";
import router from "next/router";
import { FormContainer, SubmitHandler, useForm } from "react-hook-form-mui";
import TextEditor from "../TextEditor";
import SpacedChildren from "../layouts/SpacedChildren";
import { SocietyGroup } from "./SocietyGroup";

const EventSubmissionForm = () => {
  // const router = useRouter();

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

  const { handleSubmit, control, watch } = useForm<AllEventGroups>();

  // console.log(watch());

  const onSubmit: SubmitHandler<AllEventGroups> = async (data) => {
    console.log(data);
    const docRef = await uploadEventData(data);
    if (docRef) {
      console.log("success");
      // TODO redirect to page with the completed, static form, triggering confetti
      router.push(`/evenement/${docRef}`);
    }
  };

  // You can pass an async function for asynchronous validation.
  // function submitNow() {
  //   console.log("test");
  //   handleSubmit(onSubmit)();
  //   handleSubmit((data) => console.log(data))();
  // }

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */

    <FormContainer
      defaultValues={formDefaultValues}
      // onSubmit={() => handleSubmit(onSubmit)}
      onSuccess={(data) => console.log(" on success ", data)}
    >
      <SpacedChildren>
        <TextEditor displayLabel="Test" objLabel="test" />
        <SocietyGroup control={control} />
        {/* <ContactGroup {...regCtrlProps} />
      <ProgramGroup {...regCtrlProps} watch={watch} />
      <SignageGroup {...regCtrlProps} />
      <WifiGroup {...regCtrlProps} />
      <Configuration {...regCtrlProps} /> */}

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
