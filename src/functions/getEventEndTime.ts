import { EventComponent } from "@/types/globalTypes";

export default function getEventEndTime(events: EventComponent[]): string {
  const lastEvent = events.length > 1 ? events[events.length - 1] : events[0];
  const endTime = lastEvent.time.end as string;
  return endTime;
}
