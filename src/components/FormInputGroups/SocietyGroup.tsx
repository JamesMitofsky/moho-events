import { SocietyInputs } from "../../utils/globalTypes";
import { societyLabels } from "../../utils/globalVars";
import { Typography } from "@mui/material";
import TextInput from "../InputTypes/TextInput";

interface Props extends SocietyInputs {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const SocietyGroup = (props: Props) => {
  return (
    <>
      <Typography variant="h3">Société</Typography>
      <TextInput
        label={societyLabels.associationName}
        value={props.associationName}
        onChange={props.onChange}
      />
    </>
  );
};
