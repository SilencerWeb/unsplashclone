import * as React from 'react';
import { storiesOf } from '@storybook/react';

import { TextField } from 'ui/atoms';


storiesOf('TextField', module)
  .add('default', () => {
    return (
      <TextField />
    );
  });

storiesOf('TextField/attributes', module)
  .add('placeholder', () => {
    return (
      <TextField placeholder={ 'Placeholder' } />
    );
  });

storiesOf('TextField/tags', module)
  .add('textarea', () => {
    const Textarea = TextField.withComponent('textarea');

    return (
      <Textarea />
    );
  })
  .add('div', () => {
    const Div = TextField.withComponent('div');

    return (
      <Div />
    );
  });
