import DeleteIcon from "@mui/icons-material/Delete";
import { Box, IconButton, Typography } from "@mui/material";
import Grid from "@mui/system/Unstable_Grid";
import { UseFieldArrayRemove } from "react-hook-form-mui";

type Props = {
  label: string;
  index: number;
  key: string | number;
  children: React.ReactNode;
  deleteFunction?: UseFieldArrayRemove;
};

export default function TitledItemFromArray({
  label,
  index,
  children,
  deleteFunction,
}: Props) {
  return (
    <>
      <Grid
        container
        xs={12}
        sx={{ mt: 2, display: "flex", justifyContent: "space-between" }}
      >
        <Typography variant="subtitle1">
          {label} #{index + 1}
        </Typography>
        {deleteFunction && index > 0 && (
          <Box sx={{ mr: 5, my: "auto" }}>
            <IconButton
              onClick={() => deleteFunction(index)}
              edge="end"
              aria-label="delete"
            >
              <DeleteIcon />
            </IconButton>
          </Box>
        )}
      </Grid>
      {children}
    </>
  );
}
