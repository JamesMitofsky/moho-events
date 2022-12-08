import {
  Typography,
  InputLabel,
  Select,
  MenuItem,
  FormControl,
} from "@mui/material";
import Time from "./Time";

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
  return (
    <>
      <Typography>{componentTitle}</Typography>
      <FormControl fullWidth>
        <InputLabel id={placeProp}>Lieu</InputLabel>
        <Select
          defaultValue=""
          {...register(placeProp)}
          label="Lieu"
          labelId={placeProp}
        >
          <MenuItem value="vip1">VIP 1</MenuItem>
          <MenuItem value="vip2">VIP 3</MenuItem>
          <MenuItem value="vip3">VIP 2</MenuItem>
          <MenuItem value="amphi">Amphi</MenuItem>
          <MenuItem value="atrium">Atrium</MenuItem>
          <MenuItem value="biergarten">Biergarten</MenuItem>
          <MenuItem value="cube+0">Cube | Rez de Chausser</MenuItem>
          <MenuItem value="cube+1">Cube | +1</MenuItem>
          <MenuItem value="experiment-room">Experiment room</MenuItem>
          <MenuItem value="share">Share</MenuItem>
          <MenuItem value="moholicious">Moholicious</MenuItem>
          <MenuItem value="imagine">Imagine</MenuItem>
          <MenuItem value="inspire">Conference Room (Inspire)</MenuItem>
          <MenuItem value="solve">Solve</MenuItem>
          <MenuItem value="make">Make</MenuItem>
          <MenuItem value="lead">Lead</MenuItem>
          <MenuItem value="cocktail">
            Espace de Cocktail (à côté du Gymnase)
          </MenuItem>
          <MenuItem value="gymnase">Gymnase</MenuItem>
        </Select>
      </FormControl>
      <Time control={control} dataLabel={timeProp} />
    </>
  );
};
