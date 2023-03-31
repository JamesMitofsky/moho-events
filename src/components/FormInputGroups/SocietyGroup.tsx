import { TextField } from "@mui/material";
import { TitledGroup } from "../layouts/TitledGroup";
import TextEditor from "../TextEditor";
import { Control, UseFormRegister } from "react-hook-form";
import { AllEventGroups } from "../../utilities/globalTypes";
import GroupsIcon from "@mui/icons-material/Groups";
import SimpleTextInput from "../inputs/SimpleTextInput";
import { FormContainer, TextFieldElement } from "react-hook-form-mui";
import SpacedChildren from "../layouts/SpacedChildren";

interface Props {
  control: Control<AllEventGroups>;
}

export const SocietyGroup = ({ control }: Props) => {
  return (
    <TitledGroup icon={GroupsIcon} title={"Société"}>
      <TextFieldElement
        fullWidth
        label="Nom de la société"
        name="something-here"
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
      <TextEditor
        objLabel="society.comments"
        displayLabel="Remarques"
        control={control}
      />
    </TitledGroup>
  );
};
