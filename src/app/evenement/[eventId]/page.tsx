"use client";

import { Configuration } from "@/components/FormInputGroups/Configuration";
import { ContactGroup } from "@/components/FormInputGroups/ContactGroup";
import { ProgramGroup } from "@/components/FormInputGroups/ProgramGroup";
import { SignageGroup } from "@/components/FormInputGroups/SignageGroup";
import { SocietyGroup } from "@/components/FormInputGroups/SocietyGroup";
import { WifiGroup } from "@/components/FormInputGroups/WifiGroup";
import { PaddedChildren } from "@/components/layouts/PaddedChildren";
import PageTitle from "@/components/layouts/PageTitle";
import ReturnHome from "@/components/ReturnHome";
import ReadOnlyContext from "@/services/ReadOnlyContext";
import { fetchSpecificEvent } from "@/services/cloudFirestore";
import {
  ModifiedServerResponse,
  AllEventGroups,
} from "@/utilities/globalTypes";
import { Button } from "@mui/material";
import { useState, useContext, useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

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
    reset,
    watch,
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

  console.log("eventData", eventData);
  const regCtrlProps = { register, control };

  return (
    <>
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
        <ProgramGroup {...regCtrlProps} watch={watch} />
        <SignageGroup {...regCtrlProps} />
        <WifiGroup {...regCtrlProps} />
        <Configuration {...regCtrlProps} />
      </PaddedChildren>
    </>
  );
}
