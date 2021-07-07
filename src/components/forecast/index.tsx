import React from 'react';
import './style.css';
import { useSelector } from 'react-redux';
import { AppState } from '../../redux/store/index';

const Forecast: React.FC = () => {

	const forecasts = useSelector((state: AppState) => state.forecasts )
	const {icon, description, main } = forecasts.forecasts.weather[0]
	const {feels_like, humidity, pressure, temp} = forecasts.forecasts.main
	console.log(forecasts.forecasts)
	const iconSrc = `http://openweathermap.org/img/wn/${icon}@2x.png`

  return (
    <div className="Forecast-container">
			<div>
				<img src={iconSrc} alt={main}/>
				<h2>{forecasts.forecasts.name}</h2>
				<h3>{description}</h3>
			</div>
			<div>
				<p>Current temp: {Math.round(temp-273)} <span>&#8451;</span></p>
				<p>Feels like: {Math.round(feels_like-273)}</p>
				<p>Atmospheric pressure: {pressure}</p>
				<p>Humidity: {humidity}</p>
				<p>Wind: {forecasts.forecasts.wind.speed} ms</p>
			</div>
    </div>
  );
}

export default Forecast;