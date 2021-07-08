import React from 'react';
import { useSelector } from 'react-redux';
import { AppState } from './redux/store';
import './App.css';

import Input from './components/input';
import Navigation from './navigation';

function App() {

	const forecasts = useSelector((state: AppState) => state.forecasts );
	const error = useSelector((state: AppState) => state.forecasts.error );

	const {description} = forecasts.forecasts.weather[0];
  return (
    <div className={ description === 'rain' || description === 'light rain' ? "App-rain" : "App"}>
      <header className="App-header">
				<Input />
				{error ? <h3 className="App-error">Perhaps there is no such city or you have connection problems</h3>: null}
      </header>
			<Navigation />
    </div>
  );
}

export default App;
