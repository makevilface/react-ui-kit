import React from 'react';

import { styled } from '@linaria/react';

const SNotFoundPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 200px;
  min-height: 100vh;
  justify-content: center;
  background-color: #3992ff;
  color: #fff;

  .not_found_smile {
    font-size: 100px;
  }

  .not_found_title {
    font-weight: 600;
    font-size: 32px;
    line-height: 40px;
    margin-top: 16px;
  }

  .not_found_subtitle {
    font-weight: 400;
    font-size: 24px;
    margin-top: 48px;
  }
`;

const smilingFace = ':)';

const NotFound = () => (
  <SNotFoundPageContainer>
    <div aria-hidden className="not_found_smile">
      {smilingFace}
    </div>
    <h2 className="not_found_title">UH OH! Something went wrong. You&apos;re lost.</h2>
    <p className="not_found_subtitle">The page you are looking for does not exist… the sadness</p>
  </SNotFoundPageContainer>
);

export default NotFound;
