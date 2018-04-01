import * as React from 'react';
import { storiesOf } from '@storybook/react';

import { HelperText, Icon } from 'ui/atoms';

import { info } from 'ui/outlines';

storiesOf('HelperText', module)
  .add('default', () => {
    return (
      <HelperText>
        <span>
          Your interests are generated from the types of photos you like, collect, and contribute.
          They will appear on your profile in the next few days.
        </span>
      </HelperText>
    );
  })
  .add('error', () => {
    return (
      <HelperText error>
        <span>
          Your interests are generated from the types of photos you like, collect, and contribute.
          They will appear on your profile in the next few days.
        </span>
      </HelperText>
    );
  })
  .add('icon + text', () => {
    return (
      <HelperText>
        <Icon icon={info} height={12} />
        <span>
          Your interests are generated from the types of photos you like, collect, and contribute.
          They will appear on your profile in the next few days.
        </span>
      </HelperText>
    );
  });
