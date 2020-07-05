import React, { Suspense, createContext, useState } from 'react';
import { Router, Switch, Route, Redirect } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import { Register, Login, Dashboard, Quizzes, Courses, Topics } from './pages';
import { routes } from './constants';

import './assets/styles/index.css';
import './assets/styles/tailwind.generated.css';

const history = createBrowserHistory();
export const AppContext = createContext(null);

const App = () => {
  const [thisUser, setThisUser] = useState(null);

  const defaultAppContext = { thisUser, setThisUser, history };

  return (
    <AppContext.Provider value={defaultAppContext}>
      <Router history={history}>
        <Suspense fallback='Loading...'>
          <Switch>
            <Route exact path={routes.login}>
              <Login />
            </Route>
            <Route exact path={routes.register} >
              <Register />
            </Route>
            <Route exact path={routes.dashboard} >
              <Dashboard />
            </Route>
            <Route exact path={routes.quizzes} >
              <Quizzes />
            </Route>
            <Route exact path={routes.courses} >
              <Courses />
            </Route>
            <Route exact path={routes.topics} >
              <Topics />
            </Route>
            <Redirect to={routes.landing} />
          </Switch>
        </Suspense>
      </Router>
    </AppContext.Provider>
  );
};

export default App;
