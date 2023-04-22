import { Typography } from "@mui/material";
import SpacedChildren from "./SpacedChildren";

type Props = {
  label: string;
  index: number;
  listLength: number;
  key: string | number;
  children: React.ReactNode;
};

export default function TitledItemFromArray({
  label,
  index,
  listLength,
  children,
}: Props) {
  const multipleItems = listLength > 1;
  const notLastItemOfList = index < listLength - 1;
  const shouldAddMargin = multipleItems && notLastItemOfList;

  const margin = shouldAddMargin ? 5 : null;

  return (
    <SpacedChildren additionalStyles={{ mb: margin }}>
      <Typography variant="subtitle1">
        {label} #{index + 1}
      </Typography>
      {children}
    </SpacedChildren>
  );
}
