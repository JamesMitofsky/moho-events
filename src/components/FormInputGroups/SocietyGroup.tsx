import { SocietyInputs } from "../../utils/globalTypes";
import { societyLabels } from "../../utils/globalVars";
import { Typography, Box } from "@mui/material";
import TextInput from "../InputTypes/TextInput";
import { PaddedChildren } from "../PaddedChildren";

interface Props extends SocietyInputs {
  onChange: (
    e: React.ChangeEvent<HTMLInputElement>,
    inputGroup: string
  ) => void;
}

export const SocietyGroup = (props: Props) => {
  // create local function to catch form update, indicating group origin
  const updateFormData = (e: React.ChangeEvent<HTMLInputElement>) => {
    return props.onChange(e, "society");
  };

  return (
    <PaddedChildren padding={2}>
      <Typography variant="h3">Société</Typography>
      <TextInput
        label={societyLabels.associationName}
        value={props.associationName}
        onChange={updateFormData}
        name="associationName"
      />
      <TextInput
        label={societyLabels.category}
        value={props.category}
        onChange={updateFormData}
        name="category"
      />
      <TextInput
        label={societyLabels.eventName}
        value={props.eventName}
        onChange={updateFormData}
        name="eventName"
      />
      <TextInput
        label={societyLabels.eventType}
        value={props.eventType}
        onChange={updateFormData}
        name="eventType"
      />
      <TextInput
        label={societyLabels.numberOfQuote}
        value={props.numberOfQuote}
        onChange={updateFormData}
        name="numberOfQuote"
      />
      <TextInput
        label={societyLabels.soldBy}
        value={props.soldBy}
        onChange={updateFormData}
        name="soldBy"
      />
      <TextInput
        label={societyLabels.comments}
        value={props.comments}
        onChange={updateFormData}
        name="comments"
      />
    </PaddedChildren>
  );
};
