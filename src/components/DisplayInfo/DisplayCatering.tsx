import { ProgramInputs } from "@/types/globalTypes";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import { Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import Grid from "@mui/system/Unstable_Grid";
import { v4 as uuid4 } from "uuid";
import { TitledGroup } from "../layouts/TitledGroup";
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
            <>
              <Grid xs={12}>
                <Typography component="h2" variant="h3">
                  {catering.title}
                </Typography>
              </Grid>
              <CateringDetails key={uuid4()} {...catering} />
              <Grid mb={5} />
            </>
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
