import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { apiUrl, COORDINATES, FETCH_STATUSES } from '../../utils/constants';

const initialState = {
	data: {},
	status: FETCH_STATUSES.IDLE,
	error: null,
};

export const citiesSlice = createSlice({
	name: 'cities',
	initialState,
	extraReducers: (builder) => {
		builder
			.addCase(
				fetchCitiesWeather.fulfilled,
				(state, { payload, meta }) => {
					state.status = FETCH_STATUSES.SUCCESS;
					state.data = {
						...state.data,
						[meta.arg]: {
							temperature: payload.current_weather.temperature,
							weathercode: payload.current_weather.weathercode,
						},
					};
				}
			)
			.addCase(fetchCitiesWeather.pending, (state, action) => {
				state.status = FETCH_STATUSES.REQUEST;
				state.error = null;
			})
			.addCase(fetchCitiesWeather.rejected, (state, { error }) => {
				state.status = FETCH_STATUSES.FAILURE;
				state.error = error.message;
			});
	},
});

export const fetchCitiesWeather = createAsyncThunk(
	'cities/fetchCitiesWeather',
	async (city) => {
		const { latitude, longitude } = COORDINATES[city];
		const url = `${apiUrl}latitude=${latitude}&longitude=${longitude}&models=best_match&current_weather=true&windspeed_unit=ms&timezone=Europe%2FMoscow`;
		const response = await fetch(url);
		return response.json();
	}
);

const { reducer: citiesReducer } = citiesSlice;

export default citiesReducer;
