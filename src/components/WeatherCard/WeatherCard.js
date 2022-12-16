import { useSelector } from 'react-redux';

import { HourlyWeatherList } from '../HourlyWeatherList/HourlyWeatherList';
import { selectCityWeather } from '../../store/CityWeather/selectors';
import { WEATHER_CODES } from '../../utils/constants';
import { capitalize, getTime, getWindDirection } from '../../utils/functions';

import 'swiper/css/bundle';
import './WeatherCard.styles.css';

export const WeatherCard = ({ city }) => {
	const data = useSelector(selectCityWeather);
	const { timezone, current_weather } = data;
	const weatherDesc = WEATHER_CODES[current_weather?.weathercode];
	return (
		<div className='weather-card'>
			<div className='weather-card__title'>
				<p>
					Weather in{' '}
					<span className='weather-card__city'>
						{capitalize(city)}
					</span>
				</p>
				<p>
					Time {getTime(current_weather?.time)} ({timezone})
				</p>
			</div>
			<div className='weather-card__weather'>
				<div className='weather-card__temperature'>
					<img src='/icons/thermometer.png' alt='thermometer' />
					<p>{current_weather?.temperature}°</p>
				</div>
				<div className='weather-card__desc'>
					<img src={`/icons/${weatherDesc}.png`} alt='weather desc' />
					<p>{weatherDesc}</p>
				</div>
			</div>
			<div className='weather-card__prop'>
				<div className='weather-card__prop-item'>
					<img src='/icons/wind.png' alt='wind' />
					<p>
						{current_weather?.windspeed} m/s{' '}
						{getWindDirection(current_weather?.winddirection)}
					</p>
				</div>
				<div className='weather-card__prop-item'>
					<img src='/icons/humidity.png' alt='humidity' />
					<p>{current_weather?.humidity}%</p>
				</div>
				<div className='weather-card__prop-item'>
					<img src='/icons/pressure.png' alt='pressure' />
					<p>{current_weather?.pressure}</p>
				</div>
			</div>
			<div className='weather-card__swiper'>
				<HourlyWeatherList />
			</div>
		</div>
	);
};
