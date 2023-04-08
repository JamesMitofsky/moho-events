import { Typography } from "@mui/material";

type Props = {
  label: string;
  index: number;
  listLength: number;
};

export default function TitledGroupSubtitle({
  label,
  index,
  listLength,
}: Props) {
  const isNotFirstItem = listLength > 0;

  const elementToReturn = isNotFirstItem ? (
    <Typography variant="subtitle2">
      {label} #{index + 1}
    </Typography>
  ) : null;

  return elementToReturn;
}
