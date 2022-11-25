import { useForm, SubmitHandler } from "react-hook-form";
import { ContactGroup } from "./ContactGroup";
import { SocietyGroup } from "./SocietyGroup";
import { SignageGroup } from "./SignageGroup";
import { WifiGroup } from "./WifiGroup";
import { RestoGroup } from "./RestoGroup";
import { PaddedChildren } from "../Layouts/PaddedChildren";
import { Button } from "@mui/material";
import { ProgramGroup } from "./ProgramGroup";

const EventSubmissionForm = () => {
  interface timeAndPlace {
    dateAndTime: Date;
    place: "accueil" | "atrium" | "somewhere else" | "";
  }

  // input types
  interface SocietyInputs {
    associationName: string;
    category: string;
    eventName: string;
    eventType: string;
    numberOfQuote: number;
    soldBy: string;
    comments: string;
  }

  interface ContactInputs {
    companyName: string;
    contactName: string;
    telephoneNumber: number;
    email: string;
    comments: string;
  }

  interface ProgramInputs {
    numberOfPeople: number;
    organiserArrivalTime: timeAndPlace;
    participantArrivalTime: timeAndPlace;
    welcomeCoffee: timeAndPlace;
    firstMeetingLocation: timeAndPlace;
    lunch: timeAndPlace;
    secondMeetingLocation: timeAndPlace;
    departureTime: Date;
    comments: string;
  }
  interface WifiInputs {
    username: string;
    password: string;
  }

  interface SignageInputs {
    lobby: string;
    otherInfo: string;
    comments: string;
  }

  type Inputs = {
    society: SocietyInputs;
    contact: ContactInputs;
    program: ProgramInputs;
    wifi: WifiInputs;
    signage: SignageInputs;
  };
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  console.log(watch()); // watch input value by passing the name of it

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
