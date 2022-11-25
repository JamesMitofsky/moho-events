import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { PaddedChildren } from "./PaddedChildren";

export const TitledGroup = ({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <PaddedChildren padding={2}>
        <Typography variant="h3">{title}</Typography>
        {children}
      </PaddedChildren>
    </Box>
  );
};
