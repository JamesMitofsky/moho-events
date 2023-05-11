import EventsList from "@/components/EventsList";
import PageTitle from "@/components/layouts/PageTitle";

export default function PastEvents() {
  return (
    <>
      <PageTitle title="Evènements Passés" />
      <EventsList eventsFilter="past" order="desc" />
    </>
  );
}
