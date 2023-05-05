import { UsernameAndPassword } from "@/types/globalTypes";
import WifiPasswordIcon from "@mui/icons-material/WifiPassword";
import Grid from "@mui/system/Unstable_Grid";
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
    <TitledGroup icon={WifiPasswordIcon} title={"Accès Wifi"}>
      <ArrayOfElementsWrapper addLabel="Code Wifi" handleAddItem={handleAdd}>
        {fields.map((field, index) => (
          <TitledArrayOfElements
            key={field.id}
            label="Code"
            index={index}
            listLength={fields.length}
          >
            <Grid xs={12} md={6}>
              <TextFieldElement
                fullWidth
                label="Identifiant"
                name={`wifi.connectionInfo.${index}.username`}
              />
            </Grid>
            <Grid xs={12} md={6}>
              <TextFieldElement
                fullWidth
                label="Mot de passe"
                name={`wifi.connectionInfo.${index}.password`}
              />
            </Grid>
          </TitledArrayOfElements>
        ))}
      </ArrayOfElementsWrapper>

      <Grid xs={12}>
        <TextEditor displayLabel="Remarques" objLabel="wifi.comments" />
      </Grid>
    </TitledGroup>
  );
}
