import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import './App.css';


import CreateClient from './components/CreateClient/CreateClient'
import SearchClient from './components/SearchClient/SearchClient'
import SearchForm from './components/SearchClient/SearchForm';
import CreateAttentionCard from './components/SearchClient/CreateAttentionCard'
import SearchAttentionCard from './components/SearchClient/SearchAttentionCard'

function App() {
  return (

    <Router>

      <div>
        <ul>
          <li>
            <Link to="/CreateClient">Crear Usuario</Link>
          </li>
          <li>
            <Link to="/SearchClient">Buscar Usuario</Link>
          </li>
        </ul> 
        <hr />

        <Switch>
          <Route path ="/CreateClient" component={CreateClient} />
          <Route path ="/SearchClient" component={SearchClient} />
          <Route path ="/searchForm/:id" component={SearchForm} />
          <Route path ="/createCard/:id" component={CreateAttentionCard} />
          <Route path ="/searchCard/:id" component={SearchAttentionCard} />
        </Switch>
      </div>
    </Router>

    
  );
}

export default App;
