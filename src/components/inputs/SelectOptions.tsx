import { Autocomplete, TextField } from "@mui/material";
import { AllEventGroups, AllEventGroupPaths } from "../../utils/globalTypes";
import { Controller, Control } from "react-hook-form";

interface Props {
  options: string[];
  control: Control<AllEventGroups>;
  textLabel: string;
  propLabel: AllEventGroupPaths;
  helperText?: string;
}

export default function SelectOptions({
  options,
  control,
  textLabel,
  propLabel,
  helperText = `Tappez 'Entrée' après chaque réponse`,
}: Props) {
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
          multiple
          freeSolo
          renderInput={(params) => (
            <TextField {...params} label={textLabel} helperText={helperText} />
          )}
        />
      )}
    />
  );
}
