import { ProgramInputs } from "@/types/globalTypes";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import { v4 as uuid4 } from "uuid";
import { TitledGroup } from "../layouts/TitledGroup";
import CateringDetails from "./catering-details/CateringDetails";

export default function DisplayCatering({
  events,
}: Pick<ProgramInputs, "events">) {
  const caterings = events.flatMap((event) => {
    if (event.involvesRestaurant) return [];
    return [event];
  });

  const allCateringGroups = caterings.map((catering) => (
    <CateringDetails key={uuid4()} {...catering} />
  ));

  return (
    <TitledGroup icon={RestaurantMenuIcon} title="Restauration">
      {allCateringGroups}
    </TitledGroup>
  );
}
