import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

import { color, transition } from 'ui/theme';


export const TextField = styled.input`
  display: inline-block;
  vertical-align: top;
  width: 100%;
  min-height: 4rem;
  color: ${color.primary};
  background-color: transparent;
  border: 0.1rem solid ${color.secondary};
  border-radius: 0.3rem;
  padding-top: 1.05rem;
  padding-right: 1.2rem;
  padding-bottom: 1.05rem;
  padding-left: 1.2rem;
  outline: none;
  resize: none;
  transition: ${transition};

  &:focus {
    border-color: ${color.primary};
  }

  &::placeholder {
    color: ${color.secondary};
  }
`;

TextField.propTypes = {};

TextField.defaultProps = {};
