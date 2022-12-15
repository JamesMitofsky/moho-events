import { Controller } from "react-hook-form";
import { Autocomplete, TextField } from "@mui/material";

interface Props {
  options: string[];
  control: any;
  textLabel: string;
  propLabel: string;
}

export default function SelectOptions({
  options,
  control,
  textLabel,
  propLabel,
}: Props) {
  return (
    <Controller
      name={propLabel}
      control={control}
      render={({ field: { value, onChange } }) => (
        <Autocomplete
          onChange={(_, data) => onChange(data)}
          value={value}
          multiple
          freeSolo
          options={options}
          renderInput={(params) => <TextField {...params} label={textLabel} />}
        />
      )}
    />
  );
}
