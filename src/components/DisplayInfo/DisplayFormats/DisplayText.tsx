import { Box, Typography } from "@mui/material";

interface Props {
  content: string;
  label: string;
}

export default function DisplayText({ content, label }: Props) {
  // display simply a dash if the content is empty
  return (
    <Box>
      <Typography sx={{ fontSize: 14, color: "grey" }}>{label}</Typography>
      {content.length > 0 ? (
        <Typography sx={{ fontSize: 18 }}>{content}</Typography>
      ) : (
        <Typography sx={{ fontSize: 14 }}>—</Typography>
      )}
    </Box>
  );
}
