import { Box, Typography } from "@mui/material";

interface Props {
  content: string;
  label: string;
}

export default function DisplayText({ content, label }: Props) {
  return (
    <Box>
      <Typography sx={{ fontSize: 14, color: "grey" }}>{label}</Typography>
      <Typography sx={{ fontSize: 18 }}>{content}</Typography>
    </Box>
  );
}
