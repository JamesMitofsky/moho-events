import { Typography, Link } from "@mui/material";
import NextLink from "next/link";

export default function HomePage() {
  return (
    <>
      <Typography variant="h1">Home, woohoo</Typography>
      <Link component={NextLink} href="/tout">
        List of Events
      </Link>
      <Link component={NextLink} href="/creer">
        Create event
      </Link>
    </>
  );
}
