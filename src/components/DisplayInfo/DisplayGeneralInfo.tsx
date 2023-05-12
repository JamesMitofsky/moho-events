import GroupsIcon from "@mui/icons-material/Groups";
import {
  GeneralInfoInputs,
  ModifiedServerResponse,
} from "../../types/globalTypes";
import EditButton from "../buttons/EditButton";
import { TitledGroup } from "../layouts/TitledGroup";
import DisplayDate from "./DisplayFormats/DisplayDate";
import DisplayEmptyFields from "./DisplayFormats/DisplayEmptyFields";
import DisplayText from "./DisplayFormats/DisplayText";

type Props = GeneralInfoInputs & {
  createdBy: ModifiedServerResponse["creationDetails"]["createdBy"];
} & { id: string };

export default function DisplayGeneralInfo(props: Props) {
  const {
    associationName,
    category,
    eventName,
    numberOfQuote,
    comments,
    dateAsISO,
    createdBy,
    id,
  } = props;

  return (
    <TitledGroup
      actionButtons={<EditButton eventId={id} />}
      icon={GroupsIcon}
      title="Info Générale"
    >
      <DisplayText content={associationName} label="Nom de la société" />

      <DisplayText content={category} label="Catégorie" />

      <DisplayText content={eventName} label="Nom de l'évènement" />

      <DisplayText content={numberOfQuote.toString()} label="Nombre de devis" />

      <DisplayText content={createdBy} label="Vendu par" />

      <DisplayDate date={dateAsISO} label="Date" />

      <DisplayText content={comments} label="Remarques" />

      <DisplayEmptyFields fields={props} sectionName="generalInfo" />
    </TitledGroup>
  );
}
