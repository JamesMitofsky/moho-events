import { SvgIconComponent } from "@mui/icons-material";
import { Stack, SvgIcon, Typography } from "@mui/material";
import Grid from "@mui/system/Unstable_Grid";
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
    <SpacedChildren additionalStyles={{ mb: 6 }}>
      <Stack direction="row" alignItems="center" gap={1}>
        <SvgIcon color="primary" component={icon} />
        <Typography color="primary" variant="h2">
          {title}
        </Typography>
      </Stack>
      <Grid container spacing={2} columnSpacing={5}>
        {children}
      </Grid>
    </SpacedChildren>
  );
};
