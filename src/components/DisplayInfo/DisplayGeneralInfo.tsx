import GroupsIcon from "@mui/icons-material/Groups";
import { GeneralInfoInputs } from "../../types/globalTypes";
import { TitledGroup } from "../layouts/TitledGroup";
import DisplayHTML from "./DisplayFormats/DisplayHTML";
import DisplayText from "./DisplayFormats/DisplayText";

export default function DisplayGeneralInfo({
  associationName,
  category,
  eventName,
  numberOfQuote,
  comments,
}: GeneralInfoInputs) {
  return (
    <TitledGroup icon={GroupsIcon} title="Société">
      <DisplayText content={associationName} label="Nom de la société" />
      <DisplayText content={category} label="Catégorie" />
      <DisplayText content={eventName} label="Nom de l'évènement" />
      <DisplayText content={numberOfQuote} label="Nombre de devis" />
      <DisplayHTML html={comments} label="Remarques" />
    </TitledGroup>
  );
}
