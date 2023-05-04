import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { IconButton, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import { Box } from "@mui/system";

type Props = {
  label: string;
  content: string;
};

export default function DisplayWrapper({ label, content }: Props) {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };
  return (
    <Box>
      <Typography fontSize=".8rem">{label}</Typography>
      <Box
        sx={{
          backgroundColor: grey[100],
          px: 1,
          py: 0.5,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography>{content}</Typography>
        <Box sx={{ display: "flex", alignSelf: "flex-start" }}>
          <IconButton onClick={() => copyToClipboard(content)}>
            <ContentCopyIcon />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
}
