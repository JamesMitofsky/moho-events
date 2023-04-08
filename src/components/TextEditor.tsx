import { Controller, useFormContext } from "react-hook-form";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

interface Props {
  objLabel: string;
  displayLabel: string;
}

export default function TextEditor({ objLabel, displayLabel }: Props) {
  const { control } = useFormContext();

  return (
    <Controller
      name={objLabel}
      control={control}
      defaultValue=""
      render={({ field }) => (
        <ReactQuill placeholder={displayLabel} theme="snow" {...field} />
      )}
    />
  );
}
