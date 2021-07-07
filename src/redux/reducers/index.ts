import { combineReducers } from 'redux';
import { getForecastReducer } from './ForecastReducer';

const rootReducer = combineReducers({
  forecasts: getForecastReducer
});

export default rootReducer;