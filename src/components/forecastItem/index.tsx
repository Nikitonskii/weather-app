import { ItemProps } from "../../redux/interfaces/Forecast"
import { getDay, getDayName } from '../../utils';
import './style.css'

const ForecastItem = (props: ItemProps ) => {
	const iconSrc = `http://openweathermap.org/img/wn/${props.props.weather[0].icon}@2x.png`
	console.log('props from item',props.props)
	return (
		<div key={props.props.dt} className='ForecastItem-container'>
			<h4>{getDayName(props.props.dt_txt)}</h4>
			<p>{props.props.weather[0].description}</p>
			<img src={iconSrc} alt={props.props.weather[0].main}/>
			<p>Temp {Math.round(props.props.main.temp - 273)}</p>
			<p>Feels like {Math.round(props.props.main.feels_like - 273)}</p>
			<p>Humidity {props.props.main.humidity}</p>
		</div>
	)
}

export default ForecastItem;