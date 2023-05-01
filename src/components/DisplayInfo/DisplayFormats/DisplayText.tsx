import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { Box, IconButton, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";

interface Props {
  content: string;
  label: string;
}

export default function DisplayText({ content, label }: Props) {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  // display simply a dash if the content is empty
  return (
    <Box>
      <Typography sx={{ fontSize: 14, color: grey }}>{label}</Typography>
      {content.length > 0 ? (
        <Box
          sx={{
            backgroundColor: grey[200],
            py: 0.8,
            px: 1,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography sx={{ fontSize: 18 }}>{content}</Typography>
          <IconButton onClick={() => copyToClipboard(content)}>
            <ContentCopyIcon />
          </IconButton>
        </Box>
      ) : (
        <Typography sx={{ fontSize: 14 }}>—</Typography>
      )}
    </Box>
  );
}
