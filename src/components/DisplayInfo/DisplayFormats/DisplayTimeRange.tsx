import getHoursAndMinutes from "@/functions/getHoursAndMinutes";
import DisplayEmptyField from "./DisplayEmptyField";
import DisplayWrapper from "./DisplayWrapper";

export default function DisplayTimeRange({
  startTime,
  endTime,
  label,
}: {
  startTime: string;
  endTime: string;
  label: string;
}) {
  const formattedStart = getHoursAndMinutes(startTime);
  const formattedEnd = getHoursAndMinutes(endTime);
  return (
    <DisplayEmptyField label={label} input={startTime}>
      <DisplayWrapper
        content={`${formattedStart} — ${formattedEnd}`}
        label={label}
      />
    </DisplayEmptyField>
  );
}
