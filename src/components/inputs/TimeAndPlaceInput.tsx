import {
  AllEventGroupPaths,
  EventComponent,
  nameof,
} from "../../functions/globalTypes";
import SelectMohoRoom from "./SelectMohoRoom";
import TimeRangePicker from "./TimeRangePicker";

interface Props {
  parentObj: string;
}

export const TimeAndPlaceInput = ({ parentObj }: Props) => {
  const timeProp = `${parentObj}.${nameof<EventComponent>(
    "time"
  )}` as AllEventGroupPaths;
  const placeProp = `${parentObj}.${nameof<EventComponent>(
    "place"
  )}` as AllEventGroupPaths;

  return (
    <>
      <SelectMohoRoom propLabel={placeProp} />
      <TimeRangePicker dataLabel={timeProp} />
    </>
  );
};
