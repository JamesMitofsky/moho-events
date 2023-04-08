import { TextField } from "@mui/material";
import { UseFormRegister } from "react-hook-form";
import {
  AllEventGroupPaths,
  AllEventGroups,
} from "../../functions/globalTypes";

interface Props {
  register: UseFormRegister<AllEventGroups>;
  propLabel: AllEventGroupPaths;
  label: string;
  type?: "number";
  registerOptions?: any;
  helperText?: string;
}
export default function SimpleTextInput({
  propLabel,
  label,
  register,
  type,
  registerOptions,
  helperText,
}: Props) {
  return (
    <TextField
      {...register(propLabel, registerOptions)}
      label={label}
      type={type}
      helperText={helperText}
      multiline
    />
  );
}
