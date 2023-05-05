import DisplayWrapper from "./WrapperCopyContent";
import WrapperEmptyField from "./WrapperEmptyField";

type Props = {
  date: string;
  label: string;
};

export default function DisplayDate({ date, label }: Props) {
  const formattedDate = new Date(date).toLocaleDateString("fr-FR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
  return (
    <WrapperEmptyField input={formattedDate}>
      <DisplayWrapper content={formattedDate} label={label} />
    </WrapperEmptyField>
  );
}
