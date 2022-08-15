import React from 'react'
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ReposPage from './pages/ReposPage';
import history from './utils/historyUtils'
import { styled } from '@mui/material/styles';

import {
  Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from './components/Header';

const Wrapper = styled('div')(({ theme }: { theme: any }) => ({
  padding: theme.spacing(3),
}));


const App: React.FC = () => {

  return (
    <>
      <Header />
      <Wrapper>
        <Router history={history}>
          <Switch >
            <Route exact path='/search-github-repos-app' component={HomePage} />
            <Route path='/search-github-repos-app/repos' component={ReposPage} />
          </Switch>
        </Router>
      </Wrapper>
    </>

  )
}

export default App