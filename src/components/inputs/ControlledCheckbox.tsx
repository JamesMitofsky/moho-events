import { Checkbox } from "@mui/material";
import { Controller, Control } from "react-hook-form";

interface Props {
  control: Control;
  propLabel: string;
}

export default function ControlledCheckbox({ control, propLabel }: Props) {
  return (
    <Controller
      name={propLabel}
      control={control}
      defaultValue={false}
      render={({ field }) => <Checkbox {...field} />}
    />
  );
}
