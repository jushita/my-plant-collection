import React from 'react';
import Header from '../header';
import Main from '../main'
import Footer from '../footer'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Product from '../product';
import './app.css'
import Form from '../form';


export default (
  function App() {
    return (
      <div className="app-body">
        <Router>
          <Header></Header>
          <div className="app-container">
            <Switch>
              <Route exact path="/">
                <Main />
              </Route>
              <Route exact path="/form">
                <Form />
              </Route>

              <Route path="/product/:id">
                <Product />
              </Route>

            </Switch>
          </div>
        </Router>
        <Footer></Footer>
      </div>
    )
  }
)


