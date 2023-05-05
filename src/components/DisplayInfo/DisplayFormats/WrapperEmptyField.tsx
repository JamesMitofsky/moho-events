import { Box, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import Grid from "@mui/system/Unstable_Grid";

type Props = {
  label: string;
  input: string | string[];
  children: React.ReactNode;
};

export default function WrapperEmptyField({ label, input, children }: Props) {
  return (
    <Grid xs={12} md={6}>
      {input.length > 0 ? (
        <>{children}</>
      ) : (
        <Box sx={{ color: grey[600] }}>
          <Typography sx={{ fontSize: ".9rem", lineHeight: 1 }}>
            {label}
          </Typography>
          <Typography sx={{ fontSize: ".9rem", lineHeight: 1 }}>—</Typography>
        </Box>
      )}
    </Grid>
  );
}
