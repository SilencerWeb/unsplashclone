import * as React from 'react';
import { storiesOf } from '@storybook/react';

import { Field } from 'ui/molecules';

storiesOf('Field', module)
  .add('default', () => {
    return <Field />;
  })
  .add('with placeholder', () => {
    return <Field placeholder={'placeholder'} />;
  })
  .add('with label', () => {
    return <Field id={'field'} label={'label'} />;
  })
  .add('with label and note', () => {
    return <Field id={'field'} label={'label'} labelNote={'note'} />;
  })
  .add('with helper text', () => {
    return <Field helperText={'helper text'} />;
  })
  .add('error', () => {
    return <Field helperText={'helper text'} error />;
  })
  .add('textarea', () => {
    return <Field textarea />;
  })
  .add('username', () => {
    return <Field username />;
  });
