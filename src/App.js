import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import {Home} from './components/Home';
import {CandidateHome} from './components/CandidateHome';
import { Interview } from './components/Interview';
import { Results } from './components/Results';
import { GlobalProvider } from './context/GlobalState';
import { CandidateProvider } from './context/CandidateContext';


import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div>
      <GlobalProvider>
      <CandidateProvider>
      <Router>
         <Switch>
      <Route path="/candidateHome" component={CandidateHome} />
      <Route path="/interview" component={Interview} />
      <Route path="/results" component={Results} />
      <Route path="/" component={Home} />
      </Switch>
      </Router>
      </CandidateProvider>
      </GlobalProvider>
     
    </div>
  );
}

export default App;
