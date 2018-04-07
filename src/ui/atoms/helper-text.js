import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

import { color } from 'ui/theme';


export const HelperText = styled.p`
  font-size: 1.2rem;
  color: ${color.secondary};
  margin-top: 0;
  margin-bottom: 0;

  svg {
    vertical-align: middle;
    margin-right: 0.5rem;

    &:last-child {
      margin-right: 0;
    }
  }

  span {
    vertical-align: middle;
  }

  ${(p) => p.error && css`
    color: ${color.primary};
    background-color: #f9ded8;
    border-radius: 0.4rem;
    padding-top: 0.3rem;
    padding-right: 0.9rem;
    padding-bottom: 0.3rem;
    padding-left: 0.9rem;
  `};
`;

HelperText.propTypes = {
  error: PropTypes.bool,
};

HelperText.defaultProps = {
  error: false,
};
