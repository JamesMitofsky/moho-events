import PageTitle from "@/components/layouts/PageTitle";
import { uploadEventData } from "@/services/cloudFirestore";
import { AllEventGroups } from "@/types/globalTypes";
import dayjs from "dayjs";
import dynamic from "next/dynamic";
import router from "next/router";
import { SubmitHandler } from "react-hook-form";

export default function NewEvent() {
  const EventSubmissionForm = dynamic(
    () => import("@/components/FormInputGroups/EventSubmissionForm"),
    { ssr: false }
  );

  const formDefaultValues: AllEventGroups = {
    generalInfo: {
      associationName: "",
      category: "",
      eventName: "",
      eventType: "",
      numberOfQuote: "",
      numberOfPeople: "",
      dateAsISO: "",
      comments: "",
    },
    program: {
      events: [
        {
          title: "",
          time: {
            start: "",
            end: "",
          },
          place: "",
          numberOfPeople: "",
          furnitureUsed: "",
          catering: "",
          billedService: "",
          eventLayout: "",
          details: "",
          involvesRestaurant: false,
        },
      ],
      comments: "",
    },
    wifi: {
      connectionInfo: [
        {
          username: "",
          password: "",
        },
      ],
      comments: "",
    },
    configuration: [
      {
        room: "",
        numberOfPeople: "",
        layout: "",
        furnishedBy: "",
        microphones: "",
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
    signage: {
      locationAndText: [
        {
          location: "",
          text: "",
        },
      ],
      comments: "",
    },
    creationDetails: {
      versionOfFormInputs: 1,
    },
  };

  const onSubmit: SubmitHandler<AllEventGroups> = async (data) => {
    const dateAsISO = dayjs(data.generalInfo.dateAsISO).toISOString();
    const preparedInputData: AllEventGroups = {
      ...data,
      generalInfo: {
        ...data.generalInfo,
        dateAsISO,
      },
    };

    console.log(preparedInputData);

    const docRef = await uploadEventData(preparedInputData);
    if (docRef) {
      console.log("success");
      // TODO redirect to page with the completed, static form, triggering confetti
      router.push(`/evenement/${docRef}`);
    }
  };

  return (
    <>
      <PageTitle title="Créer un Evènement" />
      <EventSubmissionForm
        formDefaultValues={formDefaultValues}
        onSubmit={onSubmit}
      />
    </>
  );
}
