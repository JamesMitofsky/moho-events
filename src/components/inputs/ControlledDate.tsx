import { TextField } from "@mui/material";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import { fr } from "date-fns/locale";
import { AllEventGroups } from "../../utilities/globalTypes";
import { Controller, Control, FieldPath } from "react-hook-form";
import IsReadOnly from "../../services/ReadOnlyContext";
import { useContext } from "react";
import filterDateOrNumberToDate from "../../utilities/filterDateOrNumberToDate";
import ReadOnlyContext from "../../services/ReadOnlyContext";

interface Props {
  control: Control<AllEventGroups>;
  dataLabel: FieldPath<AllEventGroups>;
  textLabel?: string;
}

export default function ControlledDate({
  control,
  dataLabel,
  textLabel = "Date",
}: Props) {
  const { isReadOnly } = useContext(ReadOnlyContext);
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={fr}>
      <Controller
        control={control}
        name={dataLabel}
        defaultValue={null}
        render={({
          field: { value, onChange },
        }: {
          field: { value: any; onChange: any };
        }) => {
          // when rendering the form for display only, the value arrives as an object with a seconds property. Change this into an object.
          const date = filterDateOrNumberToDate(value?.seconds || value);

          return (
            <DatePicker
              readOnly={isReadOnly}
              label={textLabel}
              inputFormat="dd/MM/yyyy"
              value={date}
              onChange={(newValue) => onChange(newValue)}
              renderInput={(params) => <TextField {...params} />}
            />
          );
        }}
      />
    </LocalizationProvider>
  );
}
