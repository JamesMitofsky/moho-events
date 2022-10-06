import { TextField } from "@mui/material";

interface Props {
  label: string;
  value: any;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextInput = ({ label, value, name, onChange }: Props) => {
  return (
    <TextField label={label} name={name} value={value} onChange={onChange} />
  );
};

export default TextInput;
