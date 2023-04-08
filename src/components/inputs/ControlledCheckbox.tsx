import { Checkbox, FormControlLabel, FormGroup, Switch } from "@mui/material";
import { Controller, FieldPath, useFormContext } from "react-hook-form";
import { AllEventGroups } from "../../utilities/globalTypes";

interface Props {
  propLabel: FieldPath<AllEventGroups>;
  textLabel: string;
  useSwitch?: boolean;
}

export default function ControlledCheckbox({
  propLabel,
  textLabel,
  useSwitch = true,
}: Props) {
  const { control } = useFormContext();

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
