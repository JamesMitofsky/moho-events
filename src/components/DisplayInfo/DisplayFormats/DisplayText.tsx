import DisplayWrapper from "./WrapperCopyContent";
import WrapperEmptyField from "./WrapperEmptyField";

interface Props {
  content: string;
  label: string;
}

export default function DisplayText({ content, label }: Props) {
  return (
    <WrapperEmptyField label={label} input={content}>
      <DisplayWrapper content={content} label={label} />
    </WrapperEmptyField>
  );
}
