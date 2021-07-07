import { getForecastWeather, getWeekWeather} from '../actions/ForecastActions';
import { Dispatch } from 'redux';
import { ForecastActionTypes, WeekForecastActionType } from '../types/ForecastTypes';
import axios from 'axios';

export const getForecast = (city: string) => {
  return function (dispatch: Dispatch<ForecastActionTypes>) {
    const FORECAST_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=30e1a037e0673a125e0be84133f14fd6`;
    axios.get(FORECAST_URL)
    .then(res => dispatch(getForecastWeather(res.data)))
    .catch(e => console.log(e))
  };
}

export const getWeekForecast = (city: string) => {
  return function (dispatch: Dispatch<WeekForecastActionType>) {
    const WEEK_FORECAST_URL = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=30e1a037e0673a125e0be84133f14fd6`;
    axios.get(WEEK_FORECAST_URL)
    .then(res => dispatch(getWeekWeather(res.data)))
    .catch(e => console.log(e))
  };
}