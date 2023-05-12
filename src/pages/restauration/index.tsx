import ListOfEventsWithCatering from "@/components/DisplayInfo/catering-details/ListOfEventsWithCatering";
import PageTitle from "@/components/layouts/PageTitle";

export default function AllRestaurationEvents() {
  return (
    <>
      <PageTitle title="Restauration" />
      <ListOfEventsWithCatering eventsFilter="upcoming" />
    </>
  );
}
