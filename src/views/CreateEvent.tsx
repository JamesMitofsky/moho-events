import { Box } from "@mui/material";
import { v4 as uuidv4 } from "uuid";
import SubmitEvent from "../components/SubmitEvent";
import AllTextInputs from "../components/AllInputs";
import PageTitle from "../components/PageTitle";
import { emptyFormState } from "../utils/globalVars";
import ReturnHome from "../components/ReturnHome";
import { useStorageState } from "react-storage-hooks";

import {
  ContactInputs,
  SocietyInputs,
  ProgramInputs,
  WifiInputs,
} from "../utils/globalTypes";

const NewEvent = () => {
  const [formData, setFormData, writeError] = useStorageState(
    localStorage,
    import.meta.env.VITE_UNFINISHED_GROUP,
    { ...emptyFormState, id: uuidv4() }
  );

  const updateFormData = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [e.target.name]: e.target.value,
    }));
  };

  const emptyForm: {
    society: SocietyInputs;
    contact: ContactInputs;
    program: ProgramInputs;
    wifi: WifiInputs;
  } = {
    society: {
      associationName: "",
      category: "",
      eventName: "",
      eventType: "",
      numberOfQuote: 0,
      soldBy: "",
      comments: "",
    },
    contact: {
      companyName: "",
      contactName: "",
      telephoneNumber: 0,
      email: "",
      comments: "",
    },
    program: {
      numberOfPeople: 0,
      organiserArrivalTime: {
        dateAndTime: new Date(),
        place: "",
      },
      participantArrivalTime: {
        dateAndTime: new Date(),
        place: "",
      },
      welcomeCoffee: {
        dateAndTime: new Date(),
        place: "",
      },
      firstMeetingLocation: {
        dateAndTime: new Date(),
        place: "",
      },
      lunch: {
        dateAndTime: new Date(),
        place: "",
      },
      secondMeetingLocation: {
        dateAndTime: new Date(),
        place: "",
      },
      departureTime: new Date(),
      comments: "",
    },
    wifi: {
      username: "",
      password: "",
    },
  };

  const [form, setForm] = useStorageState(
    localStorage,
    "typedFormLayout",
    emptyForm
  );

  return (
    <>
      <ReturnHome />
      <PageTitle title="Créer un Evénement" />
      <Box
        component="form"
        sx={{
          m: 1,
          display: "flex",
          flexDirection: "column",
        }}
        noValidate
        autoComplete="off"
      >
        <AllTextInputs updateFormData={updateFormData} formData={formData} />
        <SubmitEvent
          emptyFormState={emptyFormState}
          formData={formData}
          setFormData={setFormData}
          updateOrAdd="add"
        />
      </Box>
    </>
  );
};

export default NewEvent;
