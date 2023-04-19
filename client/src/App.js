import { BrowserRouter as Router, Route, Switch, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import React from 'react'

import Landing from './component/layout/Landing'
import Login from './component/auth/Login'
import Register from './component/auth/Register'
import Other from './component/other/Other'
import Navbar from './component/layout/Navbar'
import Footer from './component/layout/Footer'

import './App.css'

function App() {
  return (
    <div>
      <Provider store={store}>
        <Router>
          <div className='bg'>
            <Navbar />
            <Route exact path="/" component={Landing} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/other" component={Other} />
          </div>
        </Router>
      </Provider>
      <Footer />
    </div>
  )
}

export default App
