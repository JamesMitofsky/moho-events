import { ProgramInputs } from "@/types/globalTypes";
import getHoursAndMinutes from "./getHoursAndMinutes";

type Props = ProgramInputs["events"][0]["time"];

export default function returnStartAndEndTimes(time: Props): string {
  const formattedStart = getHoursAndMinutes(time.start as string);
  const formattedEnd = getHoursAndMinutes(time.end as string);
  return `${formattedStart} - ${formattedEnd}`;
}
