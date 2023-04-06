import { Checkbox, FormGroup, FormControlLabel, Switch } from "@mui/material";
import { Controller, Control, FieldPath } from "react-hook-form";
import { AllEventGroups } from "../../utilities/globalTypes";

interface Props {
  control: Control<AllEventGroups>;
  propLabel: FieldPath<AllEventGroups>;
  textLabel: string;
  useSwitch?: boolean;
}

export default function ControlledCheckbox({
  control,
  propLabel,
  textLabel,
  useSwitch = true,
}: Props) {
  return (
    <Controller
      name={propLabel}
      control={control}
      render={({ field: { value, onChange } }) => {
        const styleOfCheck = useSwitch ? (
          <Switch
            onChange={(boolean) => onChange(boolean)}
            checked={value as boolean}
          />
        ) : (
          <Checkbox
            onChange={(boolean) => onChange(boolean)}
            checked={value as boolean}
          />
        );
        return (
          <FormGroup>
            <FormControlLabel control={styleOfCheck} label={textLabel} />
          </FormGroup>
        );
      }}
    />
  );
}
