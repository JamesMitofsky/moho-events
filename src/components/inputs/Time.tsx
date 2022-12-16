import TextField from "@mui/material/TextField";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { Controller, Control } from "react-hook-form";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

export default function Time({
  control,
  dataLabel,
  textLabel,
}: {
  control: Control;
  dataLabel: string;
  textLabel?: string;
}) {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
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
    </LocalizationProvider>
  );
}
