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
        </Switch>
      </div>
    </Router>

    
  );
}

export default App;
