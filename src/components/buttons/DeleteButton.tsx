import archiveEvent from "@/services/database/archiveEvent";
import { ModifiedServerResponse } from "@/types/globalTypes";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { Box, Button } from "@mui/material";
import { useRouter } from "next/router";

export default function DeleteButton({
  event,
}: {
  event: ModifiedServerResponse;
}) {
  const router = useRouter();
  function confirmArchive() {
    if (confirm("Êtes-vous sûr de vouloir supprimer cet évènement ?")) {
      archiveEvent(event);
      navigateHome();
    }
  }

  function navigateHome() {
    router.push("/");
  }

  return (
    <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
      <Button
        variant="outlined"
        onClick={confirmArchive}
        startIcon={<DeleteOutlineIcon />}
        sx={{ p: 2 }}
      >
        Supprimer
      </Button>
    </Box>
  );
}
