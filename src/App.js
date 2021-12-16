import { Route } from 'react-router-dom';
import { BrowserRouter, NavLink, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';
import Home from './views/Home';
import Teams from './views/Teams';
import Team from './views/Team';
import Players from './views/Players';
import Player from './views/Player';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <header>
            <NavLink to="/teams" exact>
              Teams
            </NavLink>
            <NavLink to="/players" exact>
              Players
            </NavLink>
          </header>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/teams" exact component={Teams} />
            <Route path="/teams/:id" exact component={Team} />
            <Route path="/players" exact component={Players} />
            <Route path="/players/:id" exact component={Player} />
          </Switch>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
