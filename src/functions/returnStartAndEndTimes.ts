import { ProgramInputs } from "@/types/globalTypes";
import getHoursAndMinutes from "./getHoursAndMinutes";

type EventTime = ProgramInputs["events"][number]["time"];

export default function returnStartAndEndTimes(time: EventTime): string {
  const startAsHumanReadable = getHoursAndMinutes(time.start as string);
  const endAsHumanReadable = getHoursAndMinutes(time.end as string);

  const startTimeToShow = startAsHumanReadable
    ? startAsHumanReadable
    : "Pas enregistré";
  const endTimeToShow = endAsHumanReadable
    ? endAsHumanReadable
    : "Pas enregistré";

  // if neither exist, show "Heure inconnue"
  if (!startAsHumanReadable && !endAsHumanReadable) {
    return "Heure pas enregistré";
  } else {
    const joinedStartAndEndTimes = `${startTimeToShow} - ${endTimeToShow}`;

    return joinedStartAndEndTimes;
  }
}
