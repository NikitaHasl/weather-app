import { useSelector } from 'react-redux';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { HourlyWeather } from '../HourlyWeather/HourlyWeather';
import { selectCityWeather } from '../../store/CityWeather/selectors';

import './HourlyWeatherList.styles.css';

export const HourlyWeatherList = () => {
	const data = useSelector(selectCityWeather);
	const { hourly_forecast } = data;
	return (
		<Swiper
			modules={[Navigation]}
			simulateTouch={false}
			slidesPerView={6}
			navigation
			slidesPerGroup={3}>
			{hourly_forecast?.time?.map((item, index) => (
				<SwiperSlide key={item}>
					<HourlyWeather
						time={item}
						weathercode={hourly_forecast?.weathercode[index]}
						temperature={hourly_forecast?.temperature[index]}
					/>
				</SwiperSlide>
			))}
		</Swiper>
	);
};
