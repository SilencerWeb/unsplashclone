// @flow
import * as React from 'react';
import { storiesOf } from '@storybook/react';

import { Label } from 'ui/atoms';


storiesOf('Label', module)
  .add('default', () => {
    return (
      <Label>Label</Label>
    );
  });

storiesOf('Label/components', module)
  .add('with note', () => {
    return (
      <Label>
        Label
        <span> (note)</span>
      </Label>
    );
  });
