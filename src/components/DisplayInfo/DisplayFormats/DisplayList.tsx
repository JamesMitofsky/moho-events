import { List, ListItem, Typography } from "@mui/material";
import { v4 as uuid4 } from "uuid";
import WrapperEmptyField from "./WrapperEmptyField";

type Props = { items: string[]; label: string };

export default function DisplayList({ items, label }: Props) {
  return (
    <WrapperEmptyField input={items}>
      <Typography>{label}</Typography>
      <List>
        {items.map((item) => {
          return <ListItem key={uuid4()}>{item}</ListItem>;
        })}
      </List>
    </WrapperEmptyField>
  );
}
