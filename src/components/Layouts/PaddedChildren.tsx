import { Box } from "@mui/material";
import React from "react";

export const PaddedChildren = ({
  children,
  padding,
}: {
  children: JSX.Element[] | JSX.Element | React.ReactNode;
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
