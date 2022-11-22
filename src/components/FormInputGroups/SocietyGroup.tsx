import { SocietyInputs } from "../../utils/globalTypes";
import { societyLabels } from "../../utils/globalVars";
import { Typography, Box } from "@mui/material";
import TextInput from "../InputTypes/TextInput";
import { PaddedChildren } from "../PaddedChildren";

interface Props extends SocietyInputs {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const SocietyGroup = (props: Props) => {
  return (
    <PaddedChildren padding={2}>
      <Typography variant="h3">Société</Typography>
      <TextInput
        label={societyLabels.associationName}
        value={props.associationName}
        onChange={props.onChange}
      />
      <TextInput
        label={societyLabels.category}
        value={props.category}
        onChange={props.onChange}
      />
      <TextInput
        label={societyLabels.eventName}
        value={props.eventName}
        onChange={props.onChange}
      />
      <TextInput
        label={societyLabels.eventType}
        value={props.eventType}
        onChange={props.onChange}
      />
      <TextInput
        label={societyLabels.numberOfQuote}
        value={props.numberOfQuote}
        onChange={props.onChange}
      />
      <TextInput
        label={societyLabels.soldBy}
        value={props.soldBy}
        onChange={props.onChange}
      />
      <TextInput
        label={societyLabels.comments}
        value={props.comments}
        onChange={props.onChange}
      />
    </PaddedChildren>
  );
};
