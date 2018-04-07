import * as React from 'react';
import { storiesOf } from '@storybook/react';

import { Field } from 'ui/molecules';


storiesOf('Field', module)
  .add('default', () => {
    return (
      <Field />
    );
  });

storiesOf('Field/states', module)
  .add('error', () => {
    return (
      <Field helperText={ 'Helper text' } error />
    );
  });


storiesOf('Field/attributes', module)
  .add('placeholder', () => {
    return (
      <Field placeholder={ 'Placeholder' } />
    );
  });

storiesOf('Field/tags', module)
  .add('textarea', () => {
    return (
      <Field textarea />
    );
  });

storiesOf('Field/components', module)
  .add('with label', () => {
    return (
      <Field id={ 'field' } label={ 'Label' } />
    );
  })
  .add('with label and note', () => {
    return (
      <Field id={ 'field' } label={ 'Label' } labelNote={ 'Note' } />
    );
  })
  .add('with helper text', () => {
    return (
      <Field helperText={ 'Helper text' } />
    );
  });

storiesOf('Field/other', module)
  .add('username', () => {
    return (
      <Field username />
    );
  });
