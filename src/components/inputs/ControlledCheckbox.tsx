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
      render={({ field: { value, onChange } }) => {
        return (
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  onChange={(boolean) => onChange(boolean)}
                  checked={value as boolean}
                />
              }
              label={textLabel}
            />
          </FormGroup>
        );
      }}
    />
  );
}
