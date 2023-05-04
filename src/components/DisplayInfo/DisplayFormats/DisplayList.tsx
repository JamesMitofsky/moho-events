import { List, ListItem, Typography } from "@mui/material";
import DisplayEmptyField from "./DisplayEmptyField";

type Props = { items: string[]; label: string };

export default function DisplayList({ items, label }: Props) {
  return (
    <DisplayEmptyField label={label} input={items}>
      <Typography>{label}</Typography>
      <List>
        {items.map((item) => {
          return <ListItem>{item}</ListItem>;
        })}
      </List>
    </DisplayEmptyField>
  );
}
