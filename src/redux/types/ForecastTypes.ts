import { Forecast, WeekForecast } from '../interfaces/Forecast';

export const GET_FORECAST = 'GET_FORECAST';
export const GET_WEEK_FORECAST = 'GET_WEEK_FORECAST';
export const FAIL_REQUEST = 'FAIL_REQUEST;'

export interface GetForecastStateType {
  forecasts: Forecast;
	weekForecast: WeekForecast;
	error: string | null;
}

interface GetForecastActionType {
  type: typeof GET_FORECAST;
  payload: Forecast;
}

interface GetWeekForecastActionType {
  type: typeof GET_WEEK_FORECAST;
  payload: WeekForecast;
}

interface FailRequestActionType {
  type: typeof FAIL_REQUEST;
  payload: string | null;
}

export type ForecastActionTypes = GetForecastActionType;
export type WeekForecastActionType = GetWeekForecastActionType;
export type FailRequestType = FailRequestActionType;