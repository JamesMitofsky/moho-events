import { Typography } from "@mui/material";

interface Props {
  header: string;
  children: React.ReactNode;
}

const InputGroup = ({ header, children }: Props) => {
  return (
    <>
      <Typography variant="h3">{header}</Typography>
      {children}
    </>
  );
};

export default InputGroup;
