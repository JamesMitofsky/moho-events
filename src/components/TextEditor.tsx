import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Controller } from "react-hook-form";
import { Typography, Box } from "@mui/material";

interface Props {
  objLabel: string;
  control: any;
}

export default function TextEditor({ control, objLabel }: Props) {
  return (
    <Box sx={{ mb: 1, mt: 1 }}>
      <Controller
        name={objLabel}
        control={control}
        render={({ field }) => (
          <ReactQuill placeholder="Remarque" theme="snow" {...field} />
        )}
      />
    </Box>
  );
}
