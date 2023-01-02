import { useForm, SubmitHandler } from "react-hook-form";
import { ContactGroup } from "./ContactGroup";
import { SocietyGroup } from "./SocietyGroup";
import { SignageGroup } from "./SignageGroup";
import { WifiGroup } from "./WifiGroup";
import { PaddedChildren } from "../Layouts/PaddedChildren";
import { Button } from "@mui/material";
import { ProgramGroup } from "./ProgramGroup";

import { AllEventGroups } from "../../utils/globalTypes";
import { uploadEventData } from "../../services/cloudFirestore";
import { Configuration } from "./Configuration";

const EventSubmissionForm = () => {
  const {
    register,
    handleSubmit,
    control,
    watch,
    setValue,
    formState: { errors },
  } = useForm<AllEventGroups>({
    defaultValues: {
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
          visio: "",
          captioning: "",
          services: "",
          comments: "",
        },
      ],
    },
  });
  const onSubmit: SubmitHandler<AllEventGroups> = (data) => {
    uploadEventData(data);
  };

  const regCtrlProps = { register, control };

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <>
      <PaddedChildren padding={3}>
        <SocietyGroup {...regCtrlProps} />
        <ContactGroup {...regCtrlProps} />
        <ProgramGroup {...regCtrlProps} />
        <SignageGroup {...regCtrlProps} />
        <WifiGroup {...regCtrlProps} />
        <Configuration {...regCtrlProps} />

        <Button
          sx={{ mt: 3, mb: 4 }}
          onClick={handleSubmit(onSubmit)}
          variant="outlined"
        >
          Submit
        </Button>
      </PaddedChildren>
    </>
  );
};

export default EventSubmissionForm;
