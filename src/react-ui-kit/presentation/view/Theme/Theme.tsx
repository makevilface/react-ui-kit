import React from 'react';
import { Helmet as ReactHelmet, HelmetProps } from 'react-helmet';

const Theme = ({ children }: HelmetProps) => (
  <>
    <ReactHelmet>
      <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet" />
    </ReactHelmet>
    {children}
  </>
);

export default Theme;
