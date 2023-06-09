import { Chip, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { v4 as uuid4 } from "uuid";
import WrapperEmptyField from "./WrapperEmptyField";

type Props = { items: string[]; label: string };

export default function DisplayList({ items, label }: Props) {
  return (
    <WrapperEmptyField input={items}>
      <Typography fontSize=".8rem">{label}</Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexWrap: "wrap",
          height: "100%",
        }}
      >
        {items &&
          items.map((item) => {
            return (
              <Chip
                sx={{ fontSize: "1rem", m: 0.5 }}
                key={uuid4()}
                label={item}
              />
            );
          })}
      </Box>
    </WrapperEmptyField>
  );
}
