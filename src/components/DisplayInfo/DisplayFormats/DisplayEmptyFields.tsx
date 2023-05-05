import {
  ConfigurationInputs,
  ContactInputs,
  GeneralInfoInputs,
  ProgramInputs,
  SignageInputs,
  WifiInputs,
} from "@/types/globalTypes";
import labelKeys from "@/types/labelKey";
import { Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import Grid from "@mui/system/Unstable_Grid/Grid";
import { useMemo } from "react";

type IndividualEventGroups =
  | (GeneralInfoInputs & { createdBy: string })
  | ContactInputs
  | ProgramInputs
  | WifiInputs
  | SignageInputs
  | ConfigurationInputs;

type Props = {
  fields: IndividualEventGroups;
  sectionName: keyof typeof labelKeys;
};

export default function DisplayEmptyFields({ fields, sectionName }: Props) {
  const keysOfEmptyFields = useMemo(() => {
    return Object.entries(fields).flatMap(([key, value]) =>
      value === "" ? (key as keyof (typeof labelKeys)[typeof sectionName]) : []
    );
  }, [fields]);

  const emptyFieldsWithLabels = useMemo(() => {
    return keysOfEmptyFields.map((key) => {
      const label = labelKeys[sectionName][key];
      return label;
    });
  }, [keysOfEmptyFields, labelKeys]);

  return (
    <Grid xs={12}>
      <Typography fontSize=".8rem">Champs vides</Typography>
      <Typography sx={{ fontSize: ".8rem", lineHeight: 1, color: grey[600] }}>
        {emptyFieldsWithLabels.join(", ")}
      </Typography>
    </Grid>
  );
}
