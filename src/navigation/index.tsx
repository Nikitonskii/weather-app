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
						<li >
              <Link  className="Navigation-link" to="/weekforecast">Next 5 days</Link>
            </li>
            <li>
              <Link className="Navigation-link" to="/forecast">Current Weather</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/forecast">
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
