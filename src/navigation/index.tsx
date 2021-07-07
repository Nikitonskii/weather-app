import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './style.css';

import Forecast from "../components/forecast";
import WeekForecast from "../components/weekForecast";

function Navigation() {
  return (
    <Router>
      <div>
        <nav>
          <ul className='Nav-container'>
						<li>
              <Link to="/weekforecast">Weather per next week</Link>
            </li>
            <li>
              <Link to="/forecast">Current Weather</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/forecast">
            <Forecast />
          </Route>
          <Route path="/weekforecast">
            <WeekForecast />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default Navigation;
