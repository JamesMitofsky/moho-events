import {
  TextField,
  Typography,
  InputLabel,
  Select,
  MenuItem,
  FormControl,
} from "@mui/material";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";

export const TimeAndPlaceInput = ({
  componentTitle,
  parentObj,
  register,
}: {
  componentTitle: string;
  parentObj: string;
  register: any;
}) => {
  const timeProp = `${parentObj}.time`;
  const placeProp = `${parentObj}.place`;
  return (
    <>
      <Typography>{componentTitle}</Typography>
      <FormControl fullWidth>
        <InputLabel id={placeProp}>Lieu</InputLabel>
        <Select {...register(placeProp)} label="Lieu" labelId={placeProp}>
          <MenuItem value="entry1">Entrée 1</MenuItem>
          <MenuItem value="publicSpace">Espace Pub</MenuItem>
          <MenuItem value="vip3">VIP 3</MenuItem>
        </Select>
      </FormControl>
      <TimePicker
        {...register(timeProp)}
        label="Heure"
        renderInput={(params) => <TextField {...params} />}
      />
    </>
  );
};
