import {
  Typography,
  FormControl,
  Autocomplete,
  TextField,
} from "@mui/material";
import Time from "./Time";

import { Controller } from "react-hook-form";

interface Props {
  componentTitle: string;
  parentObj: string;
  register: any;
  control: any;
}

export const TimeAndPlaceInput = ({
  componentTitle,
  parentObj,
  register,
  control,
}: Props) => {
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
      <Typography>{componentTitle}</Typography>
      <Controller
        name={placeProp}
        control={control}
        defaultValue={defaultLocation}
        render={({ field: { onChange, value } }) => {
          return (
            <Autocomplete
              onChange={(_, data) => onChange(data)}
              value={value}
              options={locations}
              renderInput={(params) => <TextField {...params} label="Lieu" />}
            />
          );
        }}
      />
      <Time control={control} dataLabel={timeProp} />
    </>
  );
};
