import ImportContactsIcon from "@mui/icons-material/ImportContacts";
import { TextFieldElement } from "react-hook-form-mui";
import ControlledDate from "../inputs/ControlledDate";
import TextEditor from "../inputs/TextEditor";
import { TitledGroup } from "../layouts/TitledGroup";

export default function GeneralInfoGroup() {
  return (
    <TitledGroup icon={ImportContactsIcon} title={"Info Général"}>
      <TextFieldElement
        fullWidth
        label="Nom de la société"
        name="generalInfo.associationName"
      />
      <TextFieldElement
        fullWidth
        label="Catégorie"
        name="generalInfo.category"
      />
      <TextFieldElement
        fullWidth
        label="Nom de l'événement"
        name="generalInfo.eventName"
      />
      <TextFieldElement
        fullWidth
        label="Type d'événement"
        name="generalInfo.eventType"
      />
      <TextFieldElement
        fullWidth
        label="Numéro de devis"
        name="generalInfo.numberOfQuote"
        type="number"
      />
      <TextFieldElement fullWidth label="Vendu par" name="generalInfo.soldBy" />
      <TextFieldElement
        fullWidth
        label="Nombre de pax"
        name="program.numberOfPeople"
      />
      <ControlledDate
        dataLabel="generalInfo.eventDate"
        textLabel="Date d'événement"
      />
      <TextEditor objLabel="generalInfo.comments" displayLabel="Remarques" />
    </TitledGroup>
  );
}
