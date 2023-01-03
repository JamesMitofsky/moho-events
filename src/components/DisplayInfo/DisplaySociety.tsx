import { Box, Typography } from "@mui/material";
import { SocietyInputs } from "../../utils/globalTypes";
import DisplayText from "./DisplayText";
import { TitledGroup } from "../Layouts/TitledGroup";
import GroupsIcon from "@mui/icons-material/Groups";

export default function DisplaySociety({
  associationName,
  category,
  eventName,
  numberOfQuote,
  soldBy,
}: SocietyInputs) {
  return (
    <TitledGroup icon={GroupsIcon} title="Société">
      <DisplayText content={associationName} label="Nom de la société" />
      <DisplayText content={category} label="Catégorie" />
      <DisplayText content={eventName} label="Nom de l'événement" />
      <DisplayText content={numberOfQuote.toString()} label="Nombre de devis" />
      <DisplayText content={soldBy} label="Vendu par" />
    </TitledGroup>
  );
}
