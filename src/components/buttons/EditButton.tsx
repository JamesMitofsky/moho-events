import EditIcon from "@mui/icons-material/Edit";
import { Box, IconButton } from "@mui/material";
import { useRouter } from "next/router";

type Props = {
  eventId: string;
};

export default function EditButton({ eventId }: Props) {
  const router = useRouter();

  return (
    <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
      <IconButton onClick={() => router.push(`/evenement/${eventId}/edit`)}>
        <EditIcon />
      </IconButton>
    </Box>
  );
}
