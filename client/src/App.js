import React, { Component } from 'react';
import List from './components/List/List'
import UploadPage from './components/UploadPage/UploadPage'
import NotFound from './components/NotFound/NotFound'
import { Route, Switch } from 'react-router-dom'
import './App.css';
import { Helmet } from 'react-helmet';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Helmet>
        <link rel="icon" href="" type="image"/>
      </Helmet>
      <Switch>
        <Route exact path='/' component={List} />
        <Route exact path='/upload' component={UploadPage} />
        <Route path="*" component={NotFound} />
      </Switch>
      </div>
    );
  }
}

export default App;
