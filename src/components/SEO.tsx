import { Helmet } from "react-helmet-async";

const SEO = ({
  title = "EyeLevel Growth Studio — Digital Marketing & Creative Studio",
  description = "Chennai-based growth studio for digital marketing, branding, events, photography and video production. Helping startups, luxury & tech brands scale globally.",
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Helmet>
  );
};

export default SEO;
