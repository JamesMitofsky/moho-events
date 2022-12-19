import { Checkbox, FormGroup, FormControlLabel } from "@mui/material";
import { Controller, Control } from "react-hook-form";

interface Props {
  control: Control;
  propLabel: string;
  textLabel: string;
}

export default function ControlledCheckbox({
  control,
  propLabel,
  textLabel,
}: Props) {
  return (
    <Controller
      name={propLabel}
      control={control}
      defaultValue={false}
      render={({ field }) => (
        <FormGroup>
          <FormControlLabel control={<Checkbox {...field} />} label={textLabel} />
        </FormGroup>
      )}
    />
  );
}
