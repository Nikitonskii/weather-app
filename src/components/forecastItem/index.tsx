import { ItemProps } from "../../redux/interfaces/Forecast"
import { getDayName, tempToCelcius } from '../../utils';
import './style.css'

const ForecastItem = (props: ItemProps ) => {

	const {dt_txt, weather, main} = props.props;
	const iconSrc = `http://openweathermap.org/img/wn/${weather[0].icon ? weather[0].icon : '50d' }@2x.png`;

	return (
		<div key={props.props.dt} className='ForecastItem-container'>
			<h4>
				{dt_txt ? getDayName(dt_txt): 'Enter location'}
			</h4>
			<p>
				<b>{weather[0].description ? weather[0].description : '--' }</b>
			</p>
			<img src={iconSrc} alt={weather[0].main}/>
			<p>
				Temp: <b>{main.temp ? tempToCelcius(main.temp ) : '--'}<span>&#8451;</span></b>
			</p>
			<p>
				Feels like: <b>{main.feels_like ? (tempToCelcius(main.feels_like))  : '--'}<span>&#8451;</span></b>
			</p>
			<p>
				Humidity: <b>{main.humidity ? main.humidity : '--'}</b>
			</p>
		</div>
	)
}

export default ForecastItem;