import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { injectGlobal } from 'styled-components';

import { Icon } from 'ui/atoms';

import { globalStyles } from 'ui/theme';

import { bell } from 'ui/outlines';

import normalize from 'normalize.css/normalize.css';


// eslint-disable-next-line no-unused-expressions
injectGlobal`${normalize} ${globalStyles}`;

ReactDOM.render(
  <div>
    <Icon icon={ bell } />
  </div>,
  document.getElementById('root'),
);
