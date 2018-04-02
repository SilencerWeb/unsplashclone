import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

import { color } from 'ui/theme';

export const Label = styled.label`
  display: inline-block;
  vertical-align: top;

  span {
    color: ${color.secondary};
  }
`;

Label.propTypes = {};

Label.defaultProps = {};