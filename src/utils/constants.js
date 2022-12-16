export const apiUrl = 'https://api.open-meteo.com/v1/forecast?';

export const COORDINATES = {
	belgorod: {
		latitude: 50.61,
		longitude: 36.58,
	},
	saint_petersburg: {
		latitude: 59.57,
		longitude: 30.19,
	},
	moscow: {
		latitude: 55.45,
		longitude: 37.36,
	},
	arkhangelsk: {
		latitude: 64.54,
		longitude: 40.54,
	},
	astrakhan: {
		latitude: 46.35,
		longitude: 48.04,
	},
	balashikha: {
		latitude: 55.81,
		longitude: 37.96,
	},
	barnaul: {
		latitude: 53.36,
		longitude: 83.76,
	},
	bor: {
		latitude: 56.36,
		longitude: 44.07,
	},
	bratsk: {
		latitude: 56.13,
		longitude: 101.61,
	},
	bryansk: {
		latitude: 53.25,
		longitude: 34.37,
	},
	velikiy_novgorod: {
		latitude: 58.52,
		longitude: 31.27,
	},
	vladivostok: {
		latitude: 43.11,
		longitude: 131.87,
	},
	vladikavkaz: {
		latitude: 43.04,
		longitude: 44.67,
	},
	vladimir: {
		latitude: 56.14,
		longitude: 40.4,
	},
	volgograd: {
		latitude: 48.72,
		longitude: 44.5,
	},
	vorkuta: {
		latitude: 67.5,
		longitude: 64.05,
	},
	voronezh: {
		latitude: 51.67,
		longitude: 39.18,
	},
	grozny: {
		latitude: 43.31,
		longitude: 45.69,
	},
	gubkin: {
		latitude: 51.28,
		longitude: 37.55,
	},
	yekaterinburg: {
		latitude: 56.85,
		longitude: 60.61,
	},
	zheleznogorsk: {
		latitude: 56.25,
		longitude: 93.53,
	},
	zelenograd: {
		latitude: 55.98,
		longitude: 37.18,
	},
	kazan: {
		latitude: 55.79,
		longitude: 49.12,
	},
	kaliningrad: {
		latitude: 54.71,
		longitude: 20.51,
	},
};

export const WEATHER_CODES = {
	0: 'clear sky',
	1: 'mainly clear',
	2: 'partly cloudy',
	3: 'overcast',
	45: 'fog',
	48: 'depositing rime fog',
	51: 'light drizzle',
	53: 'moderate drizzle',
	55: 'dense intensity drizzle',
	56: 'light freezing drizzle',
	57: 'dense intensity freezing drizzle',
	61: 'slight rain',
	63: 'moderate rain',
	65: 'heavy intensity rain',
	66: 'light intensity freezing rain',
	67: 'heavy intensity freezing rain',
	71: 'slight snowfall',
	73: 'moderate snowfall',
	75: 'heavy intensity snowfall',
	77: 'snow grains',
	80: 'slight rain showers',
	81: 'moderate rain showers',
	82: 'violent rain showers',
	85: 'slight snow showers',
	86: 'heavy snow showers',
	95: 'thunderstorm',
	96: 'thunderstorm with slight hail',
	99: 'thunderstorm with heavy hail',
};

export const FETCH_STATUSES = {
	IDLE: 'idle',
	REQUEST: 'request',
	SUCCESS: 'success',
	FAILURE: 'failure',
};

export const MONTHS = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December',
];

export const DAYS_OF_WEEK = [
	'Sunday',
	'Monday',
	'Tuesday',
	'Wednesday',
	'Thursday',
	'Friday',
	'Saturday',
];
