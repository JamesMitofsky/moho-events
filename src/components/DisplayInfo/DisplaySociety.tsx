import GroupsIcon from "@mui/icons-material/Groups";
import { GeneralInfoInputs } from "../../types/globalTypes";
import { TitledGroup } from "../layouts/TitledGroup";
import DisplayHTML from "./DisplayFormats/DisplayHTML";
import DisplayText from "./DisplayFormats/DisplayText";

export default function DisplaySociety({
  associationName,
  category,
  eventName,
  numberOfQuote,
  soldBy,
  comments,
}: GeneralInfoInputs) {
  return (
    <TitledGroup icon={GroupsIcon} title="Société">
      <DisplayText content={associationName} label="Nom de la société" />
      <DisplayText content={category} label="Catégorie" />
      <DisplayText content={eventName} label="Nom de l'évènement" />
      {/* <DisplayText content={numberOfQuote.toString()} label="Nombre de devis" /> */}
      <DisplayText content={soldBy} label="Vendu par" />
      <DisplayHTML html={comments} label="Remarques" />
    </TitledGroup>
  );
}
