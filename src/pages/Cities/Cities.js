import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { CityCard } from '../../components/CityCard/CityCard';
import { selectCities } from '../../store/Cities/selectors';
import { fetchCitiesWeather } from '../../store/Cities/reducer';
import { COORDINATES, WEATHER_CODES } from '../../utils/constants';

import './Cities.styles.css';

export const Cities = () => {
	const dispatch = useDispatch();
	const cities = useSelector(selectCities);
	useEffect(() => {
		Object.keys(COORDINATES).forEach((city) => {
			dispatch(fetchCitiesWeather(city));
		});

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	return (
		<>
			<div className='cities'>
				{Object.keys(cities || {})?.map((city) => (
					<CityCard
						city={city}
						weather={WEATHER_CODES[cities[city].weathercode]}
						temperature={cities[city].temperature}
					/>
				))}
			</div>
		</>
	);
};
