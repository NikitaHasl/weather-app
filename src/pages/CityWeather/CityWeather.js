import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import { fetchWeatherByCoordinate } from '../../store/CityWeather/reducer';
import { WeatherCard } from '../../components/WeatherCard/WeatherCard';
import { WeeklyForecastList } from '../../components/WeeklyForecastList/WeeklyForecastList';
import { COORDINATES } from '../../utils/constants';

import './CityWeather.styles.css';

export const CityWeather = () => {
	const dispatch = useDispatch();
	const { city } = useParams();
	const navigate = useNavigate();

	useEffect(() => {
		if (!(city.toLowerCase() in COORDINATES)) {
			navigate('/', { replace: true });
		}
		dispatch(fetchWeatherByCoordinate(city.toLowerCase()));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	return (
		<div className='city-weather'>
			<WeatherCard city={city} />
			<WeeklyForecastList />
		</div>
	);
};
