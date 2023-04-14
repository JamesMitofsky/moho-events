import { Box, SxProps, Theme } from "@mui/material";

type SpacedChildrenProps = {
  children: React.ReactNode;
  flexDirection?: "row" | "column";
  additionalStyles?: SxProps<Theme>;
};

export default function SpacedChildren({
  children,
  flexDirection = "column",
  additionalStyles,
}: SpacedChildrenProps) {
  return (
    <Box sx={{ display: "flex", gap: 2, flexDirection, ...additionalStyles }}>
      {children}
    </Box>
  );
}
