// @flow
import * as React from 'react';
import { storiesOf } from '@storybook/react';

import { Button, Icon } from 'ui/atoms';

import { bell } from 'ui/outlines';


storiesOf('Button', module)
  .add('default', () => {
    return (
      <Button>
        <span>Button</span>
      </Button>
    );
  });

storiesOf('Button/themes', module)
  .add('black', () => {
    return (
      <Button black>
        <span>Button</span>
      </Button>
    );
  })
  .add('tomato', () => {
    return (
      <Button tomato>
        <span>Button</span>
      </Button>
    );
  })
  .add('blue', () => {
    return (
      <Button blue>
        <span>Button</span>
      </Button>
    );
  })
  .add('green', () => {
    return (
      <Button green>
        <span>Button</span>
      </Button>
    );
  })
  .add('white transparent', () => {
    return (
      <Button whiteTransparent>
        <span>Button</span>
      </Button>
    );
  })
  .add('bordered', () => {
    return (
      <Button bordered>
        <span>Button</span>
      </Button>
    );
  })
  .add('white transparent + bordered + hover black', () => {
    return (
      <Button whiteTransparent hoverBlack bordered>
        <span>Button</span>
      </Button>
    );
  })
  .add('full', () => {
    return (
      <Button full>
        <span>Button</span>
      </Button>
    );
  });

storiesOf('Button/states', module)
  .add('disabled', () => {
    return (
      <Button disabled>
        <span>Button</span>
      </Button>
    );
  });

storiesOf('Button/components', module)
  .add('as icon', () => {
    return (
      <Button>
        <Icon icon={ bell } height={ 20 } />
      </Button>
    );
  })
  .add('with icon', () => {
    return (
      <Button>
        <Icon icon={ bell } height={ 20 } />
        <span>Button</span>
      </Button>
    );
  });
