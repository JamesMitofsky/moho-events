import { ParsedPhoneNumber, parsePhoneNumber } from "awesome-phonenumber";
import DisplayWrapper from "./WrapperCopyContent";
import WrapperEmptyField from "./WrapperEmptyField";

interface Props {
  phoneNumber: string;
}

export default function DisplayPhoneNumber({ phoneNumber }: Props) {
  const formattedInputNumber = "+" + phoneNumber;

  const parsedNumber = parsePhoneNumber(formattedInputNumber);

  const phoneNumberToDisplay = returnFrenchOrInternational(parsedNumber);

  console.log(parsedNumber, phoneNumber);

  return (
    <WrapperEmptyField input={phoneNumber.toString()}>
      <DisplayWrapper content={phoneNumberToDisplay} label={"Téléphone"} />
    </WrapperEmptyField>
  );
}

function returnFrenchOrInternational(parsedNumber: ParsedPhoneNumber): string {
  if (parsedNumber.regionCode === "FR") {
    return parsedNumber.number?.national || "";
  } else {
    return parsedNumber.number?.international || "";
  }
}
