import React from 'react';
import './style.css';
import { useSelector } from 'react-redux';
import { AppState } from '../../redux/store/index';
import { tempToCelcius } from '../../utils';

const Forecast = () => {

	const forecasts = useSelector((state: AppState) => state.forecasts )
	const {icon, description, main } = forecasts.forecasts.weather[0]
	const {feels_like, humidity, pressure, temp} = forecasts.forecasts.main
	const iconSrc = `http://openweathermap.org/img/wn/${icon ? icon : '50d' }@2x.png`

  return (
    <div className="Forecast-container">
			<div>
				<img src={iconSrc} alt={main}/>
				<h2>{forecasts.forecasts.name}</h2>
				<h3>{description}</h3>
			</div>
			<div>
				<p>
					Current temp: <b>{temp ? tempToCelcius(temp): '--'} <span>&#8451;</span></b>
				</p>
				<p>
					Feels like: <b>{feels_like ? tempToCelcius(feels_like): '--'} <span>&#8451;</span></b>
				</p>
				<p>
					Atmospheric pressure: <b>{pressure ? pressure : '--'} Pa</b>
				</p>
				<p>
					Humidity: <b>{humidity ? humidity : '--'}</b>
				</p>
				<p>
					Wind: <b> {forecasts.forecasts.wind.speed ? forecasts.forecasts.wind.speed : '--'} ms</b>
				</p>
			</div>
    </div>
  );
}

export default Forecast;