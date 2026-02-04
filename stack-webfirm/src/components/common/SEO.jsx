import { Helmet } from 'react-helmet-async';

const SEO = ({
  title = 'Modern Web Design London | Stack Websites London - Fast, Quality Sites',
  description = 'High-quality, modern websites for London small businesses. Get online fast with design that converts. Trusted London web design studio.',
  keywords = 'web design London, website design London, small business websites, London web designer, modern website design, fast websites, AI-powered websites',
  canonical = 'https://websitelondon.co.uk',
  ogImage = 'https://websitelondon.co.uk/og-image.jpg',
  ogType = 'website',
  twitterCard = 'summary_large_image',
  schema,
}) => {
  const siteUrl = 'https://websitelondon.co.uk';

  const defaultSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'LocalBusiness',
        '@id': `${siteUrl}/#organization`,
        name: 'Stack Websites London',
        alternateName: 'Stack Web Design London',
        url: siteUrl,
        logo: `${siteUrl}/logo.png`,
        image: `${siteUrl}/og-image.jpg`,
        description: 'Professional web design agency in London specializing in modern, fast websites for small businesses.',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'London',
          addressCountry: 'UK',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 51.5074,
          longitude: -0.1278,
        },
        priceRange: '££',
        telephone: '+44-20-XXXX-XXXX',
        email: 'hello@websitelondon.co.uk',
        areaServed: {
          '@type': 'City',
          name: 'London',
        },
        serviceArea: {
          '@type': 'GeoCircle',
          geoMidpoint: {
            '@type': 'GeoCoordinates',
            latitude: 51.5074,
            longitude: -0.1278,
          },
          geoRadius: '50000',
        },
      },
      {
        '@type': 'WebSite',
        '@id': `${siteUrl}/#website`,
        url: siteUrl,
        name: 'Stack Websites London',
        description: 'Modern web design for London small businesses',
        publisher: {
          '@id': `${siteUrl}/#organization`,
        },
        potentialAction: {
          '@type': 'SearchAction',
          target: `${siteUrl}/search?q={search_term_string}`,
          'query-input': 'required name=search_term_string',
        },
      },
      {
        '@type': 'Service',
        serviceType: 'Web Design',
        provider: {
          '@id': `${siteUrl}/#organization`,
        },
        areaServed: 'London, UK',
        audience: {
          '@type': 'Audience',
          audienceType: 'Small Business Owners',
        },
      },
    ],
  };

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonical} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Stack Websites London" />
      <meta property="og:locale" content="en_GB" />

      {/* Twitter */}
      <meta property="twitter:card" content={twitterCard} />
      <meta property="twitter:url" content={canonical} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImage} />

      {/* Additional SEO */}
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      <meta name="geo.region" content="GB-LND" />
      <meta name="geo.placename" content="London" />
      <meta name="geo.position" content="51.5074;-0.1278" />
      <meta name="ICBM" content="51.5074, -0.1278" />

      {/* Schema.org markup */}
      <script type="application/ld+json">
        {JSON.stringify(schema || defaultSchema)}
      </script>
    </Helmet>
  );
};

export default SEO;
