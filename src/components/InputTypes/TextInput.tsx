import { TextField } from "@mui/material";

interface Props {
  label: string;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextInput = ({ label, value, onChange }: Props) => {
  return (
    <TextField label={label} name={label} value={value} onChange={onChange} />
  );
};

export default TextInput;
