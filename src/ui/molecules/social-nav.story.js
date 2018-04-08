// @flow
import * as React from 'react';
import { storiesOf } from '@storybook/react';

import {
  twitter,
  facebook,
  medium,
  instagram,
} from 'ui/outlines';
import { SocialNav } from './social-nav';


const links = [
  { icon: twitter },
  { icon: facebook },
  { icon: medium },
  { icon: instagram },
];

storiesOf('SocialNav', module)
  .add('default', () => (
    <SocialNav links={ links } />
  ));
