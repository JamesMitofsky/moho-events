import GroupsIcon from "@mui/icons-material/Groups";
import {
  GeneralInfoInputs,
  ModifiedServerResponse,
} from "../../types/globalTypes";
import { TitledGroup } from "../layouts/TitledGroup";
import DisplayDate from "./DisplayFormats/DisplayDate";
import DisplayHTML from "./DisplayFormats/DisplayHTML";
import DisplayText from "./DisplayFormats/DisplayText";

type Props = GeneralInfoInputs & {
  createdBy: ModifiedServerResponse["creationDetails"]["createdBy"];
};

export default function DisplayGeneralInfo({
  associationName,
  category,
  eventName,
  numberOfQuote,
  comments,
  dateAsISO,
  createdBy,
}: Props) {
  return (
    <TitledGroup icon={GroupsIcon} title="Info Générale">
      <DisplayText content={associationName} label="Nom de la société" />

      <DisplayText content={category} label="Catégorie" />

      <DisplayText content={eventName} label="Nom de l'évènement" />

      <DisplayText content={numberOfQuote.toString()} label="Nombre de devis" />

      <DisplayText content={createdBy} label="Vendu par" />

      <DisplayDate date={dateAsISO} label="Date" />

      <DisplayHTML html={comments} label="Remarques" />
    </TitledGroup>
  );
}