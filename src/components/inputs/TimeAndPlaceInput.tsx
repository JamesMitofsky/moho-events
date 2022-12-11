import { Autocomplete, TextField } from "@mui/material";
import TimeRangePicker from "./TimeRangePicker";
import { Controller } from "react-hook-form";

interface Props {
  parentObj: string;
  control: any;
}

export const TimeAndPlaceInput = ({ parentObj, control }: Props) => {
  const timeProp = `${parentObj}.time`;
  const placeProp = `${parentObj}.place`;

  const locations = [
    "VIP 1",
    "VIP 2",
    "VIP 3",
    "Amphi",
    "Atrium",
    "Biergarten",
    "Cube Rez de Chaussée",
    "Cube +1",
    "Experiment room",
    "Share",
    "Moholicious",
    "Imagine",
    "Conference Room (Inspire)",
    "Solve",
    "Make Room",
    "Lead",
    "Cocktail espcae (à côté du Gymnase)",
    "Gymnase",
  ];

  return (
    <>
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
    </>
  );
};
