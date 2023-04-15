import { Card, CardContent, Typography } from "@mui/material";
import SpacedChildren from "./SpacedChildren";

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
    <Card>
      <CardContent>
        <SpacedChildren>
          <Typography variant="subtitle1">
            {label} #{index + 1}
          </Typography>
          {children}
        </SpacedChildren>
      </CardContent>
    </Card>
  );
}
