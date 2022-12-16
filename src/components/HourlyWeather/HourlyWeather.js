import { WEATHER_CODES } from '../../utils/constants';
import { getTime } from '../../utils/functions';

import './HourlyWeather.styles.css';

export const HourlyWeather = ({ time, weathercode, temperature }) => {
	const weatherDesc = WEATHER_CODES[weathercode];
	return (
		<div className='hourly-item'>
			<p>{getTime(time)}</p>
			<img src={`/icons/${weatherDesc}.png`} alt='img' />
			<p>{temperature}</p>
		</div>
	);
};
