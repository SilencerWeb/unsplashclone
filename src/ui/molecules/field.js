// @flow
import * as React from 'react';
import styled, { css } from 'styled-components';

import { TextField, Label, HelperText, Icon } from 'ui/atoms';

import { color } from 'ui/theme';

import { info } from 'ui/outlines';

type props = {
  id?: string,
  className?: string,
  placeholder?: string,
  label?: string,
  labelNote?: string,
  helperText?: string,
  error: boolean,
  textarea: boolean,
  username: boolean,
};

const TextFieldWrapper = styled.div`
  display: flex;
  align-items: stretch;
`;

const Wrapper = styled.div`

  ${Label} {
    margin-bottom: 0.5rem;
  }

  ${TextFieldWrapper} {
    margin-bottom: ${p => p.error ? '0.5' : '1'}rem;

    &:last-child {
      margin-bottom: 0;
    }
  }

  ${p => p.username && css`
    input,
    textarea {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }
  `};
`;

const AtSign = styled.div`
  flex: 0 0 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0.1rem solid ${color.secondary};
  border-right: none;
  border-top-left-radius: 0.3rem;
  border-bottom-left-radius: 0.3rem;
`;

const Textarea = TextField.withComponent('textarea');

export const Field = (props: props) => {
  const labelNote = props.label && props.labelNote && <span>&nbsp;({ props.labelNote })</span>;

  const label = props.label &&
    <Label htmlFor={ props.id }>
      { props.label }
      { labelNote }
    </Label>;

  const helperTextIcon = !props.error && <Icon icon={ info } height={ 12 }/>;

  const helperText = props.helperText &&
    <HelperText error={ props.error }>
      { helperTextIcon }
      <span>{ props.helperText }</span>
    </HelperText>;

  const atSign = props.username && <AtSign>@</AtSign>;

  const textField = props.textarea ?
    <Textarea id={ props.id } placeholder={ props.placeholder }/>
    :
    <TextField id={ props.id } placeholder={ props.placeholder }/>;

  return (
    <Wrapper className={ props.className } error={ props.error } username={ props.username }>
      { label }
      <TextFieldWrapper>
        { atSign }
        { textField }
      </TextFieldWrapper>
      { helperText }
    </Wrapper>
  );
};