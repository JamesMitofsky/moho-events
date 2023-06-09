import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { IconButton, Snackbar, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import { Box } from "@mui/system";
import { useState } from "react";

type Props = {
  label: string;
  content: string;
};

export default function WrapperCopyContent({ label, content }: Props) {
  const [open, setOpen] = useState(false);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setOpen(true);
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
          overflow: "hidden",
        }}
      >
        <Typography>{content}</Typography>
        <Box sx={{ display: "flex", alignSelf: "flex-start" }}>
          <IconButton onClick={() => copyToClipboard(content)}>
            <ContentCopyIcon />
          </IconButton>
        </Box>
      </Box>
      <Snackbar
        open={open}
        autoHideDuration={2500}
        onClose={() => setOpen(false)}
        message={`"${label}" copié!`}
      />
    </Box>
  );
}
