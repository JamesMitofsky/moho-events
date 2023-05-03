import useConvertTimeToISO from "@/hooks/useConvertTimeToISO";
import { FieldPath } from "react-hook-form";
import { TimePickerElement } from "react-hook-form-mui";
import { AllEventGroups } from "../../types/globalTypes";
import SpacedChildren from "../layouts/SpacedChildren";

export default function TimeRangePicker({
  dataLabel,
}: {
  dataLabel: FieldPath<AllEventGroups>;
}) {
  const convertTime = useConvertTimeToISO();

  // coerce dataLabel to consider constructed strings as valid paths
  const startTime = `${dataLabel}.start` as typeof dataLabel;
  const endTime = `${dataLabel}.end` as typeof dataLabel;

  return (
    <SpacedChildren flexDirection="row">
      <TimePickerElement
        sx={{ width: "100%" }}
        label="Heure de début"
        name={startTime}
        onChange={(value) => convertTime(value, startTime)}
      />
      <TimePickerElement
        sx={{ width: "100%" }}
        label="Heure de fin"
        name={endTime}
        onChange={(value) => convertTime(value, endTime)}
      />
    </SpacedChildren>
  );
}
