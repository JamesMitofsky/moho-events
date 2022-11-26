import { TextField, Typography } from "@mui/material";
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
  const placeProp = `${parentObj}.location`;
  return (
    <>
      <Typography>{componentTitle}</Typography>
      <TextField label="Lieu" {...register(placeProp)} />
      <TimePicker
        {...register(timeProp)}
        label="Heure"
        renderInput={(params) => <TextField {...params} />}
      />
    </>
  );
};
