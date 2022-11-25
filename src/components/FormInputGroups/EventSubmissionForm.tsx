import { useForm, SubmitHandler } from "react-hook-form";
import { ContactGroup } from "./ContactGroup";
import { SocietyGroup } from "./SocietyGroup";
import { SignageGroup } from "./SignageGroup";
import { WifiGroup } from "./WifiGroup";
import { RestoGroup } from "./RestoGroup";
import { PaddedChildren } from "../Layouts/PaddedChildren";
import { Button } from "@mui/material";
import { ProgramGroup } from "./ProgramGroup";

export const EventSubmissionForm = () => {
  type Inputs = {
    name: string;
    exampleRequired: number;
  };
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  console.log(watch("name")); // watch input value by passing the name of it

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}>
      <PaddedChildren padding={3}>
        <SocietyGroup register={register} />
        <ContactGroup register={register} />
        <ProgramGroup register={register} />
        <SignageGroup register={register} />
        <WifiGroup register={register} />
        <RestoGroup register={register} />

        <Button type="submit" variant="contained">
          Submit
        </Button>
      </PaddedChildren>
    </form>
  );
};
