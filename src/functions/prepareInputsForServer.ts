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
      // @ts-ignore
      events: event.program.events.map((eventComponent) => ({
        ...eventComponent,
        time: {
          start: dayjs(eventComponent.time.start).toISOString(),
          end: dayjs(eventComponent.time.end).toISOString(),
        },
      })),
    },
  };

  return eventPreparedForServer;
}
