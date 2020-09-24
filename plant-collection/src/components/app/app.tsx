import React from 'react';
import Header from '../header';
import Main from '../main'
import { BrowserRouter as Router, Switch, Route, match as routerMatch } from 'react-router-dom';
import Product from '../product';
import './app.css'
import Form from '../admin/form';
import Navigation from '../admin/navigation';


export default (
  function App() {
    return (
      <div className="app-body">
        <Router>
          <Header></Header>
          <div className="app-container">
            <Switch>
              <Route path="/product/:id">
                <Product />
              </Route>
              <Route path="/admin" component={AdminRouter} />
              <Route path="/">
                <Main />
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    )
  }
)


const AdminRouter = ({ match }: { match: routerMatch }) => {
  return (
    <div>
      <Navigation></Navigation>

      <Route exact path={match.url}>
      </Route>
      <Route path={match.url + '/add-new-plant'}>
        <Form></Form>
      </Route>
    </div>

  )
}