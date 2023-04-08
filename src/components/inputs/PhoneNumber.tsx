import { Controller, FieldPath, useFormContext } from "react-hook-form";
import fr from "react-phone-input-2/lang/fr.json";
import "react-phone-input-2/lib/material.css";
import { AllEventGroups } from "../../utilities/globalTypes";
// this import can be named anything because there is only one default export from the library
import PI from "react-phone-input-2";
const ReactPhoneInput = process.env.PROD ? (PI as any).default : PI;
interface Props {
  propLabel: FieldPath<AllEventGroups>;
}

export default function PhoneNumber({ propLabel }: Props) {
  const { control } = useFormContext();
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
