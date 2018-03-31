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
    -ms-overflow-style: scrollbar;
  }

  body {
    position: relative;
    min-width: 320px;
    font-family: ${font.family.primary};
    font-size: 15px;
    font-weight: 400;
    line-height: 1.6;
    color: ${color.primary};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;
  }
`;