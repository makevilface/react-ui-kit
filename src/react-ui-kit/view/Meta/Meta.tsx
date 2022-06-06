import React from 'react';
import { Helmet } from 'react-helmet';

type TMeta = {
  children: React.ReactNode;
  title: string;
  description: string;
  prefix: string;
  ogImage: string;
  siteUrl: string;
};

const Meta = ({ title, description, ogImage, children, siteUrl }: Readonly<TMeta>) => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />

        <meta property="og:image" content={ogImage} />
        <meta property="og:image:alt" content="Site banner" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1280" />
        <meta property="og:image:height" content="675" />

        <meta property="og:title" content={title} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:description" content={description} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:image" content={ogImage} />
      </Helmet>
      {children}
    </>
  );
};

export default Meta;
