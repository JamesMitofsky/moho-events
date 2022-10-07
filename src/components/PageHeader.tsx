import { Typography } from "@mui/material";
import MetaTags from "./MetaTags";

const PageHeader = ({ title }: { title: string }) => {
  return (
    <>
      <MetaTags title={title} />
      <Typography color="primary.main" variant="h2">
        {title}
      </Typography>
    </>
  );
};

export default PageHeader;
