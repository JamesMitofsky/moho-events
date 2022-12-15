import { Box } from "@mui/material";
import Time from "./Time";
import { Control } from "react-hook-form";

export default function TimeRangePicker({
  control,
  dataLabel,
}: {
  control: Control;
  dataLabel: string;
}) {
  const startTime = `${dataLabel}.start`;
  const endTime = `${dataLabel}.end`;

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
