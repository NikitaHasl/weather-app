import { configureStore } from '@reduxjs/toolkit';

import cityWeatherReducer from './CityWeather/reducer';
import citiesReducer from './Cities/reducer';

export const store = configureStore({
	reducer: {
		cityWeather: cityWeatherReducer,
		cities: citiesReducer,
	},
});
