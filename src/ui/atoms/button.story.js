import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Button, Icon } from 'ui/atoms';

import { bell } from 'ui/outlines';

storiesOf('Button', module)
  .add('default', () => (
    <Button onClick={action('clicked')}>
      <span>I'm a button</span>
    </Button>
  ))
  .add('black', () => (
    <Button black onClick={action('clicked')}>
      <span>I'm a button</span>
    </Button>
  ))
  .add('red', () => (
    <Button red onClick={action('clicked')}>
      <span>I'm a button</span>
    </Button>
  ))
  .add('blue', () => (
    <Button blue onClick={action('clicked')}>
      <span>I'm a button</span>
    </Button>
  ))
  .add('green', () => (
    <Button green onClick={action('clicked')}>
      <span>I'm a button</span>
    </Button>
  ))
  .add('white transparent', () => (
    <Button whiteTransparent onClick={action('clicked')}>
      <span>I'm a button</span>
    </Button>
  ))
  .add('bordered', () => (
    <Button bordered onClick={action('clicked')}>
      <span>I'm a button</span>
    </Button>
  ))
  .add('white transparent + bordered + hover black', () => (
    <Button whiteTransparent hoverBlack bordered onClick={action('clicked')}>
      <span>I'm a button</span>
    </Button>
  ))
  .add('disabled', () => (
    <Button disabled onClick={action('clicked')}>
      <span>I'm a button</span>
    </Button>
  ))
  .add('full', () => (
    <Button full onClick={action('clicked')}>
      <span>I'm a button</span>
    </Button>
  ))
  .add('icon', () => (
    <Button onClick={action('clicked')}>
      <Icon icon={bell} height={20} />
    </Button>
  ))
  .add('icon + text', () => (
    <Button onClick={action('clicked')}>
      <Icon icon={bell} height={20} />
      <span>I'm a button</span>
    </Button>
  ));
