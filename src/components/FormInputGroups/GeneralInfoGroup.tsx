import ImportContactsIcon from "@mui/icons-material/ImportContacts";
import Grid from "@mui/system/Unstable_Grid";
import { DatePickerElement, TextFieldElement } from "react-hook-form-mui";
import TextEditor from "../inputs/TextEditor";
import { TitledGroup } from "../layouts/TitledGroup";

export default function GeneralInfoGroup() {
  return (
    <TitledGroup icon={ImportContactsIcon} title={"Info Générale"}>
      <Grid xs={12} md={6}>
        <TextFieldElement
          fullWidth
          label="Nom de la société"
          name="generalInfo.associationName"
          required
        />
      </Grid>
      <Grid xs={12} md={6}>
        <TextFieldElement
          fullWidth
          label="Catégorie"
          name="generalInfo.category"
        />
      </Grid>

      <Grid xs={12} md={6}>
        <TextFieldElement
          fullWidth
          label="Nom de l'évènement"
          name="generalInfo.eventName"
        />
      </Grid>
      <Grid xs={12} md={6}>
        <TextFieldElement
          fullWidth
          label="Type d'évènement"
          name="generalInfo.eventType"
        />
      </Grid>
      <Grid xs={12} md={6}>
        <TextFieldElement
          fullWidth
          label="Numéro de devis"
          name="generalInfo.numberOfQuote"
          type="number"
        />
      </Grid>
      <Grid xs={12} md={6}>
        <TextFieldElement
          fullWidth
          label="Nombre de pax"
          name="generalInfo.numberOfPeople"
        />
      </Grid>
      <Grid xs={12} md={6}>
        <DatePickerElement
          required
          label="Date d'évènement"
          name="generalInfo.dateAsISO"
          disablePast
          inputProps={{ fullWidth: true }}
        />
      </Grid>
      <Grid xs={12} md={6}>
        <TextEditor objLabel="generalInfo.comments" displayLabel="Remarques" />
      </Grid>
    </TitledGroup>
  );
}
