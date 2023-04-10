import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import { fr } from "date-fns/locale";
import { useContext } from "react";
import { Controller, FieldPath, useFormContext } from "react-hook-form";
import ReadOnlyContext from "../../contexts/ReadOnlyContext";
import filterDateOrNumberToDate from "../../functions/filterDateOrNumberToDate";
import { AllEventGroups } from "../../functions/globalTypes";

interface Props {
  dataLabel: FieldPath<AllEventGroups>;
  textLabel?: string;
}

export default function ControlledDate({
  dataLabel,
  textLabel = "Date",
}: Props) {
  const { control } = useFormContext();
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
              // inputFormat="dd/MM/yyyy"
              value={date}
              onChange={(newValue) => onChange(newValue)}
              // renderInput={(params) => <TextField {...params} />}
            />
          );
        }}
      />
    </LocalizationProvider>
  );
}
