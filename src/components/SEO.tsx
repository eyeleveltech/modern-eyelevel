import { Helmet } from "react-helmet-async";

type JsonLd = Record<string, unknown>;

interface SeoTypes {
  title?: string;
  description?: string;
  schema?: JsonLd | JsonLd[];
}

const SEO = ({
  title = "EyeLevel Growth Studio - Digital Marketing & Creative Studio",
  description = "Chennai-based growth studio for digital marketing, branding, events, photography and video production. Helping startups, luxury & tech brands scale globally.",
  schema,
}: SeoTypes) => {
  const schemas = schema ? (Array.isArray(schema) ? schema : [schema]) : [];

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />

      {/* JSON-LD */}
      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(s)}
        </script>
      ))}
    </Helmet>
  );
};

export default SEO;

