import PageTitle from "@/components/layouts/PageTitle";
import prepareInputsForServer from "@/functions/prepareInputsForServer";
import { uploadEventData } from "@/services/cloudFirestore";
import { AllEventGroups } from "@/types/globalTypes";
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
          place: [],
          numberOfPeople: "",
          furnitureUsed: "",
          catering: [],
          billedService: "",
          eventLayout: "",
          membership: "",
          details: "",
          involvesRestaurant: false,
          cateringComments: "",
          comments: "",
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
        room: [],
        numberOfPeople: "",
        layout: "",
        furnishedBy: "",
        microphones: "",
        visio: false,
        captioning: false,
        services: [],
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
      versionOfFormInputs: 1.2,
    },
  };

  const onSubmit: SubmitHandler<AllEventGroups> = async (data) => {
    const preparedInputData = prepareInputsForServer(data);

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
