import { SvgIconComponent } from "@mui/icons-material";
import { Stack, SvgIcon, Typography } from "@mui/material";
import Grid from "@mui/system/Unstable_Grid";
import SpacedChildren from "./SpacedChildren";

export const TitledGroup = ({
  children,
  title,
  icon,
  actionButtons,
}: {
  children: React.ReactNode;
  title: string;
  icon: SvgIconComponent;
  actionButtons?: React.ReactNode;
}) => (
  <SpacedChildren additionalStyles={{ mb: 6 }}>
    <Stack direction="row" sx={{ justifyContent: "space-between" }}>
      <SpacedChildren flexDirection="row">
        <SvgIcon color="primary" component={icon} />
        <Typography color="primary" variant="h2">
          {title}
        </Typography>
      </SpacedChildren>
      {actionButtons}
    </Stack>
    <Grid container spacing={2} xs={12}>
      {children}
    </Grid>
  </SpacedChildren>
);
