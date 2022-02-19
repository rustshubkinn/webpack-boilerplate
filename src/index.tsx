import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { App } from './App';

ReactDOM.render(
  <React.StrictMode>
    <App title={'is a title'} href={'https://www.nasa.gov'} />
  </React.StrictMode>,
  document.getElementById('root')
);
