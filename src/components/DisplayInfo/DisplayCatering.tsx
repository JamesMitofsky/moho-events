import returnStartAndEndTimes from "@/functions/returnStartAndEndTimes";
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

  function getDateWithHourAndMinuteFromISO8601(dateString: string): Date {
    const dt = new Date(dateString);
    const hour = dt.getHours();
    const minute = dt.getMinutes();
    const fixedDate = new Date(2000, 0, 1, hour, minute); // Fixed date with year, month, and day set to 2000-01-01
    return fixedDate;
  }

  const cateringsOrderedByTime = caterings.sort((a, b) => {
    const hourA = getDateWithHourAndMinuteFromISO8601(a.time.start as string);
    const hourB = getDateWithHourAndMinuteFromISO8601(b.time.start as string);

    if (hourA < hourB) return -1;
    if (hourA > hourB) return 1;
    return 0;
  });

  return (
    <TitledGroup icon={RestaurantMenuIcon} title="Restauration">
      {cateringsOrderedByTime[0]?.place ? (
        cateringsOrderedByTime.map((catering, index) => {
          const formattedTime = returnStartAndEndTimes(catering.time);

          return (
            <TitledArrayOfElements
              key={uuid4()}
              nameOfThisItem={catering.title}
              subtitle={formattedTime}
              index={index}
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
