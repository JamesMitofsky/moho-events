import EventSubmissionForm from "@/components/FormInputGroups/EventSubmissionForm";
import PageTitle from "@/components/layouts/PageTitle";
import useParamsToFetchEvent from "@/hooks/useParamsToFetchEvent";
import { ModifiedServerResponse } from "@/types/globalTypes";
import dayjs from "dayjs";
import { SubmitHandler } from "react-hook-form";

export default function EditEvent() {
  const event = useParamsToFetchEvent();

  const formattedEvent = event ? convertDatesToDayJs(event) : null;

  const onSubmit: SubmitHandler<ModifiedServerResponse> = async (data) => {
    // const docRef = await updateEvent(preparedInputData);
    // if (docRef) {
    //   console.log("success");
    //   // TODO redirect to page with the completed, static form, triggering confetti
    //   router.push(`/evenement/${docRef}`);
    // }
  };

  console.log(dayjs("2023-05-11T22:00:00.000Z"));

  return (
    <>
      <PageTitle title="Modifier évènement" />
      {formattedEvent ? (
        <EventSubmissionForm
          formDefaultValues={formattedEvent}
          // @ts-ignore
          onSubmit={onSubmit}
        />
      ) : null}
    </>
  );
}

function convertDatesToDayJs(
  event: ModifiedServerResponse
): ModifiedServerResponse {
  const convertedEvent: ModifiedServerResponse = {
    ...event,
    generalInfo: {
      ...event.generalInfo,
      dateAsISO: dayjs(event.generalInfo.dateAsISO) as any,
    },
    program: {
      ...event.program,
      events: event.program.events.map((event) => ({
        ...event,
        time: {
          start: dayjs(event.time.start),
          end: dayjs(event.time.end),
        },
      })) as any,
    },
  };

  return convertedEvent;
}
