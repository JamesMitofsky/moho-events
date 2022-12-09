import TextField from "@mui/material/TextField";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { Controller } from "react-hook-form";

export default function Time({
  control,
  dataLabel,
  textLabel,
}: {
  control: any;
  dataLabel: string;
  textLabel?: string;
}) {
  return (
    <Controller
      control={control}
      name={dataLabel}
      defaultValue={null}
      render={({ field }) => (
        <TimePicker
          label={textLabel}
          {...field}
          renderInput={(params) => <TextField fullWidth {...params} />}
        />
      )}
    />
  );
}
