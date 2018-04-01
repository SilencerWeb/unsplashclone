import * as React from 'react';
import { storiesOf } from '@storybook/react';

import { Button, Icon } from 'ui/atoms';

import { bell } from 'ui/outlines';

storiesOf('Button', module)
  .add('default', () => {
    return (
      <Button>
        <span>I'm a button</span>
      </Button>
    );
  })
  .add('black', () => {
    return (
      <Button black>
        <span>I'm a button</span>
      </Button>
    );
  })
  .add('red', () => {
    return (
      <Button red>
        <span>I'm a button</span>
      </Button>
    );
  })
  .add('blue', () => {
    return (
      <Button blue>
        <span>I'm a button</span>
      </Button>
    );
  })
  .add('green', () => {
    return (
      <Button green>
        <span>I'm a button</span>
      </Button>
    );
  })
  .add('white transparent', () => {
    return (
      <Button whiteTransparent>
        <span>I'm a button</span>
      </Button>
    );
  })
  .add('bordered', () => {
    return (
      <Button bordered>
        <span>I'm a button</span>
      </Button>
    );
  })
  .add('white transparent + bordered + hover black', () => {
    return (
      <Button whiteTransparent hoverBlack bordered>
        <span>I'm a button</span>
      </Button>
    );
  })
  .add('disabled', () => {
    return (
      <Button disabled>
        <span>I'm a button</span>
      </Button>
    );
  })
  .add('full', () => {
    return (
      <Button full>
        <span>I'm a button</span>
      </Button>
    );
  })
  .add('icon', () => {
    return (
      <Button>
        <Icon icon={bell} height={20} />
      </Button>
    );
  })
  .add('icon + text', () => {
    return (
      <Button>
        <Icon icon={bell} height={20} />
        <span>I'm a button</span>
      </Button>
    );
  });
