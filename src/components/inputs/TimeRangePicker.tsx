import { Box } from "@mui/material";
import Time from "./Time";
import { Control, FieldPath } from "react-hook-form";
import { AllEventGroups } from "../../utilities/globalTypes";

export default function TimeRangePicker({
  control,
  dataLabel,
}: {
  control: Control<AllEventGroups>;
  dataLabel: FieldPath<AllEventGroups>;
}) {
  // coerce dataLabel to consider constructed strings as valid paths
  const startTime = `${dataLabel}.start` as typeof dataLabel;
  const endTime = `${dataLabel}.end` as typeof dataLabel;

  return (
    <Box sx={{ display: "grid", gap: 2, gridTemplateColumns: "1fr 1fr" }}>
      <Time
        dataLabel={startTime}
        textLabel="Heure de début"
        control={control}
      />
      <Time dataLabel={endTime} textLabel="Heure de fin" control={control} />
    </Box>
  );
}
