import { useParams } from "react-router-dom";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import PageTitle from "../components/Layouts/PageTitle";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import ReturnHome from "../components/ReturnHome";
import { fetchSpecificEvent } from "../services/cloudFirestore";
import { useEffect, useState } from "react";
import { AllEventGroups, ModifiedServerResponse } from "../utils/globalTypes";
import { PaddedChildren } from "../components/Layouts/PaddedChildren";
import { SocietyGroup } from "../components/FormInputGroups/SocietyGroup";
import { ContactGroup } from "../components/FormInputGroups/ContactGroup";
import { ProgramGroup } from "../components/FormInputGroups/ProgramGroup";
import { WifiGroup } from "../components/FormInputGroups/WifiGroup";
import { Configuration } from "../components/FormInputGroups/Configuration";
import { Button } from "@mui/material";
import { SignageGroup } from "../components/FormInputGroups/SignageGroup";
import { SubmitHandler, useForm } from "react-hook-form";
import IsReadOnly from "../services/IsReadOnly";

export default function RenderEventInfo() {
  const [eventData, setEventData] = useState<ModifiedServerResponse>(
    {} as ModifiedServerResponse
  );

  const [isReadOnly, setIsReadOnly] = useState(false);

  // set form state with event data
  const {
    register,
    control,
    setValue,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<AllEventGroups>({
    defaultValues: {
      society: {
        eventName: " ",
        associationName: " ",
        category: " ",
        comments: " ",
        eventType: " ",
        numberOfQuote: 0,
        soldBy: " ",
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
        numberOfPeople: 0,
      },
      signage: {
        lobby: " ",
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
    },
  });

  const onUpdate: SubmitHandler<AllEventGroups> = async (data) => {
    // const docRef = await updateEventData(data);
    // if (docRef) {
    console.log("update function called, data passed");
    // TODO redirect to page with the completed, static form, triggering confetti
  };

  // query firebase using the eventId
  const { eventId } = useParams<{ eventId: string }>();
  useEffect(() => {
    const getEvent = async function () {
      const res = await fetchSpecificEvent(eventId as string);
      setEventData(res);
    };
    getEvent();
  }, [eventId]);

  useEffect(() => {
    reset(eventData);
  }, [eventData, reset]);

  function toggleEdit() {
    setIsReadOnly((prev) => {
      return !prev;
    });
  }

  const regCtrlProps = { register, control };

  return (
    <IsReadOnly.Provider value={isReadOnly}>
      <ReturnHome />
      {/* have the grid display two columns when the page is wide enough to allow */}
      <PageTitle
        title={eventData?.society?.eventName}
        subtitle="événement"
        icon={EventAvailableIcon}
      />
      <Button size="small" onClick={toggleEdit}>
        {isReadOnly ? "Locked" : "Open"}
      </Button>
      <PaddedChildren padding={3}>
        <SocietyGroup {...regCtrlProps} />
        <ContactGroup {...regCtrlProps} />
        <ProgramGroup {...regCtrlProps} />
        <SignageGroup {...regCtrlProps} />
        <WifiGroup {...regCtrlProps} />
        <Configuration {...regCtrlProps} />
      </PaddedChildren>
    </IsReadOnly.Provider>
  );
}
