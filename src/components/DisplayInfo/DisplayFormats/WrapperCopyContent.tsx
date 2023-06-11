import { Typography } from "@mui/material";
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
      <Typography fontSize=".8rem" fontWeight={900}>
        {label}
      </Typography>
      <Box
        sx={{
          mb: 0.5,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        <Typography fontWeight={100}>{content}</Typography>
      </Box>
    </Box>
  );
}
