import CheckIcon from "@mui/icons-material/Check";
import { Typography } from "@mui/material";
import WrapperEmptyField from "./WrapperEmptyField";

type Props = {
  boolean: boolean;
  label: string;
};

export default function DisplayBoolean({ boolean, label }: Props) {
  return (
    <WrapperEmptyField input={!boolean ? "" : " "}>
      <Typography fontSize=".8rem" fontWeight={900}>
        {label}
      </Typography>
      <Typography
        sx={{
          mb: 1,
          display: "flex",
          alignItems: "center",
          gap: 1,
          fontWeight: 100,
        }}
      >
        <CheckIcon />
        Oui
      </Typography>
    </WrapperEmptyField>
  );
}
