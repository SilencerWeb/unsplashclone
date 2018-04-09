// @flow
import * as React from 'react';
import styled, { css } from 'styled-components';

import { SocialNav } from 'ui/molecules';

import { color, transition } from 'ui/theme';

import {
  twitter,
  facebook,
  medium,
  instagram,
} from 'ui/outlines';


type link = {
  text: string,
  props?: {
    [key: string]: any
  }
}

type props = {
  className?: string,
  links: Array<link>,
  socialNav?: boolean,
  socialNavLinks?: Array<{ [key: 'string']: any }>,
  right?: boolean
};

const Wrapper = styled.div`
  position: relative;
  background-color: #000000;
  border-radius: 0.3rem;
  padding-top: 0.9rem;
  padding-right: 1.6rem;
  padding-bottom: 0.9rem;
  padding-left: 1.6rem;
  
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 2rem;
    width: 0;
    height: 0;
    border: 0.5rem solid transparent;
    border-top-width: 0;
    border-bottom-color: #000000;
    transform: translateY(-100%);
  }
  
  ${(p) => p.right && css`
    text-align: right;
    
    &:before {
      left: auto;
      right: 2rem;
    }
  `}
`;

const List = styled.ul`
  list-style-type: none;
  padding-left: 0;
  margin-top: 0;
  margin-bottom: 0;
  
  a {
    color: ${color.tertiary};
    transition: ${transition};
    
    &:hover {
      color: ${color.secondary};
    }
  }
`;

const Link = styled.a`
  display: block;
  font-size: 1.3rem;
  text-decoration: none;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
`;

export const Dropdown = (props: props) => {
  const items = props.links && props.links.map((link) => {
    return (
      <li key={ link.text }>
        <Link { ...link.props }>
          { link.text }
        </Link>
      </li>
    );
  });

  if (props.socialNav) {
    const defaultSocialNavLinks = [
      { icon: twitter },
      { icon: facebook },
      { icon: medium },
      { icon: instagram },
    ];

    const socialNavLinks = props.socialNavLinks || defaultSocialNavLinks;

    const socialNav = props.socialNav && <SocialNav links={ socialNavLinks } />;

    // eslint-disable-next-line function-paren-newline
    items.push(
      <li key={ 'social-nav' }>
        { socialNav }
      </li>,
      // eslint-disable-next-line function-paren-newline
    );
  }

  return (
    <Wrapper className={ props.className } right={ props.right }>
      <List>
        { items }
      </List>
    </Wrapper>
  );
};
