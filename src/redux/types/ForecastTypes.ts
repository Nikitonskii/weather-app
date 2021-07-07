import { Forecast, WeekForecast } from '../interfaces/Forecast';

export const GET_FORECAST = 'GET_FORECAST';
export const GET_WEEK_FORECAST = 'GET_WEEK_FORECAST';

export interface GetForecastStateType {
  forecasts: Forecast;
	weekForecast: WeekForecast;
}

interface GetForecastActionType {
  type: typeof GET_FORECAST;
  payload: Forecast;
}

interface GetWeekForecastActionType {
  type: typeof GET_WEEK_FORECAST;
  payload: WeekForecast;
}

export type ForecastActionTypes = GetForecastActionType;
export type WeekForecastActionType = GetWeekForecastActionType;