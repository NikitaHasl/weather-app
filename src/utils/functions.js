export const getTime = (date) => {
	const dateObj = new Date(date);
	const time = dateObj.toTimeString();
	return time.slice(0, 5);
};

export const getWindDirection = (degree) => {
	const value = Math.floor(degree / 22.5 + 0.5);
	const windDirections = [
		'N',
		'NNE',
		'NE',
		'ENE',
		'E',
		'ESE',
		'SE',
		'SSE',
		'S',
		'SSW',
		'SW',
		'WSW',
		'W',
		'WNW',
		'NW',
		'NNW',
	];
	return windDirections[value % 16];
};

export const capitalize = (text) => {
	const words = text.split('_');
	const capitalizeWords = words.map((word) => {
		const firstLetter = word.slice(0, 1);
		const otherLetter = word.slice(1);
		return firstLetter.toUpperCase() + otherLetter;
	});
	return capitalizeWords.join(' ');
};
