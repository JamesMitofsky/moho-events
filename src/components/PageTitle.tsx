import { Typography, Box } from "@mui/material";
import MetaTags from "./MetaTags";

interface Props {
  title: string;
  subtitle?: string;
}

const PageTitle = ({ title, subtitle }: Props) => {
  return (
    <>
      <MetaTags title={title} />
      <Box sx={{ mt: 2, mb: 2 }}>
        <Typography color="primary.main" variant="h2">
          {title}
        </Typography>
        <Typography variant="subtitle1">{subtitle}</Typography>
      </Box>
    </>
  );
};

export default PageTitle;
