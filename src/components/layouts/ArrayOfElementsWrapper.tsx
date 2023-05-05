import { Card, CardContent } from "@mui/material";
import Grid from "@mui/system/Unstable_Grid/Grid";
import AddButton from "../buttons/AddButton";

type Props = {
  children: React.ReactNode;
  handleAddItem: () => void;
  addLabel: string;
};

/** Should wrap an array of elements given from use of the useFieldArray hook from react-hook-form */
export default function ArrayOfElementsWrapper({
  children,
  addLabel,
  handleAddItem,
}: Props) {
  return (
    <Card>
      <CardContent>
        <Grid container spacing={2}>
          {children}
          <Grid xs={12} sx={{ display: "flex", justifyContent: "flex-end" }}>
            <AddButton onClick={handleAddItem} label={addLabel} />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
