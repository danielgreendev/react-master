import { BrowserRouter as Router, Route, Switch, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import React from 'react'

import Landing from './component/layout/Landing'

function App() {
  return (
    <div>
      <Provider store={store}>
        <Router>
          <Route exact path="/" component={Landing} />
          <Route exact path="/login" component={Landing} />
          <Route exact path="/register" component={Landing} />
          <Route exact path="/other" component={Landing} />
        </Router>
      </Provider>
    </div>
  )
}

export default App
