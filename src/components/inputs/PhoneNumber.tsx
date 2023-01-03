import { Controller, Control, FieldPath } from "react-hook-form";
import { AllEventGroups } from "../../utils/globalTypes";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/material.css";
import fr from "react-phone-input-2/lang/fr.json";

interface Props {
  control: Control<AllEventGroups>;
  propLabel: FieldPath<AllEventGroups>;
  textLabel: string;
}

export default function PhoneNumber({ control, propLabel, textLabel }: Props) {
  return (
    <Controller
      name={propLabel}
      control={control}
      render={({ field: { value, onChange } }) => (
        <PhoneInput
          country={"fr"}
          localization={fr}
          // coercing "value" & "data" because PhoneNumber must receive string
          value={value as string}
          onChange={(value) => onChange(value)}
        />
      )}
    />
  );
}
