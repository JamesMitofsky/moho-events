import { UsernameAndPassword } from "@/types/globalTypes";
import WifiPasswordIcon from "@mui/icons-material/WifiPassword";
import { useFieldArray } from "react-hook-form";
import { TextFieldElement } from "react-hook-form-mui";
import TextEditor from "../inputs/TextEditor";
import ArrayOfElementsWrapper from "../layouts/ArrayOfElementsWrapper";
import { TitledGroup } from "../layouts/TitledGroup";
import TitledArrayOfElements from "../layouts/TitledItemFromArray";

export default function WifiGroup() {
  const { fields, append } = useFieldArray({
    name: "wifi.connectionInfo",
  });

  const blankWifiInputs: UsernameAndPassword = {
    username: "",
    password: "",
  };

  const handleAdd = () => {
    append(blankWifiInputs);
  };

  return (
    <TitledGroup icon={WifiPasswordIcon} title={"Wifi Accés"}>
      <ArrayOfElementsWrapper addLabel="Code Wifi" handleAddItem={handleAdd}>
        {fields.map((field, index) => (
          <TitledArrayOfElements
            key={field.id}
            label="Code"
            index={index}
            listLength={fields.length}
          >
            <TextFieldElement
              fullWidth
              label="Identifiant"
              name={`wifi.connectionInfo.${index}.username`}
            />
            <TextFieldElement
              fullWidth
              label="Mot de passe"
              name={`wifi.connectionInfo.${index}.password`}
            />
          </TitledArrayOfElements>
        ))}
      </ArrayOfElementsWrapper>
      <TextEditor displayLabel="Remarques" objLabel="wifi.comments" />
    </TitledGroup>
  );
}
