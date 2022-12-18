import { Controller, Control } from "react-hook-form";
import { Autocomplete, TextField } from "@mui/material";

interface Props {
  options: string[];
  control: Control;
  textLabel: string;
  propLabel: string;
  helperText?: string;
}

export default function SelectOptions({
  options,
  control,
  textLabel,
  propLabel,
  helperText,
}: Props) {
  return (
    <Controller
      name={propLabel}
      control={control}
      defaultValue={[]}
      render={({ field: { value, onChange } }) => (
        <Autocomplete
          onChange={(_, data) => onChange(data)}
          value={value}
          multiple
          freeSolo
          options={options}
          renderInput={(params) => (
            <TextField {...params} label={textLabel} helperText={helperText} />
          )}
        />
      )}
    />
  );
}
