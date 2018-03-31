import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

import { color, transition } from 'ui/theme';

export const Button = styled.button`
  display: inline-block;
  vertical-align: top;
  font-size: 14px;
  font-weight: 500;
  text-align: center;
  background-color: ${color.tertiary};
  border: none;
  border-radius: 4px;
  color: ${color.secondary};
  padding-top: 8px;
  padding-right: 12px;
  padding-bottom: 8px;
  padding-left: 12px;
  cursor: pointer;
  outline: none;
  transition: ${transition};
  
  &:hover {
    color: ${color.primary};
  }
  
  svg {
    vertical-align: middle;
    margin-right: 8px;
    
    &:last-child {
      margin-right: 0;
    }
  }
  
  span {
    vertical-align: middle;
  }
  
  ${(p) =>
    p.black &&
    css`
      color: ${color.tertiary};
      background-color: ${color.primary};

      &:hover {
        color: ${color.tertiary};
        background-color: #000000;
      }
    `}
  
  ${(p) =>
    p.red &&
    css`
      color: ${color.tertiary};
      background-color: #e25c3d;

      &:hover {
        color: ${color.tertiary};
        background-color: #df4927;
      }
    `}
  
  ${(p) =>
    p.blue &&
    css`
      color: ${color.tertiary};
      background-color: #007fff;

      &:hover {
        color: ${color.tertiary};
        background-color: #006aff;
      }
    `}
  
  ${(p) =>
    p.green &&
    css`
      color: ${color.tertiary};
      background-color: #3cb46e;

      &:hover {
        color: ${color.tertiary};
        background-color: #37a866;
      }
    `}
  
  ${(p) =>
    p.whiteTransparent &&
    css`
      color: #777777;
      background-color: rgba(255, 255, 255, 0.85);

      &:hover {
        color: #777777;
        background-color: ${color.tertiary};
      }
    `}
  
  ${(p) =>
    p.bordered &&
    css`
      color: ${color.secondary};
      border: 1px solid #dddddd;
      padding-top: 7px;
      padding-right: 11px;
      padding-bottom: 7px;
      padding-left: 11px;

      &:hover {
        color: ${color.primary};
        border-color: ${color.secondary};
      }
    `}
  
  ${(p) =>
    p.hoverBlack &&
    css`
      &:hover {
        color: #000000;
        background-color: ${color.tertiary};
        border-color: #777777;
      }
    `}
  
  ${(p) =>
    p.disabled &&
    css`
      color: ${color.tertiary};
      background-color: #dddddd;
      cursor: not-allowed;

      &:hover {
        color: ${color.tertiary};
        background-color: #dddddd;
      }
    `}
  
  ${(p) =>
    p.full &&
    css`
      width: 100%;
    `}
`;

Button.propTypes = {
  black: PropTypes.bool,
  red: PropTypes.bool,
  blue: PropTypes.bool,
  green: PropTypes.bool,
  whiteTransparent: PropTypes.bool,
  bordered: PropTypes.bool,
  hoverBlack: PropTypes.bool,
  disabled: PropTypes.bool,
  full: PropTypes.bool,
};

Button.defaultProps = {
  black: false,
  red: false,
  blue: false,
  green: false,
  whiteTransparent: false,
  bordered: false,
  hoverBlack: false,
  disabled: false,
  full: false,
};