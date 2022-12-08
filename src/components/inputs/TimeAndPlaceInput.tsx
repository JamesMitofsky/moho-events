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
      <Typography>{componentTitle}</Typography>
      <FormControl fullWidth>
        <Controller
          control={control}
          name={placeProp}
          render={({ field }) => (
            <Autocomplete
              disablePortal
              freeSolo
              {...field}
              options={locations}
              renderInput={(params) => <TextField {...params} label="Lieu" />}
            />
          )}
        />
      </FormControl>
      <Time control={control} dataLabel={timeProp} />
    </>
  );
};
