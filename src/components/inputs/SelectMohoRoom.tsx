import { Places } from "../../types/globalTypes";
import SelectOptions, { SelectProps } from "./SelectOptions";

export default function SelectMohoRoom({
  name,
  multiple,
}: Pick<SelectProps, "multiple" | "name">) {
  const rooms: Places[] = [
    "Entrée principale",
    "Salle de conférence (Inspire)",
    "Gymnase",
    "Dare",
    "Rotonde",
    "Disrupt",
    "Cube | Rez de Chaussée",
    "Cube | +1",
    "VIP 1",
    "VIP 2",
    "VIP 3",
    "4 Rue de la Gare",
    "Amphi",
    "Atrium",
    "Biergarten",
    "Experiment",
    "Share",
    "Moholicious",
    "Imagine",
    "Solve",
    "Make",
    "Lead",
    "Cocktail espcae (à côté du Gymnase)",
  ];

  return (
    <SelectOptions
      name={name}
      multiple={multiple}
      options={rooms}
      label="Lieu"
    />
  );
}
