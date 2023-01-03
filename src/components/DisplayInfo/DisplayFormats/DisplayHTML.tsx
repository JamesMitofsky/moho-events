import { Box, Typography } from "@mui/material";
import parse from "html-react-parser";

interface Props {
  html: string;
  label: string;
}

export default function DisplayHTML({ html, label }: Props) {
  // display simply a dash if the content is empty

  const parsedHTML = parse(html);
  return (
    <Box>
      <Typography sx={{ fontSize: 14, color: "grey" }}>{label}</Typography>
      {html.length > 0 ? (
        <Typography
          sx={{
            fontSize: 14,
            backgroundColor: "#f2f5f5",
            borderRadius: 1,
            px: 2,
            py: 1,
          }}
        >
          {parsedHTML}
        </Typography>
      ) : (
        <Typography sx={{ fontSize: 14 }}>—</Typography>
      )}
    </Box>
  );
}
