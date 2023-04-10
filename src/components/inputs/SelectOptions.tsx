import { Autocomplete, TextField } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";
import { AllEventGroupPaths } from "../../types/globalTypes";

export interface SelectProps {
  options: string[];
  textLabel: string;
  propLabel: AllEventGroupPaths;
  helperText?: string;
  isUnique?: boolean;
}

export default function SelectOptions({
  options,
  textLabel,
  propLabel,
  helperText = `Tappez 'Entrée' après chaque réponse`,
  isUnique = false,
}: SelectProps) {
  const { control } = useFormContext();

  return (
    <Controller
      name={propLabel}
      control={control}
      defaultValue={[]}
      render={({ field: { value, onChange } }) => (
        <Autocomplete
          onChange={(_, data) => onChange(data)}
          // coercing "value" because SelectOptions must receive string[]
          value={(value as string[]) || []}
          options={options}
          multiple={isUnique ? false : true}
          freeSolo
          renderInput={(params) => (
            <TextField
              {...params}
              label={textLabel}
              helperText={isUnique ? "" : helperText}
            />
          )}
        />
      )}
    />
  );
}
