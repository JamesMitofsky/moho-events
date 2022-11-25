import { Typography, Box } from "@mui/material";
import MetaTags from "../MetaTags";

interface Props {
  title: string;
  subtitle?: string;
  icon?: any;
}

const PageTitle = ({ title, subtitle, icon }: Props) => {
  const Icon = icon;
  return (
    <>
      <MetaTags title={title} />
      <Box sx={{ mt: 2, mb: 2 }}>
        <Typography color="primary.main" variant="h2">
          {title}
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          {icon && <Icon fontSize="small" color="grey" />}
          <Typography variant="subtitle1">{subtitle}</Typography>
        </Box>
      </Box>
    </>
  );
};

export default PageTitle;
