import getHoursAndMinutes from "@/functions/getHoursAndMinutes";
import DisplayWrapper from "./WrapperCopyContent";
import WrapperEmptyField from "./WrapperEmptyField";

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
    <WrapperEmptyField label={label} input={startTime}>
      <DisplayWrapper
        content={`${formattedStart} — ${formattedEnd}`}
        label={label}
      />
    </WrapperEmptyField>
  );
}
