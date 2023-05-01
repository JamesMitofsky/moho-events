import { Link, ListItem, ListItemText } from "@mui/material";
import NextLink from "next/link";

type Props = {
  docId: string;
  associationName: string;
  numberOfPeople: string;
};

export default function LinkToEvent({
  docId,
  associationName,
  numberOfPeople,
}: Props) {
  return (
    <Link key={docId} href={`/evenement/${docId}`} component={NextLink}>
      <ListItem divider>
        <ListItemText
          primaryTypographyProps={{ fontSize: "1.4rem" }}
          primary={`${associationName}`}
          secondary={numberOfPeople && `${numberOfPeople} personnes`}
        />
      </ListItem>
    </Link>
  );
}
