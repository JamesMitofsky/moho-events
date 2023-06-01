import { Typography } from "@mui/material";
import Grid from "@mui/system/Unstable_Grid";

type Props = {
  label: string;
  index: number;
  key: string | number;
  children: React.ReactNode;
};

export default function TitledItemFromArray({ label, index, children }: Props) {
  return (
    <>
      <Grid container xs={12} sx={{ mt: 2 }}>
        <Typography variant="subtitle1">
          {label} #{index + 1}
        </Typography>
      </Grid>
      {children}
    </>
  );
}
