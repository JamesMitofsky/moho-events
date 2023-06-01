import { AllEventGroups, ModifiedServerResponse } from "@/types/globalTypes";
import dayjs from "dayjs";

export default function prepareInputsForServer(
  event: AllEventGroups | ModifiedServerResponse
): ModifiedServerResponse | AllEventGroups {
  const dateAsISO = dayjs(event.generalInfo.dateAsISO).toISOString();
  const eventPreparedForServer: ModifiedServerResponse | AllEventGroups = {
    ...event,
    generalInfo: {
      ...event.generalInfo,
      dateAsISO,
    },
    program: {
      ...event.program,
      events: event.program.events.map((eventComponent) => {
        const startAsDayJs = dayjs(eventComponent.time.start);
        const formattedStart = startAsDayJs.isValid()
          ? startAsDayJs.toISOString()
          : "";

        const endAsDayJs = dayjs(eventComponent.time.end);
        const formattedEnd = endAsDayJs.isValid()
          ? endAsDayJs.toISOString()
          : "";

        return {
          ...eventComponent,
          time: {
            start: formattedStart,
            end: formattedEnd,
          },
        };
      }),
    },
  };

  return eventPreparedForServer;
}
