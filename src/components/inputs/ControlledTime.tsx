import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { Controller, FieldPath, useFormContext } from "react-hook-form";
import filterDateOrNumberToDate from "../../utilities/filterDateOrNumberToDate";
import { AllEventGroups } from "../../utilities/globalTypes";

interface Props {
  dataLabel: FieldPath<AllEventGroups>;
  textLabel?: string;
}

export default function ControlledTime({ dataLabel, textLabel }: Props) {
  const { control } = useFormContext();

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
              // renderInput={(params) => <TextField fullWidth {...params} />}
            />
          );
        }}
      />
    </LocalizationProvider>
  );
}
