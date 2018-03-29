import * as React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const SVG = styled.svg`
  display: inline-block;
  vertical-align: top;

  ${p =>
    p.icon &&
    css`
      width: ${p.icon.node.viewBox.animVal.width / p.icon.node.viewBox.animVal.height}em;
      height: 1em;
      font-size: ${p.height || p.icon.node.viewBox.animVal.height}px;
    `};

  fill: currentColor;
`;

export const Icon = props => {
  return (
    <SVG className={props.className}>
      <use xlinkHref={'#' + props.icon.id} />
    </SVG>
  );
};

Icon.propTypes = {
  className: PropTypes.string,
};

Icon.defaultProps = {
  className: null,
};
