import { Typography } from "@mui/material";

type Props = {
  label: string;
  index: number;
  listLength: number;
  key: string | number;
  children: React.ReactNode;
};

export default function TitledArrayOfElements({
  label,
  index,
  listLength,
  children,
}: Props) {
  const isNotFirstItem = listLength > 0;

  return (
    <>
      {isNotFirstItem ? (
        <Typography variant="subtitle2">
          {label} #{index + 1}
        </Typography>
      ) : null}
      {children}
    </>
  );
}
