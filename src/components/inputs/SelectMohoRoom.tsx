import {
  AllEventGroups,
  AllEventGroupPaths,
  Places,
} from "../../utils/globalTypes";
import { Control } from "react-hook-form";
import SelectOptions from "./SelectOptions";

interface Props {
  control: Control<AllEventGroups>;
  propLabel: AllEventGroupPaths;
  helperText?: string;
}

export default function SelectMohoRoom(props: Props) {
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
