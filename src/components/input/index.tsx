import React, {useEffect, useState} from 'react';
import './style.css';
import { useDispatch } from 'react-redux';
import { getForecast, getWeekForecast} from '../../redux/effects/Forecasts';

const debounce = (func: Function, wait: number) => {
  let timeout: any;
  return function(...args: any[]) {
    //const context = this;
		console.log('debounce works')
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => {
			console.log('debounce works')
      timeout = null;
      func(...args);
    }, wait);
  };
};

const Input: React.FC = () => {

	const [place, setPlace] = useState('');
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getForecast(place))
		dispatch(getWeekForecast(place))
	},[place, dispatch])

  return (
    <div className="Input-container">
			<label  className="input-label">Enter Your city</label>
      <input
				id="place"
			 	className="input"
				onChange={e => setPlace(e.target.value)}
				placeholder='Your city'
			/>
    </div>
  );
}

export default Input;