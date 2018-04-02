import * as React from 'react';
import { storiesOf } from '@storybook/react';

import { HelperText, Icon } from 'ui/atoms';

import { info } from 'ui/outlines';

storiesOf('HelperText', module)
  .add('default', () => {
    return (
      <HelperText>
        <span>
          Helper text
        </span>
      </HelperText>
    );
  });

storiesOf('HelperText/states', module)
  .add('error', () => {
    return (
      <HelperText error>
        <span>
          Helper text
        </span>
      </HelperText>
    );
  });

storiesOf('HelperText/components', module)
  .add('with icon', () => {
    return (
      <HelperText>
        <Icon icon={ info } height={ 12 }/>
        <span>
          Helper text
        </span>
      </HelperText>
    );
  });