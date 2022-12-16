import { useNavigate } from 'react-router-dom';
import { capitalize } from '../../utils/functions';

import './CityCard.styles.css';

export const CityCard = ({ city, temperature, weather }) => {
	const navigate = useNavigate();
	const navClick = () => {
		navigate(`/${city}`);
	};
	return (
		<div className='city-card' onClick={navClick}>
			<img src={`/icons/${weather}.png`} alt='' />
			<p className='city-card__temp'>{temperature}</p>
			<div className='city-card__city'>{capitalize(city)}</div>
		</div>
	);
};
