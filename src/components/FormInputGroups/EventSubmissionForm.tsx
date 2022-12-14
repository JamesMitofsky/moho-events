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
            time: {
              start: "",
              end: "",
            },
          },
        ],
      },
      wifi: [
        {
          username: "",
          password: "",
        },
      ],
    },
  });
  const onSubmit: SubmitHandler<AllEventGroups> = (data) => {
    uploadEventData(data);
  };

  const regCtrlProps = { register, control };

  console.log("proof", watch("program.comments"));

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <>
      <PaddedChildren padding={3}>
        <SocietyGroup {...regCtrlProps} />
        <ContactGroup {...regCtrlProps} />
        <ProgramGroup {...regCtrlProps} />
        <SignageGroup {...regCtrlProps} />
        <WifiGroup {...regCtrlProps} />

        <Button onClick={handleSubmit(onSubmit)} variant="contained">
          Submit
        </Button>
      </PaddedChildren>
    </>
  );
};

export default EventSubmissionForm;
