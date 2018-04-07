const css = String.raw;

export const font = {
  family: {
    primary:
      '-apple-system, BlinkMacSystemFont, San Francisco, Helvetica Neue, Helvetica, Ubuntu, Roboto, Noto, Segoe UI, Arial, sans-serif',
  },
};

export const color = {
  primary: '#111111',
  secondary: '#999999',
  tertiary: '#ffffff',
};

export const transition = '0.3s';

export const globalStyles = css`
  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
    -ms-overflow-style: scrollbar;
  }

  body {
    position: relative;
    min-width: 32rem;
    font-family: ${font.family.primary};
    font-size: 1.5rem;
    font-weight: 400;
    line-height: 1.6;
    color: ${color.primary};
    overflow-x: hidden;
  }

  a {
    color: ${color.secondary};
    text-decoration: underline;
    transition: ${transition};

    &:hover {
      color: ${color.primary};
    }
  }
`;
