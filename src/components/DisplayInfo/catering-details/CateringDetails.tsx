import { EventComponent } from "@/types/globalTypes";
import DisplayList from "../DisplayFormats/DisplayList";
import DisplayText from "../DisplayFormats/DisplayText";

export default function CateringDetails({
  billedService,
  catering,
  details,
  eventLayout,
  furnitureUsed,
  cateringComments,
  numberOfPeople,
  place,
  membership,
}: EventComponent) {
  return (
    <>
      <DisplayList items={place} label="Lieu" />
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
