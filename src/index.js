import React from 'react';
import ReactDOM from 'react-dom';

import './styles.scss';
import App from './containers/App/index';

import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(<App />,document.getElementById('root'));
registerServiceWorker();
