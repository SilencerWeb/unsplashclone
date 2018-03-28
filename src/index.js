import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { injectGlobal } from 'styled-components';

import { globalStyles } from 'ui/theme';

import nomralize from 'normalize.css/normalize.css';

injectGlobal`${nomralize} ${globalStyles}`;

ReactDOM.render(<div />, document.getElementById('root'));
