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
    { roomName: "VIP 1" },
    { roomName: "VIP 2" },
    { roomName: "VIP 3" },
    { roomName: "Amphi" },
    { roomName: "Atrium" },
    { roomName: "Biergarten" },
    { roomName: "Cube Rez de Chaussée" },
    { roomName: "Cube +1" },
    { roomName: "Experiment room" },
    { roomName: "Share" },
    { roomName: "Moholicious" },
    { roomName: "Imagine" },
    { roomName: "Conference Room (Inspire)" },
    { roomName: "Solve" },
    { roomName: "Make Room" },
    { roomName: "Lead" },
    { roomName: "Cocktail espcae (à côté du Gymnase)" },
    { roomName: "Gymnase" },
  ];
  return (
    <>
      <Typography>{componentTitle}</Typography>
      <Controller
        control={control}
        name={placeProp}
        render={({ field }) => (
          <Autocomplete
            freeSolo
            defaultValue={field.value}
            value={field.value}
            onChange={(e, value) => field.onChange(value)}
            options={locations}
            getOptionLabel={(option) => option.roomName}
            renderInput={(params) => <TextField {...params} label="Lieu" />}
          />
        )}
      />
      <Time control={control} dataLabel={timeProp} />
    </>
  );
};
