import { Card, CardContent } from "@mui/material";
import AddButton from "../buttons/AddButton";
import SpacedChildren from "./SpacedChildren";

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
        <SpacedChildren>
          {children}
          <AddButton onClick={handleAddItem} label={addLabel} />
        </SpacedChildren>
      </CardContent>
    </Card>
  );
}
