import { FormControl, InputLabel, Input } from "@mui/material";

interface Props {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextInput = ({ label, value, onChange }: Props) => {
  return (
    <FormControl variant="standard">
      <InputLabel htmlFor="component-simple">{label}</InputLabel>
      <Input id="component-simple" value={value} onChange={onChange} />
    </FormControl>
  );
};

export default TextInput;
