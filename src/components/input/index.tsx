import React, {useCallback, useEffect, useState} from 'react';
import './style.css';
import { useDispatch } from 'react-redux';
import { getForecast, getWeekForecast } from '../../redux/effects/Forecasts';
import { debounce } from '../../utils';


const Input = () => {

	const [place, setPlace] = useState('');
	const dispatch = useDispatch();
	
	const changeHandler = (event: any) => {
    setPlace(event.target.value);
  };

	const debouncedChangeHandler = useCallback(
		debounce(changeHandler, 400)
	,[]);

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
				onChange={debouncedChangeHandler}
				placeholder='Your city'
			/>
    </div>
  );
}

export default Input;