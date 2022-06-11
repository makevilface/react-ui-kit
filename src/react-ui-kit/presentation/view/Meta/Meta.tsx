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

const Meta = ({ title, description, ogImage, children, siteUrl }: Readonly<TMeta>) => (
  <>
    <Helmet>
      <title>{title}</title>
      <meta content={description} name="description" />

      <meta content={ogImage} property="og:image" />
      <meta content="Site banner" property="og:image:alt" />
      <meta content="image/png" property="og:image:type" />
      <meta content="1280" property="og:image:width" />
      <meta content="675" property="og:image:height" />

      <meta content={title} property="og:title" />
      <meta content="website" property="og:type" />
      <meta content={siteUrl} property="og:url" />
      <meta content={description} property="og:description" />

      <meta content="summary_large_image" name="twitter:card" />
      <meta content={description} name="twitter:description" />
      <meta content={title} name="twitter:title" />
      <meta content={ogImage} name="twitter:image" />
    </Helmet>
    {children}
  </>
);

export default Meta;
