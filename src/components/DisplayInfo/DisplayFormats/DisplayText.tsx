import { Link } from "@mui/material";
import NextLink from "next/link";
import DisplayWrapper from "./WrapperCopyContent";
import WrapperEmptyField from "./WrapperEmptyField";

interface Props {
  content: string;
  label: string;
}

export default function DisplayText({ content, label }: Props) {
  const textWithLinksAdded = wrapLinksWithElement(content);

  return (
    <WrapperEmptyField input={content}>
      <DisplayWrapper content={textWithLinksAdded} label={label} />
    </WrapperEmptyField>
  );
}

function wrapLinksWithElement(text: string): React.ReactNode {
  const urlPattern =
    /(http[s]?:\/\/(?:[a-zA-Z]|[0-9]|[$-_@.&+]|[!*\\(\\),]|(?:%[0-9a-fA-F][0-9a-fA-F]))+)/g;
  const parts: React.ReactNode[] = [];

  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = urlPattern.exec(text)) !== null) {
    const url = match[0];
    const linkStartIndex = match.index;
    const linkEndIndex = match.index + url.length;

    if (linkStartIndex > lastIndex) {
      parts.push(text.substring(lastIndex, linkStartIndex));
    }

    parts.push(
      <Link component={NextLink} href={url} key={url}>
        {url}
      </Link>
    );

    lastIndex = linkEndIndex;
  }

  if (lastIndex < text.length) {
    parts.push(text.substring(lastIndex));
  }

  return parts;
}
