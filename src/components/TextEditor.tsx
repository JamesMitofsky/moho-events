import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Controller } from "react-hook-form";
import { Box } from "@mui/material";

interface Props {
  objLabel: string;
  control: any;
  displayLabel: string;
}

export default function TextEditor({ control, objLabel, displayLabel }: Props) {
  return (
    <Box sx={{ mb: 1, mt: 1 }}>
      <Controller
        name={objLabel}
        control={control}
        render={({ field }) => (
          <ReactQuill placeholder={displayLabel} theme="snow" {...field} />
        )}
      />
    </Box>
  );
}
