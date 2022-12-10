import { Typography, Autocomplete, TextField, Box } from "@mui/material";
import { Controller } from "react-hook-form";
import TimeRangePicker from "./TimeRangePicker";
interface Props {
  parentObj: string;
  register: any;
  control: any;
}

export const TimeAndPlaceInput = ({ parentObj, control }: Props) => {
  const timeProp = `${parentObj}.time`;
  const placeProp = `${parentObj}.place`;

  const locations = [
    "",
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

  const defaultLocation = locations[0];

  return (
    <>
      <Controller
        name={placeProp}
        control={control}
        defaultValue={defaultLocation}
        render={({ field: { onChange, value } }) => {
          return (
            <Autocomplete
              freeSolo
              onChange={(_, data) => onChange(data)}
              value={value}
              options={locations}
              renderInput={(params) => <TextField {...params} label="Lieu" />}
            />
          );
        }}
      />
      <TimeRangePicker control={control} dataLabel={timeProp} />
    </>
  );
};
