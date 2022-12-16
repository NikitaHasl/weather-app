import { useSelector } from 'react-redux';

import { selectCityWeather } from '../../store/CityWeather/selectors';
import { DAYS_OF_WEEK, MONTHS, WEATHER_CODES } from '../../utils/constants';
import { getWindDirection } from '../../utils/functions';

import './WeeklyForecast.styles.css';

export const WeeklyForecast = ({ date }) => {
	const { daily_forecast } = useSelector(selectCityWeather);
	const data = daily_forecast?.[date];
	const timesOfDay = ['morning', 'afternoon', 'evening', 'night'];
	const day = new Date(date).getDate();
	const month = MONTHS[new Date(date).getMonth()];
	const dayOfWeek = DAYS_OF_WEEK[new Date(date).getDay()];
	return (
		<div className='forecast-card'>
			<div
				className={`forecast-card__date ${
					dayOfWeek === DAYS_OF_WEEK[6] ||
					dayOfWeek === DAYS_OF_WEEK[0]
						? 'weekend'
						: ''
				}`}>
				<h1>{day}</h1>
				<p>{month}</p>
				<p>{dayOfWeek}</p>
			</div>
			<div className='forecast-card__table'>
				<table>
					<thead>
						<tr>
							<th>
								<img
									src='/icons/thermometer.png'
									alt='thermometer'
								/>
							</th>
							<th>
								<img
									src='/icons/weather.png'
									alt='weather desc'
								/>
							</th>
							<th>
								<img src='/icons/pressure.png' alt='pressure' />
							</th>
							<th>
								<img src='/icons/humidity.png' alt='humidity' />
							</th>
							<th>
								<img src='/icons/wind.png' alt='wind' />
							</th>
						</tr>
					</thead>
					<tbody>
						{data.temperature.map((el, index) => {
							return (
								<tr>
									<td>
										<p>{el}°</p>
										<p>{timesOfDay[index]}</p>
									</td>
									<td>
										<img
											src={`/icons/${
												WEATHER_CODES[
													data?.weathercode[index]
												]
											}.png`}
											alt=''
										/>
										<p>
											{
												WEATHER_CODES[
													data?.weathercode[index]
												]
											}
										</p>
									</td>
									<td>{data?.pressure[index]}</td>
									<td>{data?.humidity[index]}%</td>
									<td>
										{data?.windspeed[index]} m/s,{' '}
										{getWindDirection(
											data?.winddirection[index]
										)}
									</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>
		</div>
	);
};
