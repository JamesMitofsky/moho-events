import { useForm, SubmitHandler } from "react-hook-form";
import { ContactGroup } from "./ContactGroup";
import { SocietyGroup } from "./SocietyGroup";
import { SignageGroup } from "./SignageGroup";
import { WifiGroup } from "./WifiGroup";
import { RestoGroup } from "./RestoGroup";
import { PaddedChildren } from "../Layouts/PaddedChildren";
import { Button } from "@mui/material";
import { ProgramGroup } from "./ProgramGroup";

import { AllEventGroups } from "../../utils/globalTypes";

const EventSubmissionForm = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<AllEventGroups>({ defaultValues: {} });
  const onSubmit: SubmitHandler<AllEventGroups> = (data) => console.log(data);

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <>
      <PaddedChildren padding={3}>
        <SocietyGroup register={register} />
        <ContactGroup register={register} />
        <ProgramGroup register={register} control={control} />
        <SignageGroup register={register} />
        <WifiGroup register={register} />
        <RestoGroup register={register} />

        <Button onClick={handleSubmit(onSubmit)} variant="contained">
          Submit
        </Button>
      </PaddedChildren>
    </>
  );
};

export default EventSubmissionForm;
