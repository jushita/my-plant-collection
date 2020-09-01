import React from 'react';
import Header from '../header';
import Main from '../main'
import Footer from '../footer'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Product from '../product';

export default (
  function App() {
    return (
      <>
        <Router>
          <Header></Header>
          <div>
            <Switch>
              <Route path="/product/:id">
                <Product />
              </Route>
              <Route path="/">
                <Main />
              </Route>
            </Switch>
          </div>
        </Router>
        <Footer></Footer>
      </>
    )
  }
)
