import { Autocomplete, TextField } from "@mui/material";
import TimeRangePicker from "./TimeRangePicker";
import { Controller } from "react-hook-form";
import { Places } from "../../utils/globalTypes";

import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

interface Props {
  parentObj: string;
  control: any;
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
      <Controller
        name={placeProp}
        control={control}
        render={({ field: { value, onChange } }) => (
          <Autocomplete
            onChange={(_, data) => onChange(data)}
            value={value}
            multiple
            freeSolo
            options={locations}
            renderInput={(params) => <TextField {...params} label="Lieu" />}
          />
        )}
      />

      <TimeRangePicker control={control} dataLabel={timeProp} />
    </LocalizationProvider>
  );
};
