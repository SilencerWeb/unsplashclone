// @flow
import * as React from 'react';
import styled, { css } from 'styled-components';

import { Icon } from 'ui/atoms/index';


type link = {
  icon: any,
  props?: {
    [key: string]: any
  }
}

type props = {
  className?: string,
  links: Array<link>
};

const Wrapper = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0;
  list-style-type: none;
  padding-left: 0;
  margin-top: 0;
  margin-bottom: 0;
`;

const Link = styled.a`
  display: inline-block;
  vertical-align: top;
  padding-top: 0.4rem;
  padding-right: 0.4rem;
  padding-bottom: 0.4rem;
  padding-left: 0.4rem;
`;

export const SocialNav = (props: props) => {
  const items = props.links && props.links.map((link) => {
    return (
      <li key={ link.icon.id }>
        <Link { ...link.props }>
          <Icon icon={ link.icon } height={ 17 } />
        </Link>
      </li>
    );
  });

  return (
    <Wrapper className={ props.className }>
      { items }
    </Wrapper>
  );
};
