import { AutocompleteElement } from "react-hook-form-mui";

export interface SelectProps {
  name: string;
  label: string;
  options: string[];
  multiple?: boolean;
}

export default function SelectOptions({
  name,
  options,
  label,
  multiple,
}: SelectProps) {
  return (
    <AutocompleteElement
      autocompleteProps={{ freeSolo: true }}
      multiple={multiple}
      name={name}
      options={options}
      textFieldProps={{
        placeholder: label,
      }}
    />
  );
}
