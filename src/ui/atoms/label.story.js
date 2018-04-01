import * as React from 'react';
import { storiesOf } from '@storybook/react';

import { Label } from 'ui/atoms';

storiesOf('Label', module)
  .add('default', () => {
    return <Label>Interests</Label>;
  })
  .add('with note', () => {
    return (
      <Label>
        Interests
        <span> (maximum 5)</span>
      </Label>
    );
  });
