import { EventComponent } from "@/types/globalTypes";
import DisplayList from "../DisplayFormats/DisplayList";
import DisplayText from "../DisplayFormats/DisplayText";
import DisplayTimeRange from "../DisplayFormats/DisplayTimeRange";

export default function CateringDetails({
  billedService,
  catering,
  details,
  eventLayout,
  furnitureUsed,
  cateringComments,
  numberOfPeople,
  place,
  time,
  title,
  membership,
}: EventComponent) {
  return (
    <>
      <DisplayList items={place} label="Lieu" />
      <DisplayTimeRange
        label="Heure de début et de fin"
        startTime={time.start as string}
        endTime={time.end as string}
      />
      <DisplayText content={numberOfPeople} label="Nombre de personnes" />
      <DisplayList items={catering} label="Traiteurs" />
      <DisplayText content={details} label="Détails" />
      <DisplayText content={billedService} label="Service facturé" />
      <DisplayText content={eventLayout} label="Format" />
      <DisplayText content={furnitureUsed} label="Mobilier utilisé" />
      <DisplayText content={membership} label="Prix / forfait" />
      <DisplayText content={cateringComments} label="Remarques" />
    </>
  );
}
