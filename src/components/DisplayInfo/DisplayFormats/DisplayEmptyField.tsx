import { Box, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";

type Props = {
  label: string;
  input: string | string[];
  children: React.ReactNode;
};

export default function DisplayEmptyField({ label, input, children }: Props) {
  return input.length > 0 ? (
    <>{children}</>
  ) : (
    <Box sx={{ color: grey[600] }}>
      <Typography sx={{ fontSize: ".9rem", lineHeight: 1 }}>{label}</Typography>
      <Typography sx={{ fontSize: ".9rem", lineHeight: 1 }}>—</Typography>
    </Box>
  );
}
