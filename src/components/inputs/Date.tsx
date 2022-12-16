import { TextField, TablePagination } from "@mui/material";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Controller, Control } from "react-hook-form";
import { fr } from "date-fns/locale";

interface Props {
  control: Control;
  dataLabel: string;
  textLabel?: string;
}

export default function Date({
  control,
  dataLabel,
  textLabel = "Date",
}: Props) {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={fr}>
      <Controller
        control={control}
        name={dataLabel}
        defaultValue={null}
        render={({ field }) => (
          <DatePicker
            label={textLabel}
            inputFormat="dd/MM/yyyy"
            {...field}
            renderInput={(params) => <TextField {...params} />}
          />
        )}
      />
    </LocalizationProvider>
  );
}
