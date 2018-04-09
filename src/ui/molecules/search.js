// @flow
import * as React from 'react';
import styled, { css } from 'styled-components';

import { Icon, Button } from 'ui/atoms';
import { Field } from 'ui/molecules';

import { color, transition } from 'ui/theme';

import { search } from 'ui/outlines';


type props = {
  className?: string,
  small?: boolean,
  onSubmit: Function
};

const IconWrapper = styled.label`
  align-self: center;
  font-size: 0;
  color: ${color.secondary};
`;

const LargeButton = Button.extend`
  padding-right: 1.9rem;
  padding-left: 1.9rem;
`;

const IconButton = styled.button`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 4rem;
  height: 4rem;
  color: ${color.secondary};
  background: none;
  border: none;
  cursor: pointer;
  outline: none;
`;

const Wrapper = styled.form`
  position: relative;
  min-height: 5.4rem;
  display: flex;
  background-color: #f5f5f5;
  border-radius: 0.4rem;
  padding-top: 0.4rem;
  padding-right: 0.5rem;
  padding-bottom: 0.4rem;
  padding-left: 1.5rem;
  transition: ${transition};
  
  &:focus-within {
    background-color: ${color.tertiary};
    box-shadow: 0 0 0 0.5rem rgba(0, 0, 0, .2);
  }
  
  ${(p) => p.small && css`
    min-height: 4rem;
    border: 0.1rem solid transparent;
    border-radius: 2rem;
    padding-top: 0;
    padding-right: 0;
    padding-bottom: 0;
    padding-left: 4.2rem;
    
    &:hover {
      border-color: #d1d1d1;
    }

    &:focus-within {
      border-color: #d1d1d1;
      box-shadow: none;
    }
    
    input {
      padding-top: 0;
      padding-right: 0;
      padding-bottom: 0;
      padding-left: 0;
    }
  `}
`;

export const Search = (props: props) => {
  const label = !props.small &&
    <IconWrapper htmlFor="searchField">
      <Icon icon={ search } height={ 20 } />
    </IconWrapper>;

  const button = props.small ?
    <IconButton>
      <Icon icon={ search } height={ 16 } />
    </IconButton>
    :
    <LargeButton bordered>
      Search
    </LargeButton>;

  return (
    <Wrapper className={ props.className } small={ props.small } onSubmit={ props.onSubmit }>
      { label }
      <Field
        id={ 'searchField' }
        placeholder={ 'Search free high-resolution photos' }
        noBorder
      />
      { button }
    </Wrapper>
  );
};
