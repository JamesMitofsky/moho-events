import TimeRangePicker from "./TimeRangePicker";
import { Control } from "react-hook-form";
import { Places } from "../../utils/globalTypes";
import SelectOptions from "./SelectOptions";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

interface Props {
  parentObj: string;
  control: Control;
}

export const TimeAndPlaceInput = ({ parentObj, control }: Props) => {
  const timeProp = `${parentObj}.time`;
  const placeProp = `${parentObj}.place`;

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
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <SelectOptions
        options={locations}
        control={control}
        propLabel={placeProp}
        textLabel="Lieu"
      />

      <TimeRangePicker control={control} dataLabel={timeProp} />
    </LocalizationProvider>
  );
};
