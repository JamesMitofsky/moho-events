import { TextField } from "@mui/material";
import { TitledGroup } from "../Layouts/TitledGroup";
import TextEditor from "../TextEditor";
import { Control, UseFormRegister } from "react-hook-form";
import { AllEventGroups } from "../../utilities/globalTypes";
import GroupsIcon from "@mui/icons-material/Groups";
import SimpleTextInput from "../inputs/SimpleTextInput";

interface Props {
  register: UseFormRegister<AllEventGroups>;
  control: Control<AllEventGroups>;
}

export const SocietyGroup = ({ register, control }: Props) => {
  return (
    <TitledGroup icon={GroupsIcon} title={"Société"}>
      <SimpleTextInput
        label="Nom de la société"
        propLabel="society.associationName"
        register={register}
      />
      <SimpleTextInput
        label="Catégorie"
        propLabel="society.category"
        register={register}
      />
      <SimpleTextInput
        label="Nom de l'événement"
        propLabel="society.eventName"
        register={register}
      />
      <SimpleTextInput
        label="Type d'événement"
        propLabel="society.eventType"
        register={register}
      />
      <SimpleTextInput
        label="Type d'événement"
        propLabel="society.eventType"
        register={register}
      />
      <SimpleTextInput
        label="Numero de devis"
        propLabel="society.numberOfQuote"
        register={register}
        type="number"
      />
      <SimpleTextInput
        label="Vendu par"
        propLabel="society.soldBy"
        register={register}
      />
      <TextEditor
        objLabel="society.comments"
        displayLabel="Remarques"
        control={control}
      />
    </TitledGroup>
  );
};
