import { Box } from "@mui/material";

export const BoxWrapper = ({ Element }: any) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        width: "100%",
        height: "100%",
      }}
    >
      {Element}
    </Box>
  );
};
