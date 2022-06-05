import React from 'react';

import { styled } from '@linaria/react';

import { transition } from '../../utils/transition';

type ImgProps = React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement> & {
  width?: string;
  height?: string;
};

const Img = (props: Readonly<ImgProps>) => <SImg {...props} />;

export default React.memo(Img);

const SImg = styled.img<ImgProps>`
  width: ${(props) => props.width || 'auto'};
  height: ${(props) => props.height || 'auto'};

  object-fit: cover;
  object-position: center center;
  transition: ${transition('all')};

  border-radius: 8px;

  &:hover {
    filter: grayscale(5%) contrast(1) brightness(90%);
    transform: translate3d(0px, -0.125rem, 0px);
    box-shadow: rgb(0 0 0 / 32%) 0px 0px 2.5rem;
  }
`;
