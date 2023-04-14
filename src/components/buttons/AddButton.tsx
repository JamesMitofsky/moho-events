import AddIcon from "@mui/icons-material/Add";
import { Button, Divider } from "@mui/material";

type Props = {
  onClick: () => void;
  label: string;
};

export default function AddButton({ onClick, label }: Props) {
  return (
    <>
      <Button startIcon={<AddIcon />} variant="outlined" onClick={onClick}>
        {label}
      </Button>
      <Divider sx={{ my: 2 }} />
    </>
  );
}
