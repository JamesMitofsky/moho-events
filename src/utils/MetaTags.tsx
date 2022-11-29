import { Helmet } from "react-helmet-async";

interface Props {
  title: string | undefined;
}

const MetaTags = ({ title }: Props) => {
  return (
    <Helmet>
      <title>{title}</title>
    </Helmet>
  );
};

export default MetaTags;
