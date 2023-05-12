import { EventComponent } from "@/types/globalTypes";

export default function getEventEndTime(events: EventComponent[]): string {
  const lastEvent = events[events.length - 1];
  const endTime = lastEvent.time.end as string;
  return endTime;
}
