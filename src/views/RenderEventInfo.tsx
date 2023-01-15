import { useParams } from "react-router-dom";
import PageTitle from "../components/Layouts/PageTitle";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import ReturnHome from "../components/ReturnHome";
import { fetchSpecificEvent } from "../services/cloudFirestore";
import { useContext, useEffect, useState } from "react";
import { AllEventGroups, ModifiedServerResponse } from "../utils/globalTypes";
import { PaddedChildren } from "../components/Layouts/PaddedChildren";
import { Button } from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";
import ReadOnlyContext from "../services/ReadOnlyContext";
import DisplayContact from "../components/DisplayInfo/DisplayContact";

export default function RenderEventInfo() {
  const [eventData, setEventData] = useState<ModifiedServerResponse>(
    {} as ModifiedServerResponse
  );

  const { isReadOnly, setIsReadOnly } = useContext(ReadOnlyContext);
  // set state as read only on initial load
  useEffect(() => {
    setIsReadOnly(true);
  }, []);

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

  return (
    <>
      <ReturnHome />
      {/* have the grid display two columns when the page is wide enough to allow */}
      <PageTitle
        title={eventData?.society?.eventName}
        subtitle="événement"
        icon={EventAvailableIcon}
      />
      <PaddedChildren padding={3}>
        <DisplayContact {...eventData.contact} />
        {/* <SocietyGroup {...regCtrlProps} />
        <ContactGroup {...regCtrlProps} />
        <ProgramGroup {...regCtrlProps} />
        <SignageGroup {...regCtrlProps} />
        <WifiGroup {...regCtrlProps} />
        <Configuration {...regCtrlProps} /> */}
      </PaddedChildren>
    </>
  );
}
