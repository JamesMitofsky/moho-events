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
  if (typeof text !== "string") {
    return text;
  }

  const pattern = /((?:https?:\/\/|www\.|[\w.-]+@[\w-]+\.[\w.-]+)[^\s]+)/g;

  const parts: React.ReactNode[] = [];
  let lastIndex = 0;

  text.replace(pattern, (match, link, index) => {
    const linkStartIndex = index;
    const linkEndIndex = index + match.length;

    if (linkStartIndex > lastIndex) {
      parts.push(text.substring(lastIndex, linkStartIndex));
    }

    const href = link.startsWith("http") ? link : `mailto:${link}`;
    const displayLink = link.replace(/^https?:\/\//, "");
    const linkContent =
      displayLink.length > 40
        ? displayLink.substring(0, 40) + "..."
        : displayLink;

    parts.push(
      <Link component={NextLink} href={href} key={link}>
        {linkContent}
      </Link>
    );

    lastIndex = linkEndIndex;
    return "";
  });

  if (lastIndex < text.length) {
    parts.push(text.substring(lastIndex));
  }

  return parts;
}
