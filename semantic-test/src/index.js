import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import 'semantic-ui-css/semantic.min.css';
//import App from './App';
import HomepageLayout from './HomepageLayout'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<HomepageLayout />, document.getElementById('root'));
registerServiceWorker();
