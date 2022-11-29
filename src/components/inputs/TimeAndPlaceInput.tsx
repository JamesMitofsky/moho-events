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
          <MenuItem value="entry1">Entrée 1</MenuItem>
          <MenuItem value="publicSpace">Espace Pub</MenuItem>
          <MenuItem value="vip3">VIP 3</MenuItem>
        </Select>
      </FormControl>
      <Time control={control} dataLabel={timeProp} />
    </>
  );
};
