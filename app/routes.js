import React from 'react';
import { Route, IndexRoute } from 'react-router'
import { App, Home, Page1, Page2, Page3 } from './containers'

const routes = (
 	<Route path="/" component={App}>
		<IndexRoute component={Home}/>
		<Route path="/page1" component={Page1}/>
		<Route path="/page2" component={Page2}/>
		<Route path="/page3" component={Page3}/>
	</Route>
);

export default routes;
