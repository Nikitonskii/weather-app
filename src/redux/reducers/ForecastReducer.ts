import {
  GET_FORECAST,
	GET_WEEK_FORECAST,
  GetForecastStateType,
  ForecastActionTypes,
	WeekForecastActionType,
	FAIL_REQUEST,
	FailRequestType
} from '../types/ForecastTypes';

const initialStateGetForecast: GetForecastStateType = {
  forecasts: {
    weather: [{
      id: 0,
      main: '',
      description: '',
      icon: '',
    }],
    main: {
      temp: 0,
      feels_like: 0,
      temp_min: 0,
      temp_max: 0,
      pressure: 0,
      humidity: 0,
    },
		visibility: 0,
		wind: {
			speed: 0,
			deg: 0,
		},
		timezone: 0,
		id: 0,
		name: '',
		cod: 0,
  },
	weekForecast: {
		list: [
			{
				dt: 0,
				main: {
					temp: 0,
					feels_like: 0,
					temp_min: 0,
					temp_max: 0,
					pressure: 0,
					sea_level: 0,
					grnd_level:0,
					humidity: 0,
					temp_kf: 0
				},
				weather: [
					{
						id: 0,
						main: '',
						description: '',
						icon: ''
					}
				],
				clouds: {
					all: 0
				},
				wind: {
					speed: 0,
					deg: 0,
					gust: 0
				},
				visibility: 0,
				pop: 0,
				dt_txt: ''
			}
		]	
	},
	error: ''
};

export const getForecastReducer = (
  state = initialStateGetForecast,
  action:  ForecastActionTypes | WeekForecastActionType | FailRequestType
): GetForecastStateType => {
  switch (action.type) {
    case GET_FORECAST:
      return {
        ...state,
				error: null,
        forecasts: action.payload
      };
		case GET_WEEK_FORECAST:
			return {
				...state,
				error: null,
				weekForecast: action.payload
			};
		case FAIL_REQUEST:
			return {
				...state,
				error: action.payload
			}
    default:
      return state;
  }
};