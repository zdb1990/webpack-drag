import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';
import Home from './container/home/home';
// import createBrowserHistory from 'history/createBrowserHistory';

class RouterMap extends React.Component {
	render() {
		// const customHistory = createBrowserHistory();
		return (
			< Router history={hashHistory} >
				<Route exact path="/" component={Home} />
			</Router>
		);
	}
}

export default RouterMap;