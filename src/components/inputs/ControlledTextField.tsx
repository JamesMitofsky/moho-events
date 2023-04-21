import { AllEventGroupPaths } from "@/types/globalTypes";
import { TextFieldElement, TextFieldElementProps } from "react-hook-form-mui";

type MyTextFieldElementProps = Pick<
  TextFieldElementProps,
  Exclude<keyof TextFieldElementProps, "name">
> & { name: AllEventGroupPaths };

export default function ControlledTextField(props: MyTextFieldElementProps) {
  return <TextFieldElement {...props} />;
}
