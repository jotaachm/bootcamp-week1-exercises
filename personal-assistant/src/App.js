import React from 'react';
import MainPage from './containers/mainpage';
import GreetingPage from './containers/greeting';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Theme from './theme';
// import COMPONENT from 'FILEPATH'

const App = () => (
  <Theme>
    <BrowserRouter>
      <Switch>
        <Route path='/todo'><MainPage /></Route>
        <Route path='/'><GreetingPage /></Route>
      </Switch>
    </BrowserRouter>
  </Theme>
)

export default App
