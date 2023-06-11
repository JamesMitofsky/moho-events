import CheckIcon from "@mui/icons-material/Check";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import { Typography } from "@mui/material";
import WrapperEmptyField from "./WrapperEmptyField";

type Props = {
  boolean: boolean;
  label: string;
};

export default function DisplayBoolean({ boolean, label }: Props) {
  const icon = boolean ? <CheckIcon /> : <RemoveCircleOutlineIcon />;
  return (
    <WrapperEmptyField input={boolean.toString()}>
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
        {icon}
        {boolean ? "Oui" : "Non"}
      </Typography>
    </WrapperEmptyField>
  );
}
