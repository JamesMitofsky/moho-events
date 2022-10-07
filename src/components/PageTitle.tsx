import { Typography } from "@mui/material";
import MetaTags from "./MetaTags";

interface Props {
  title: string;
  subtitle?: string;
}

const PageTitle = ({ title, subtitle }: Props) => {
  return (
    <>
      <MetaTags title={title} />
      <Typography color="primary.main" variant="h2">
        {title}
      </Typography>
      <Typography variant="subtitle1">{subtitle}</Typography>
    </>
  );
};

export default PageTitle;
