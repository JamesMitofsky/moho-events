import AddIcCallIcon from "@mui/icons-material/AddIcCall";
import { Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import Grid from "@mui/system/Unstable_Grid";
import { v4 as generateId } from "uuid";
import { ContactInputs } from "../../types/globalTypes";
import { TitledGroup } from "../layouts/TitledGroup";
import TitledArrayOfElements from "../layouts/TitledItemFromArray";
import DisplayPhoneNumber from "./DisplayFormats/DisplayPhoneNumber";
import DisplayText from "./DisplayFormats/DisplayText";

export default function DisplayContact({
  comments,
  individuals,
}: ContactInputs) {
  return (
    <TitledGroup icon={AddIcCallIcon} title="Contact">
      {individuals[0].companyName !== "" ? (
        individuals.map((individual, index) => {
          return (
            <TitledArrayOfElements
              key={generateId()}
              nameOfThisItem={`${individual.contactName} - ${individual.companyName}`}
              index={index}
            >
              <DisplayText content={individual.email} label="Email" />
              <DisplayPhoneNumber phoneNumber={individual.telephoneNumber} />
            </TitledArrayOfElements>
          );
        })
      ) : (
        <Grid xs={12}>
          <Typography sx={{ color: grey[600], fontSize: 12 }}>
            Acune contact
          </Typography>
        </Grid>
      )}
      <DisplayText content={comments} label="Remarques" />
    </TitledGroup>
  );
}
