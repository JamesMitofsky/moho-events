import TimeRangePicker from "./TimeRangePicker";
import { Control } from "react-hook-form";
import {
  AllEventGroupPaths,
  AllEventGroups,
  EventComponent,
  Places,
  nameof,
} from "../../utils/globalTypes";
import SelectOptions from "./SelectOptions";

interface Props {
  parentObj: string;
  control: Control<AllEventGroups>;
}

export const TimeAndPlaceInput = ({ parentObj, control }: Props) => {
  const timeProp = `${parentObj}.${nameof<EventComponent>(
    "time"
  )} }` as AllEventGroupPaths;
  const placeProp = `${parentObj}.${nameof<EventComponent>(
    "place"
  )} }` as AllEventGroupPaths;

  const locations: Places[] = [
    "Entrée principale",
    "Salle de conférence (Inspire)",
    "Gymnase",
    "Dare",
    "Rotonde",
    "Disrupt",
    "Cube | Rez de Chaussée",
    "Cube | +1",
    "VIP 1",
    "VIP 2",
    "VIP 3",
    "4 Rue de la Gare",
    "Amphi",
    "Atrium",
    "Biergarten",
    "Experiment",
    "Share",
    "Moholicious",
    "Imagine",
    "Solve",
    "Make",
    "Lead",
    "Cocktail espcae (à côté du Gymnase)",
  ];

  return (
    <>
      <SelectOptions
        options={locations}
        control={control}
        propLabel={placeProp}
        textLabel="Lieu"
      />

      <TimeRangePicker control={control} dataLabel={timeProp} />
    </>
  );
};
