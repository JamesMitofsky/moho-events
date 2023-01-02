import { Typography, Stack, Box, SvgIcon } from "@mui/material";
import { PaddedChildren } from "./PaddedChildren";

export const TitledGroup = ({
  children,
  title,
  icon,
}: {
  children: React.ReactNode;
  title: string;
  icon: any;
}) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <PaddedChildren padding={2}>
        <Stack direction="row" alignItems="center" gap={1}>
          <SvgIcon color="primary" component={icon} />
          <Typography color="primary" variant="h3">
            {title}
          </Typography>
        </Stack>
        {children}
      </PaddedChildren>
    </Box>
  );
};
