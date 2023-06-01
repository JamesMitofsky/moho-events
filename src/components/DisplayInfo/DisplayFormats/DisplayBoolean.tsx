import CheckIcon from "@mui/icons-material/Check";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import { Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import WrapperEmptyField from "./WrapperEmptyField";

type Props = {
  boolean: boolean;
  label: string;
};

export default function DisplayBoolean({ boolean, label }: Props) {
  const icon = boolean ? <CheckIcon /> : <RemoveCircleOutlineIcon />;
  return (
    <WrapperEmptyField input={boolean.toString()}>
      <Typography fontSize=".8rem">{label}</Typography>
      <Typography
        sx={{
          px: 1,
          py: 1,
          display: "flex",
          alignItems: "center",
          gap: 1,
          backgroundColor: grey[100],
        }}
      >
        {icon}
        {boolean ? "Oui" : "Non"}
      </Typography>
    </WrapperEmptyField>
  );
}
