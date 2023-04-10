import GroupsIcon from "@mui/icons-material/Groups";
import { TextFieldElement } from "react-hook-form-mui";
import TextEditor from "../inputs/TextEditor";
import { TitledGroup } from "../layouts/TitledGroup";

export default function SocietyGroup() {
  return (
    <TitledGroup icon={GroupsIcon} title={"Société"}>
      <TextFieldElement
        fullWidth
        label="Nom de la société"
        name="society.associationName"
      />
      <TextFieldElement fullWidth label="Catégorie" name="society.category" />
      <TextFieldElement
        fullWidth
        label="Nom de l'événement"
        name="society.eventName"
      />
      <TextFieldElement
        fullWidth
        label="Type d'événement"
        name="society.eventType"
      />
      <TextFieldElement
        fullWidth
        label="Numéro de devis"
        name="society.numberOfQuote"
        type="number"
      />
      <TextFieldElement fullWidth label="Vendu par" name="society.soldBy" />
      <TextEditor objLabel="society.comments" displayLabel="Remarques" />
    </TitledGroup>
  );
}
