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
          <header className="header-link">
            <NavLink to="/home" className="home-link">
              Home
            </NavLink>
            <NavLink to="/teams" className="teams-link">
              Teams
            </NavLink>
            <NavLink to="/players" className="players-link">
              Players
            </NavLink>
          </header>
          <Switch>
            <Route exact path="/teams" component={Teams} />
            <Route exact path="/teams/:id" component={Team} />
            <Route exact path="/players" component={Players} />
            <Route exact path="/players/:id" component={Player} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/" />
          </Switch>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
