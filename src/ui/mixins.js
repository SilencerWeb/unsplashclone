const css = String.raw;

export const breakpoints = {
  up: {
    xs: 48,
    sm: 76.8,
    md: 102.4,
    lg: 128,
  },
  down: {
    xs: 47.99,
    sm: 76.79,
    md: 102.39,
    lg: 127.99,
  },
};

export const media = {
  up: {
    xs: (...args) => css`
      @media (min-width: ${breakpoints.up.xs}rem) {
        ${css(...args)};
      }
    `,
    sm: (...args) => css`
      @media (min-width: ${breakpoints.up.sm}rem) {
        ${css(...args)};
      }
    `,
    md: (...args) => css`
      @media (min-width: ${breakpoints.up.md}rem) {
        ${css(...args)};
      }
    `,
    lg: (...args) => css`
      @media (min-width: ${breakpoints.up.lg}rem) {
        ${css(...args)};
      }
    `,
  },
  down: {
    xs: (...args) => css`
      @media (max-width: ${breakpoints.down.xs}rem) {
        ${css(...args)};
      }
    `,
    sm: (...args) => css`
      @media (max-width: ${breakpoints.down.sm}rem) {
        ${css(...args)};
      }
    `,
    md: (...args) => css`
      @media (max-width: ${breakpoints.down.md}rem) {
        ${css(...args)};
      }
    `,
    lg: (...args) => css`
      @media (max-width: ${breakpoints.down.lg}rem) {
        ${css(...args)};
      }
    `,
  },
};
