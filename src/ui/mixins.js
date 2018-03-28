const css = String.raw;

export const placeholder = (...args) => css`
  &::placeholder {
    ${ css(...args) }
  }

  &::-webkit-input-placeholder {
    ${ css(...args) }
  }

  &:-moz-placeholder {
    ${ css(...args) }
  }

  &::-moz-placeholder {
    ${ css(...args) }
  }

  &:-ms-input-placeholder {
    ${ css(...args) }
  }
`;