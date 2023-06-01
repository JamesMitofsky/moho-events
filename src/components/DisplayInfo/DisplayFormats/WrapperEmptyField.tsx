import Grid from "@mui/system/Unstable_Grid";

type Props = {
  input: string | string[];
  children: React.ReactNode;
};

export default function WrapperEmptyField({ input, children }: Props) {
  return (
    <>
      {input?.length > 0 ? (
        <Grid xs={12} md={6}>
          {children}
        </Grid>
      ) : null}
    </>
  );
}
