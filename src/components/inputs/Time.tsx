import TextField from "@mui/material/TextField";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { Controller, Control, FieldPath } from "react-hook-form";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AllEventGroups } from "../../utils/globalTypes";
import filterDateOrNumberToDate from "../../utils/filterDateOrNumberToDate";

interface Props {
  dataLabel: FieldPath<AllEventGroups>;
  control: Control<AllEventGroups>;
  textLabel?: string;
}

export default function Time({ control, dataLabel, textLabel }: Props) {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Controller
        control={control}
        name={dataLabel}
        defaultValue={null}
        render={({
          field: { value, onChange },
        }: {
          field: { value: any; onChange: any };
        }) => {
          const date = filterDateOrNumberToDate(value?.seconds || value);

          return (
            <TimePicker
              ampm={false}
              label={textLabel}
              value={date}
              onChange={(newValue) => onChange(newValue)}
              renderInput={(params) => <TextField fullWidth {...params} />}
            />
          );
        }}
      />
    </LocalizationProvider>
  );
}
