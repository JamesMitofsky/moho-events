import ImportContactsIcon from "@mui/icons-material/ImportContacts";
import { DatePickerElement, TextFieldElement } from "react-hook-form-mui";
import TextEditor from "../inputs/TextEditor";
import { TitledGroup } from "../layouts/TitledGroup";

export default function GeneralInfoGroup() {
  return (
    <TitledGroup icon={ImportContactsIcon} title={"Info Général"}>
      <TextFieldElement
        fullWidth
        label="Nom de la société"
        name="generalInfo.associationName"
        required
      />
      <TextFieldElement
        fullWidth
        label="Catégorie"
        name="generalInfo.category"
      />
      <TextFieldElement
        fullWidth
        label="Nom de l'évènement"
        name="generalInfo.eventName"
      />
      <TextFieldElement
        fullWidth
        label="Type d'évènement"
        name="generalInfo.eventType"
      />
      <TextFieldElement
        fullWidth
        label="Numéro de devis"
        name="generalInfo.numberOfQuote"
        type="number"
      />
      <TextFieldElement
        fullWidth
        label="Nombre de pax"
        name="generalInfo.numberOfPeople"
      />
      <DatePickerElement
        required
        label="Date d'évènement"
        name="generalInfo.dateAsISO"
        disablePast
      />
      <TextEditor objLabel="generalInfo.comments" displayLabel="Remarques" />
    </TitledGroup>
  );
}
