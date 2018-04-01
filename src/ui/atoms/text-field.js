import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

import { color, transition } from 'ui/theme';

export const TextField = styled.input`
  display: inline-block;
  vertical-align: top;
  width: 100%;
  min-height: 40px;
  color: ${color.primary};
  background-color: transparent;
  border: 1px solid ${color.secondary};
  border-radius: 3px;
  padding-top: 10.5px;
  padding-right: 12px;
  padding-bottom: 10.5px;
  padding-left: 12px;
  outline: none;
  resize: none;
  transition: ${transition};

  &:focus {
    border-color: ${color.primary};
  }
`;

TextField.propTypes = {};

TextField.defaultProps = {};
