import { ProgramInputs } from "@/types/globalTypes";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import { Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import Grid from "@mui/system/Unstable_Grid";
import { v4 as uuid4 } from "uuid";
import { TitledGroup } from "../layouts/TitledGroup";
import TitledArrayOfElements from "../layouts/TitledItemFromArray";
import CateringDetails from "./catering-details/CateringDetails";

export default function DisplayCatering({
  events,
}: Pick<ProgramInputs, "events">) {
  const caterings = events.flatMap((event) => {
    if (event.involvesRestaurant) return [event];
    return [];
  });

  console.log("caterings", caterings);

  return (
    <TitledGroup icon={RestaurantMenuIcon} title="Restauration">
      {caterings[0]?.place ? (
        caterings.map((catering, index) => {
          return (
            <TitledArrayOfElements
              key={uuid4()}
              label="Resturation"
              index={index}
              listLength={caterings.length}
            >
              <CateringDetails key={uuid4()} {...catering} />
            </TitledArrayOfElements>
          );
        })
      ) : (
        <Grid xs={12}>
          <Typography sx={{ color: grey[600], fontSize: 12 }}>
            Acune partie de restauration
          </Typography>
        </Grid>
      )}
    </TitledGroup>
  );
}
