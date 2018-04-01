import * as React from 'react';
import { storiesOf } from '@storybook/react';

import { TextField } from 'ui/atoms';

storiesOf('Field', module)
  .add('default', () => {
    return <TextField />;
  })
  .add('textarea', () => {
    const Textarea = TextField.withComponent('textarea');

    return <Textarea />;
  })
  .add('div', () => {
    const Div = TextField.withComponent('div');

    return <Div />;
  });
