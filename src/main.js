// From dependencies
import { render } from 'react-dom';
import React from 'react';
import { Router } from 'react-router';
import { Provider } from 'react-redux';

import { store, history } from './store/configureStore';

// From App
import './styles/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import rootReducer from './reducers';
import routes from './routes';

const router = (
  <Provider store={store}>
    <Router history={history} >
      {routes}
    </Router>
  </Provider>
);

render(router, document.querySelector('#app'));
