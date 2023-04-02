import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <h1>Home, woohoo</h1>
      <Link href="/tout">List of Events</Link>
      <Link href="/creer">Create event</Link>
    </>
  );
}
