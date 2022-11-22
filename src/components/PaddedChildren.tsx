import { Box } from "@mui/material";

export const PaddedChildren = ({
  children,
  padding,
}: {
  children: JSX.Element[];
  padding: number;
}) => {
  return (
    <Box
      sx={{
        display: "grid",
        gap: padding,
      }}
    >
      {children}
    </Box>
  );
};
