import { Places } from "../../functions/globalTypes";
import SelectOptions, { SelectProps } from "./SelectOptions";

export default function SelectMohoRoom(
  props: Omit<SelectProps, "options" | "textLabel">
) {
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

  return <SelectOptions {...props} options={rooms} textLabel="Lieu" />;
}
