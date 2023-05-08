import { EventComponent } from "@/types/globalTypes";
import DisplayText from "../DisplayFormats/DisplayText";

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
  return <DisplayText content={place} label="Lieu" />;
}
