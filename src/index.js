import React from 'react'
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import globalStore from './services/GlobalStore'
import Root from './routes'

const history = syncHistoryWithStore(browserHistory, globalStore)

ReactDOM.render(
  <Root store={globalStore} history={history} />, document.getElementById('root')
);
