import { useFormContext } from "react-hook-form-mui";

export default function useConvertTimeToISO() {
  const { setValue } = useFormContext();

  const convertTime = (newValue: any, propertyName: string) => {
    setValue(propertyName, (newValue as Date).toISOString());
  };

  return convertTime;
}
