import { Box } from "@mui/material";
import { FieldPath, useFormContext } from "react-hook-form";
import { AllEventGroups } from "../../utilities/globalTypes";
import ControlledTime from "./ControlledTime";

export default function TimeRangePicker({
  dataLabel,
}: {
  dataLabel: FieldPath<AllEventGroups>;
}) {
  const { control } = useFormContext();

  // coerce dataLabel to consider constructed strings as valid paths
  const startTime = `${dataLabel}.start` as typeof dataLabel;
  const endTime = `${dataLabel}.end` as typeof dataLabel;

  return (
    <Box sx={{ display: "grid", gap: 2, gridTemplateColumns: "1fr 1fr" }}>
      <ControlledTime dataLabel={startTime} textLabel="Heure de début" />
      <ControlledTime dataLabel={endTime} textLabel="Heure de fin" />
    </Box>
  );
}
