import { Helmet } from "react-helmet-async";

type JsonLd = Record<string, unknown>;

interface SeoTypes {
  title?: string;
  description?: string;
  schema?: JsonLd | JsonLd[];
  canonical?: string;
  image?: string;
  imageAlt?: string;
  url?: string;
  type?: "website" | "article";
  siteName?: string;
  twitterSite?: string;
  twitterCreator?: string;
  noindex?: boolean;
}

const SEO = ({
  title = "EyeLevel Growth Studio - Digital Marketing & Creative Studio",
  description = "Chennai-based growth studio for digital marketing, branding, events, photography and video production. Helping startups, luxury & tech brands scale globally.",
  schema,
  canonical,
  image,
  imageAlt,
  url,
  type = "website",
  siteName = "The Eye Level Studio",
  twitterSite = "@Eye_Levelstudio",
  twitterCreator,
  noindex = false,
}: SeoTypes) => {
  const schemas = schema ? (Array.isArray(schema) ? schema : [schema]) : [];
  const robotsContent = noindex ? "noindex, nofollow" : "index, follow";
  const defaultImage =
    "https://theeyelevelstudio.com/eyelevel_favicon_512_512.png";
  const resolvedImage = image || defaultImage;
  const resolvedImageAlt = imageAlt || title;
  const imageType = resolvedImage.toLowerCase().endsWith(".png")
    ? "image/png"
    : resolvedImage.toLowerCase().endsWith(".webp")
      ? "image/webp"
      : resolvedImage.toLowerCase().endsWith(".jpg") ||
          resolvedImage.toLowerCase().endsWith(".jpeg")
        ? "image/jpeg"
        : undefined;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content={robotsContent} />
      {canonical ? <link rel="canonical" href={canonical} /> : null}

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="en_US" />
      {url ? <meta property="og:url" content={url} /> : null}
      <meta property="og:image" content={resolvedImage} />
      <meta property="og:image:secure_url" content={resolvedImage} />
      <meta property="og:image:alt" content={resolvedImageAlt} />
      {imageType ? <meta property="og:image:type" content={imageType} /> : null}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {url ? <meta name="twitter:url" content={url} /> : null}
      <meta name="twitter:image" content={resolvedImage} />
      <meta name="twitter:image:alt" content={resolvedImageAlt} />
      <meta name="twitter:site" content={twitterSite} />
      {twitterCreator ? (
        <meta name="twitter:creator" content={twitterCreator} />
      ) : null}

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

