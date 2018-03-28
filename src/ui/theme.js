const css = String.raw;

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
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;
  }
`;