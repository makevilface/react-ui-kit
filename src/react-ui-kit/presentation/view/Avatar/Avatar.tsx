import React from 'react';

import { styled } from '@linaria/react';

import cn from 'classnames';

type TAvatarSize = 'small' | 'large';

type TAvatarMode = 'default' | 'app';

type TAvatarProps = React.HTMLAttributes<HTMLDivElement> & {
  status?: string;
  label?: string;
  src?: string;
  size?: TAvatarSize;
  mode?: TAvatarMode;
  className?: string;
};

// TODO: change default avatar url
const Avatar = ({
  status,
  label,
  src,
  size = 'small',
  mode = 'default',
  className,
  ...restProps
}: Readonly<TAvatarProps>) => {
  const [failedLoading, setFailedLoading] = React.useState(false);

  const onImageError = () => {
    setFailedLoading(true);
  };

  const onImageLoad = () => {
    setFailedLoading(false);
  };
  return (
    <SAvatarWrapper
      className={cn(
        {
          'Avatar--large ': size === 'large',
          'Avatar--small': size === 'small',
          'visually-hidden': failedLoading,
        },
        className,
      )}
      role={src ? 'img' : 'presentation'}
      {...restProps}
    >
      <img
        alt=""
        className={cn({
          'Avatar--default': mode === 'default',
          'Avatar--app': mode === 'app',
        })}
        src={src || 'https://leonardo.osnova.io/fe7edd7a-f3e2-540b-9230-1eaa1c3583c1/'}
        onError={onImageError}
        onLoad={onImageLoad}
      />
      {status && mode !== 'app' && (
        <span aria-hidden={label ? 'false' : 'true'} aria-label={label || ''} className="status" role="img">
          {status}
        </span>
      )}
    </SAvatarWrapper>
  );
};

export default React.memo(Avatar);

const SAvatarWrapper = styled.div`
  display: inline-block;
  position: relative;

  &.Avatar--failed {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
  }

  &.Avatar--small {
    width: 45px;
    height: 45px;
  }

  &.Avatar--large {
    width: 65px;
    height: 65px;
    .status {
      font-size: 25px;
    }
  }

  & .Avatar--default {
    border-radius: 50%;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  & .Avatar--app {
    border-radius: 20%;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  & .status {
    position: absolute;
    top: 20%;
    font-size: 18px;
    transform: translate(-75%, -50%);
    pointer-events: none;
  }
`;
