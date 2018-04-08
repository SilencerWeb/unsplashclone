// @flow
import * as React from 'react';
import { storiesOf } from '@storybook/react';

import { Dropdown } from './dropdown';


const links = [
  { text: 'Community' },
  { text: 'Store' },
  { text: 'History' },
  { text: 'Made with Unsplash' },
  { text: 'Tag photos' },
  { text: 'API Developers' },
  { text: 'License' },
  { text: 'Help' },
];

storiesOf('Dropdown', module)
  .add('default', () => (
    <Dropdown links={ links } />
  ));

storiesOf('Dropdown/theme', module)
  .add('right', () => (
    <Dropdown links={ links } right />
  ));

storiesOf('Dropdown/components', module)
  .add('with social nav', () => (
    <Dropdown links={ links } socialNav />
  ));
