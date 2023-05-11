import { Box, Typography } from "@mui/material";

interface Props {
  title: string;
  subtitle?: string;
  icon?: any;
}

const PageTitle = ({ title, subtitle, icon }: Props) => {
  const Icon = icon;
  return (
    <>
      <Box sx={{ mt: 2, mb: 2 }}>
        <Typography variant="h1">{title}</Typography>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          {icon && <Icon fontSize="small" color="grey" />}
          <Typography variant="subtitle1">{subtitle}</Typography>
        </Box>
      </Box>
    </>
  );
};

export default PageTitle;
