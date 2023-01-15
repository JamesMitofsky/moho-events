import { Controller, Control, FieldPath } from "react-hook-form";
import { AllEventGroups } from "../../utils/globalTypes";
import "react-phone-input-2/lib/material.css";
import fr from "react-phone-input-2/lang/fr.json";
// this import can be named anything because there is only one default export from the library
import PI from "react-phone-input-2";
const ReactPhoneInput = import.meta.env.PROD ? (PI as any).default : PI;
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
        <ReactPhoneInput
          country={"fr"}
          localization={fr}
          // coercing "value" & "data" because PhoneNumber must receive string
          value={String(value)}
          // @ts-ignore
          onChange={(value) => onChange(value)}
        />
      )}
    />
  );
}
