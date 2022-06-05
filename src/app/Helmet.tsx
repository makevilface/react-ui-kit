import React from 'react';
import { Helmet as ReactHelmet, HelmetProps } from 'react-helmet';

import config from '../config/helmet-config';

const Helmet = ({ children }: HelmetProps) => (
  <>
    <ReactHelmet meta={config.head.meta} title={config.head.title} />
    {children}
  </>
);

export default Helmet;
