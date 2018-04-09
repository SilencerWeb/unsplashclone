// @flow
import * as React from 'react';
import { storiesOf } from '@storybook/react';

import { Search } from './search';


const handleSearchSubmit = (e) => {
  e.preventDefault();
};

storiesOf('Search', module)
  .add('default', () => (
    <Search onSubmit={ handleSearchSubmit } />
  ));

storiesOf('Search/themes', module)
  .add('small', () => (
    <Search small onSubmit={ handleSearchSubmit } />
  ));
