import React from 'react';
import './style.css';
import { useSelector } from 'react-redux';
import { AppState } from '../../redux/store/index';
import { WeekForecastItem } from '../../redux/interfaces/Forecast';
import ForecastItem from '../forecastItem';
import { getDay } from '../../utils';

const WeekForecast = () => {

	const weekForecasts = useSelector((state: AppState) => state.forecasts.weekForecast );
	let day: number | null = null;
	const forecastsList : WeekForecastItem[] = [];

	weekForecasts.list.forEach((forecast: WeekForecastItem) => {
    if(day !== getDay(forecast.dt_txt)){
      day = getDay(forecast.dt_txt)
      forecastsList.push(forecast)
    }else {
      return
    }
 });

 console.log('forecast list from week',forecastsList) 	// <ForecastItem props={forecast} /> 

  return (
    <div className="WeekForecast-container">
      <h2>There are predictions for whole week</h2>
			<div className='Forecastlist-container'>
				{forecastsList.map((forecast: WeekForecastItem) =>  <ForecastItem props={forecast} /> )}
			</div>
    </div>
  );
}

export default WeekForecast;