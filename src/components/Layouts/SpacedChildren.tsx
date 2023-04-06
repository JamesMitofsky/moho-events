import { Box } from "@mui/material";

type SpacedChildrenProps = {
  children: React.ReactNode;
  flexDirection?: "row" | "column";
};

export default function SpacedChildren({
  children,
  flexDirection = "column",
}: SpacedChildrenProps) {
  return <Box sx={{ display: "flex", gap: 2, flexDirection }}>{children}</Box>;
}
