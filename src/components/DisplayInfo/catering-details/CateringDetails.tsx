import { EventComponent } from "@/types/globalTypes";
import DisplayText from "../DisplayFormats/DisplayText";
import DisplayTimeRange from "../DisplayFormats/DisplayTimeRange";

export default function CateringDetails({
  billedService,
  catering,
  details,
  eventLayout,
  furnitureUsed,
  involvesRestaurant,
  numberOfPeople,
  place,
  time,
  title,
}: EventComponent) {
  return (
    <>
      <DisplayText content={title} label="Type" />
      <DisplayText content={place} label="Lieu" />
      <DisplayTimeRange
        label="Heure de début et de fin"
        startTime={time.start as string}
        endTime={time.end as string}
      />
      <DisplayText content={numberOfPeople} label="Nombre de pax" />
      <DisplayText content={catering} label="Traiteurs" />
      <DisplayText content={billedService} label="Service facturé" />
      <DisplayText content={eventLayout} label="Format" />
      <DisplayText content={furnitureUsed} label="Mobilier utilisé" />
      <DisplayText content={details} label="Détails" />
    </>
  );
}