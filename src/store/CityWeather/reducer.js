import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { apiUrl, COORDINATES, FETCH_STATUSES } from '../../utils/constants';

const initialState = {
	data: {},
	status: FETCH_STATUSES.IDLE,
	error: null,
};

export const cityWeatherSlice = createSlice({
	name: 'cityWeather',
	initialState,
	extraReducers: (builder) => {
		builder
			.addCase(
				fetchWeatherByCoordinate.fulfilled,
				(state, { payload }) => {
					state.status = FETCH_STATUSES.SUCCESS;
					state.data = normalizeData(payload);
				}
			)
			.addCase(fetchWeatherByCoordinate.pending, (state, action) => {
				state.status = FETCH_STATUSES.REQUEST;
				state.error = null;
			})
			.addCase(fetchWeatherByCoordinate.rejected, (state, { error }) => {
				state.status = FETCH_STATUSES.FAILURE;
				state.error = error.message;
			});
	},
});

export const fetchWeatherByCoordinate = createAsyncThunk(
	'cityWeather/fetchWeatherByCoordinate',
	async (city) => {
		const { latitude, longitude } = COORDINATES[city];
		const url = `${apiUrl}latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,relativehumidity_2m,weathercode,surface_pressure,windspeed_10m,winddirection_10m&models=best_match&daily=weathercode&current_weather=true&windspeed_unit=ms&timezone=Europe%2FMoscow`;
		const response = await fetch(url);
		return response.json();
	}
);

const { reducer: cityWeatherReducer } = cityWeatherSlice;

export default cityWeatherReducer;

const normalizeData = (data) => {
	const normalizedData = data;
	const currentTimeIndex = normalizedData.hourly.time.indexOf(
		normalizedData.current_weather.time
	);

	normalizedData.current_weather.humidity =
		normalizedData.hourly.relativehumidity_2m[currentTimeIndex];
	normalizedData.current_weather.pressure =
		normalizedData.hourly.surface_pressure[currentTimeIndex];

	normalizedData.hourly_forecast = {
		time: normalizedData.hourly.time.slice(0, 24),
		temperature: normalizedData.hourly.temperature_2m.slice(0, 24),
		weathercode: normalizedData.hourly.weathercode.slice(0, 24),
	};

	normalizedData.daily_forecast = {};
	normalizedData.daily.time.forEach((item, index) => {
		if (index === 0) {
			return;
		}
		const temperatureArr = normalizedData.hourly.temperature_2m.splice(
			0,
			24
		);
		const humidityArr = normalizedData.hourly.relativehumidity_2m.splice(
			0,
			24
		);
		const weatherCodeArr = normalizedData.hourly.weathercode.splice(0, 24);
		const pressureArr = normalizedData.hourly.surface_pressure.splice(
			0,
			24
		);
		const windspeedArr = normalizedData.hourly.windspeed_10m.splice(0, 24);
		const winddirectionArr = normalizedData.hourly.winddirection_10m.splice(
			0,
			24
		);
		normalizedData.daily_forecast[item] = {
			temperature: temperatureArr.filter((el, index) => index % 6 === 5),
			humidity: humidityArr.filter((el, index) => index % 6 === 5),
			weathercode: weatherCodeArr.filter((el, index) => index % 6 === 5),
			pressure: pressureArr.filter((el, index) => index % 6 === 5),
			windspeed: windspeedArr.filter((el, index) => index % 6 === 5),
			winddirection: winddirectionArr.filter(
				(el, index) => index % 6 === 5
			),
		};
	});
	return normalizedData;
};
