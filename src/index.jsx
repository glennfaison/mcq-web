import React from 'react';
import { hydrate, render } from 'react-dom';

import App from './app';
import * as serviceWorker from './serviceWorker';

const rootElement = document.getElementById('root');
rootElement.hasChildNodes()
  ? hydrate(<App />, rootElement)
  : render(<App />, rootElement);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();