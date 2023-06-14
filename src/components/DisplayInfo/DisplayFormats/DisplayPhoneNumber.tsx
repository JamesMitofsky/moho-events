import { Link } from "@mui/material";
import { ParsedPhoneNumber, parsePhoneNumber } from "awesome-phonenumber";
import NextLink from "next/link";
import DisplayWrapper from "./WrapperCopyContent";
import WrapperEmptyField from "./WrapperEmptyField";

interface Props {
  phoneNumber: string;
}

export default function DisplayPhoneNumber({ phoneNumber }: Props) {
  const formattedInputNumber = "+" + phoneNumber;

  const parsedNumber = parsePhoneNumber(formattedInputNumber);

  const phoneNumberToDisplay = returnFrenchOrInternational(parsedNumber);

  const phoneNumberAsLink = wrapPhoneNumbersWithElement(phoneNumberToDisplay);

  return (
    <WrapperEmptyField input={phoneNumber.toString()}>
      <DisplayWrapper content={phoneNumberAsLink} label={"Téléphone"} />
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

function wrapPhoneNumbersWithElement(text: string): React.ReactNode {
  const phonePattern =
    /(\+?(?:\d[-.\s]?){1,4}(?:\(\d{1,4}\)|\d{1,4})[-.\s]?\d{1,4}[-.\s]?\d{1,9})/g;

  const parts: React.ReactNode[] = [];
  let lastIndex = 0;

  let match: RegExpExecArray | null;
  while ((match = phonePattern.exec(text)) !== null) {
    const linkStartIndex = match.index;
    const linkEndIndex = match.index + match[0].length;

    if (linkStartIndex > lastIndex) {
      parts.push(text.substring(lastIndex, linkStartIndex));
    }

    const linkContent = match[0];
    const phoneNumber = linkContent.replace(/[^\d+]/g, "");
    const href = phoneNumber.startsWith("+")
      ? `tel:${phoneNumber}`
      : `tel:+33${phoneNumber}`;

    parts.push(
      <Link component={NextLink} href={href} key={linkContent}>
        {linkContent}
      </Link>
    );

    lastIndex = linkEndIndex;
  }

  if (lastIndex < text.length) {
    parts.push(text.substring(lastIndex));
  }

  return parts;
}
