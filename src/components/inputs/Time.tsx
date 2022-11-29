import TextField from "@mui/material/TextField";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { Controller } from "react-hook-form";

export default function ControlledPicker({
  control,
  dataLabel,
}: {
  control: any;
  dataLabel: string;
}) {
  return (
    <Controller
      control={control}
      name={dataLabel}
      render={({ field }) => (
        <TimePicker
          {...field}
          renderInput={(params) => <TextField {...params} />}
        />
      )}
    />
  );
}
