import { useSelector } from 'react-redux';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { selectCityWeather } from '../../store/CityWeather/selectors';
import { WeeklyForecast } from '../WeeklyForecast/WeeklyForecast';

import 'swiper/css/bundle';
import './WeeklyForecastList.styles.css';

export const WeeklyForecastList = () => {
	const data = useSelector(selectCityWeather);
	const { daily_forecast } = data;
	return (
		<div className='weekly-forecast-list'>
			<Swiper modules={[Navigation]} simulateTouch={false} navigation>
				{Object.keys(daily_forecast || {}).map((el) => (
					<SwiperSlide>
						<WeeklyForecast date={el} />
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};
