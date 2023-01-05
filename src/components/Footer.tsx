import { Box, Link, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box sx={{ pt: 3, pb: 5, textAlign: "center" }}>
      <Typography variant="body2" color="text.secondary" align="center">
        Fait avec ☕️ par{" "}
        <Link target={"_blank"} href="https://github.com/JamesMitofsky/">
          James Mitofsky
        </Link>
      </Typography>
    </Box>
  );
}
