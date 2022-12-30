import { Checkbox, FormGroup, FormControlLabel } from "@mui/material";
import { Controller, Control, FieldPath } from "react-hook-form";
import { AllEventGroups } from "../../utils/globalTypes";

interface Props {
  control: Control<AllEventGroups>;
  propLabel: FieldPath<AllEventGroups>;
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
          <FormControlLabel
            control={<Checkbox {...field} />}
            label={textLabel}
          />
        </FormGroup>
      )}
    />
  );
}
