import { Box } from "@mui/material";
import SubmitEvent from "../components/SubmitEvent";
import AllTextInputs from "../components/AllInputs";
import PageTitle from "../components/PageTitle";
import ReturnHome from "../components/ReturnHome";

import {
  ContactInputs,
  SocietyInputs,
  ProgramInputs,
  WifiInputs,
} from "../utils/globalTypes";
import { useState } from "react";

const NewEvent = () => {
  // default state of the form before or after submission
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

  const [form, setForm] = useState(emptyForm);

  // catcher function to handle which part of the form object to update
  const updateForm = (
    e: React.ChangeEvent<HTMLInputElement>,
    inputGroup: "society" | "contact" | "program" | "wifi"
  ) => {
    setForm((prevForm) => {
      return {
        // spread original form
        ...prevForm,
        // select the group being updated
        [inputGroup]: {
          // spread the original group
          ...prevForm[inputGroup],
          // change only the input being updated
          [e.target.name]: e.target.value,
        },
      };
    });
  };

  // TODO: remove testing console log statement
  console.log(form);

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
        <AllTextInputs updateFormData={updateForm} formData={form} />
        {/* <SubmitEvent formData={form} /> */}
      </Box>
    </>
  );
};

export default NewEvent;
