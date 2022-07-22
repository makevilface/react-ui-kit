import React from 'react';
import { useFormContext } from 'react-hook-form';
import TextareaAutosize, { TextareaAutosizeProps } from 'react-textarea-autosize';

import { styled } from '@linaria/react';

export type TTextAreaProps = TextareaAutosizeProps & {
  name: string;
  maxLength?: number;
};

const TextArea = ({ name, maxLength, ...restProps }: Readonly<TTextAreaProps>) => {
  const { register, watch } = useFormContext();
  const textAreaValue = watch(name);

  return (
    <STextAreaWrapper>
      <STextArea>
        <TextareaAutosize {...register(name)} {...restProps} />
      </STextArea>
      {maxLength !== undefined && textAreaValue !== undefined && (
        <STextAreaCounter isError={textAreaValue.length > maxLength}>
          {textAreaValue.length}/{maxLength}
        </STextAreaCounter>
      )}
    </STextAreaWrapper>
  );
};

export default React.memo(TextArea);

const STextAreaCounter = styled.div<{ isError: boolean }>`
  color: ${({ isError }) => (isError ? 'var(--warning-color)' : '#000')};
  font-weight: 300;
  font-size: 12px;
  line-height: 19px;

  position: absolute;
  bottom: 4px;
  right: 16px;
`;

const STextAreaWrapper = styled.div`
  width: 612px;
  height: 152px;
  position: relative;
`;

const STextArea = styled.div`
  width: 100%;
  height: 100%;
  margin: auto;
  background: #edeef0;
  border-radius: 8px;
  padding: 1px 3px 14px 2px;
  overflow-y: auto;
  padding: 16px 24px;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 8px;
    :hover {
      background-color: rgba(255, 255, 255, 0.2);
    }
  }

  &:hover {
  }

  &:focus-within {
    outline: none;
  }

  textarea {
    overflow: auto;
    outline: none;
    line-height: 24px;
    border: none;
    width: calc(100% - 8px);
    background-color: transparent;
    resize: none;
    color: var(--text-primary);
    font-weight: 300;
    font-size: 16px;
    line-height: 19px;
    padding: 0;

    &::placeholder {
      color: var(--text-primary);
      font-weight: 300;
      font-size: 16px;
      line-height: 19px;
    }

    &::selection {
      background: #8f6a2f;
    }
  }

  ${STextAreaCounter} {
    position: absolute;
    bottom: 2px;
    right: 3px;
  }
`;
