import parse from "html-react-parser";
import DisplayWrapper from "./WrapperCopyContent";
import WrapperEmptyField from "./WrapperEmptyField";

interface Props {
  html: string;
  label: string;
}

export default function DisplayHTML({ html, label }: Props) {
  const parsedHTML = parse(html) as string;
  return (
    <WrapperEmptyField input={html}>
      <DisplayWrapper content={parsedHTML} label={label} />
    </WrapperEmptyField>
  );
}
