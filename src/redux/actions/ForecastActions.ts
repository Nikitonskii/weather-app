import {
	GET_FORECAST,
	GET_WEEK_FORECAST,
	ForecastActionTypes,
	WeekForecastActionType,
	FAIL_REQUEST,
	FailRequestType,
} from '../types/ForecastTypes';
import {  Forecast, WeekForecast } from '../interfaces/Forecast';


export const getForecastWeather = (forecasts: Forecast): ForecastActionTypes => {
  return {
    type: GET_FORECAST,
    payload: forecasts
  }
}

export const getWeekWeather = (weekForecast: WeekForecast): WeekForecastActionType => {
  return {
    type: GET_WEEK_FORECAST,
    payload: weekForecast
  }
}

export const failRequest = (error: string | null): FailRequestType => {
	return {
		type: FAIL_REQUEST,
		payload: error
	}
}

