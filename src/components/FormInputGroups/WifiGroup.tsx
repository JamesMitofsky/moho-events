import { UsernameAndPassword } from "@/types/globalTypes";
import WifiPasswordIcon from "@mui/icons-material/WifiPassword";
import { useFieldArray } from "react-hook-form";
import { TextFieldElement } from "react-hook-form-mui";
import AddButton from "../buttons/AddButton";
import TextEditor from "../inputs/TextEditor";
import TitledArrayOfElements from "../layouts/TitledArrayOfElements";
import { TitledGroup } from "../layouts/TitledGroup";

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
      <AddButton label="Code Wifi" onClick={handleAdd} />
      <TextEditor displayLabel="Remarques" objLabel="wifi.comments" />
    </TitledGroup>
  );
}
