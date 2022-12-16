import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';

import { CityWeather } from './pages/CityWeather/CityWeather';
import { Cities } from './pages/Cities/Cities';
import { store } from './store';

import './App.css';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Cities />,
	},
	{
		path: '/:city',
		element: <CityWeather />,
	},
]);

function App() {
	return (
		<div className='app'>
			<Provider store={store}>
				<RouterProvider router={router} />
			</Provider>
		</div>
	);
}

export default App;
