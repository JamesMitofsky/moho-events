import { SvgIconComponent } from "@mui/icons-material";
import { Stack, SvgIcon, Typography } from "@mui/material";
import SpacedChildren from "./SpacedChildren";

export const TitledGroup = ({
  children,
  title,
  icon,
}: {
  children: React.ReactNode;
  title: string;
  icon: SvgIconComponent;
}) => {
  return (
    <SpacedChildren>
      <Stack direction="row" alignItems="center" gap={1}>
        <SvgIcon color="primary" component={icon} />
        <Typography color="primary" variant="h2">
          {title}
        </Typography>
      </Stack>
      {children}
    </SpacedChildren>
  );
};
