import DisplayEmptyField from "./DisplayEmptyField";
import DisplayWrapper from "./DisplayWrapper";

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
    <DisplayEmptyField label={label} input={formattedDate}>
      <DisplayWrapper content={formattedDate} label={label} />
    </DisplayEmptyField>
  );
}
