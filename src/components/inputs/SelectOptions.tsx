import { Autocomplete, TextField } from "@mui/material";
import { AllEventGroups, AllEventGroupPaths } from "../../utils/globalTypes";
import { Controller, Control } from "react-hook-form";

export interface SelectProps {
  options: string[];
  textLabel: string;
  control: Control<AllEventGroups>;
  propLabel: AllEventGroupPaths;
  helperText?: string;
  isUnique?: boolean;
}

export default function SelectOptions({
  options,
  control,
  textLabel,
  propLabel,
  helperText = `Tappez 'Entrée' après chaque réponse`,
  isUnique = false,
}: SelectProps) {
  return (
    <Controller
      name={propLabel}
      control={control}
      defaultValue={[]}
      render={({ field: { value, onChange } }) => (
        <Autocomplete
          onChange={(_, data) => onChange(data)}
          // coercing "value" because SelectOptions should not  must receive string[]
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
