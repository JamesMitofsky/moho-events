import parse from "html-react-parser";
import DisplayEmptyField from "./DisplayEmptyField";
import DisplayWrapper from "./DisplayWrapper";

interface Props {
  html: string;
  label: string;
}

export default function DisplayHTML({ html, label }: Props) {
  const parsedHTML = parse(html) as string;
  return (
    <DisplayEmptyField input={html} label={label}>
      <DisplayWrapper content={parsedHTML} label={label} />
    </DisplayEmptyField>
  );
}
