import DeleteIcon from "@mui/icons-material/Delete";
import { Box, Card, CardContent, CardHeader, IconButton } from "@mui/material";
import Grid from "@mui/system/Unstable_Grid";
import { UseFieldArrayRemove } from "react-hook-form-mui";

/**
 * @param nameOfThisItem is used to determine the label of the item
 * @param typeOfItem is a backup if nameOfThisItem doesn't exist. It is used to determine the label of the item. eg. Contact
 */
type Props = {
  index: number;
  key: string | number;
  children: React.ReactNode;
  deleteFunction?: UseFieldArrayRemove;
} & (
  | { typeOfItem: string; nameOfThisItem?: never }
  | { typeOfItem?: never; nameOfThisItem: string }
);

export default function TitledItemFromArray({
  index,
  children,
  deleteFunction,
  typeOfItem,
  nameOfThisItem,
}: Props) {
  const fallBackLabel = typeOfItem + " #" + (index + 1).toString();
  const label = nameOfThisItem ? nameOfThisItem : fallBackLabel;

  return (
    <Grid sx={{ mt: 2 }} xs={12}>
      <Card>
        <Grid
          container
          xs={12}
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <CardHeader title={label} />
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
        <CardContent>
          <Grid container xs={12}>
            {children}
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  );
}
