import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

import { color } from 'ui/theme';

export const HelperText = styled.p`
  font-size: 12px;
  color: ${color.secondary};
  margin-top: 0;
  margin-bottom: 0;

  svg {
    vertical-align: middle;
    margin-right: 5px;

    &:last-child {
      margin-right: 0;
    }
  }

  span {
    vertical-align: middle;
  }

  ${p => p.error && css`
    color: ${color.primary};
    background-color: #f9ded8;
    border-radius: 4px;
    padding-top: 3px;
    padding-right: 9px;
    padding-bottom: 3px;
    padding-left: 9px;
  `};
`;

HelperText.propTypes = {
  error: PropTypes.bool,
};

HelperText.defaultProps = {
  error: false,
};