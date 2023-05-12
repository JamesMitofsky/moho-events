import EventSubmissionForm from "@/components/FormInputGroups/EventSubmissionForm";
import PageTitle from "@/components/layouts/PageTitle";
import prepareInputsForServer from "@/functions/prepareInputsForServer";
import useParamsToFetchEvent from "@/hooks/useParamsToFetchEvent";
import updateEvent from "@/services/database/updateEvent";
import { ModifiedServerResponse } from "@/types/globalTypes";
import dayjs from "dayjs";
import router from "next/router";
import { SubmitHandler } from "react-hook-form";

export default function EditEvent() {
  const event = useParamsToFetchEvent();

  const formattedEvent = event ? convertDatesToDayJs(event) : null;

  const onSubmit: SubmitHandler<ModifiedServerResponse> = async (data) => {
    if (!formattedEvent) return;

    const eventPreparedForServer = prepareInputsForServer(
      data
    ) as ModifiedServerResponse;

    const docRef = await updateEvent(eventPreparedForServer);
    if (docRef) {
      console.log("successfully updated event");
      router.push(`/evenement/${docRef}`);
    }
  };

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
      // @ts-ignore
      events: event.program.events.map((eventComponent) => ({
        ...eventComponent,
        time: {
          start: dayjs(eventComponent.time.start),
          end: dayjs(eventComponent.time.end),
        },
      })),
    },
  };

  return convertedEvent;
}
