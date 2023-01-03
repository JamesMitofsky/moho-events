import { Box, Typography } from "@mui/material";

interface Props {
  content: string;
  label: string;
}

export default function DisplayText({ content, label }: Props) {
  return (
    <Box>
      <Typography sx={{ fontSize: 13, color: "grey" }} variant="h4">
        {label}
      </Typography>
      <Typography variant="body1">{content}</Typography>
    </Box>
  );
}
