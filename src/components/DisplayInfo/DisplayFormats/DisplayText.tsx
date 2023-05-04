import DisplayEmptyField from "./DisplayEmptyField";
import DisplayWrapper from "./DisplayWrapper";

interface Props {
  content: string;
  label: string;
}

export default function DisplayText({ content, label }: Props) {
  return (
    <DisplayEmptyField label={label} input={content}>
      <DisplayWrapper content={content} label={label} />
    </DisplayEmptyField>
  );
}
