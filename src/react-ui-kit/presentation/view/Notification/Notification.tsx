import React from 'react';

import { css } from '@linaria/core';
import { styled } from '@linaria/react';

import cn from 'classnames';

import { CloseIcon } from '../Icon';
import { sharedPreferences } from '../styles/sharedPreferences';

type TNotificationProps = React.HTMLAttributes<HTMLDivElement> & {
  message?: React.ReactNode;
  date: string;
  onAction?: () => void;
  actionLabel?: string;
  iconClassName?: string;
};

const Notification = ({
  children = 'Message',
  date,
  onAction,
  actionLabel,
  iconClassName,
  ...rest
}: Readonly<TNotificationProps>) => (
  <div className={cn('wrapper', NotificationWrapperStyles)} role="status" {...rest}>
    <SContainer>
      {children}
      <SDate>{date}</SDate>
    </SContainer>
    {onAction && actionLabel ? (
      <SAction onClick={onAction}>{actionLabel}</SAction>
    ) : (
      <span className={cn('close-icon', iconClassName)}>
        <CloseIcon />
      </span>
    )}
  </div>
);

export default React.memo(Notification);

const SAction = styled.span`
  cursor: pointer;
  color: black;
  font-weight: 400;
  font-size: 12px;
  text-transform: uppercase;
  font-family: ${sharedPreferences.fontsFamilies.secondaryFont};
  letter-spacing: 0.4px;
`;

const SDate = styled.span`
  margin-top: 3px;
  opacity: 0.6;
  cursor: pointer;
  color: black;
  font-weight: 400;
  font-size: 10px;
  text-transform: lowercase;
  font-family: ${sharedPreferences.fontsFamilies.secondaryFont};
  letter-spacing: 0.4px;
`;

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const NotificationWrapperStyles = css`
  display: flex;
  align-items: center;
  justify-content: space-between;

  max-width: calc(var(--page-module) * 18);
  width: calc(var(--page-module) * 18);
  min-height: 48px;

  color: black;
  font-size: 14px;
  border: 1px solid var(--primary-color-30);
  border-radius: 8px;
  background-color: #f5f5f7;
  padding: 8px 16px;
  font-weight: 500;
  user-select: none;

  .close-icon {
    cursor: pointer;
    min-width: 16px;
    min-height: 16px;
    margin-top: 2px;
  }
`;
