import { AllEventGroups, AllEventGroupPaths } from "../../utils/globalTypes";
import { UseFormRegister } from "react-hook-form";
import { TextField } from "@mui/material";
import { useContext } from "react";
import ReadOnlyContext from "../../services/ReadOnlyContext";

interface Props {
  register: UseFormRegister<AllEventGroups>;
  propLabel: AllEventGroupPaths;
  label: string;
}
export default function SimpleTextInput({ propLabel, label, register }: Props) {
  const { isReadOnly } = useContext(ReadOnlyContext);
  return (
    <TextField
      inputProps={{ readOnly: isReadOnly }}
      {...register(propLabel)}
      label={label}
    />
  );
}
