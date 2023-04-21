import ImportContactsIcon from "@mui/icons-material/ImportContacts";
import { DatePickerElement } from "react-hook-form-mui";
import ControlledTextField from "../inputs/ControlledTextField";
import TextEditor from "../inputs/TextEditor";
import { TitledGroup } from "../layouts/TitledGroup";

export default function GeneralInfoGroup() {
  return (
    <TitledGroup icon={ImportContactsIcon} title={"Info Général"}>
      <ControlledTextField
        fullWidth
        label="Nom de la société"
        name="generalInfo.associationName"
      />
      <ControlledTextField
        fullWidth
        label="Catégorie"
        name="generalInfo.category"
      />
      <ControlledTextField
        fullWidth
        label="Nom de l'évènement"
        name="generalInfo.eventName"
      />
      <ControlledTextField
        fullWidth
        label="Type d'évènement"
        name="generalInfo.eventType"
      />
      <ControlledTextField
        label="Numéro de devis"
        name="generalInfo.numberOfQuote"
        type="number"
      />
      <ControlledTextField
        fullWidth
        label="Nombre de pax"
        name="generalInfo.numberOfPeople"
      />
      <DatePickerElement
        label="Date d'évènement"
        name="generalInfo.eventDate"
      />
      <TextEditor objLabel="generalInfo.comments" displayLabel="Remarques" />
    </TitledGroup>
  );
}
