import { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './page/home';
import ImageComponent from './page/image_component';

export default function App(): JSX.Element {
	const imgSrc = 'https://s.pstatic.net/static/www/img/uit/sp_weather_time_b8ecd0.png';
	useEffect(() => {
		const preloadImage = new Image();
		preloadImage.src = imgSrc;
	});

	return (
		<Switch>
			<Route exact path="/" component={Home} />
			<Route path="/image" render={() => <ImageComponent imgSrc={imgSrc} />} />
		</Switch>
	);
}
