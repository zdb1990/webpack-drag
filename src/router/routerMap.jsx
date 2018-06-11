import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';
import Home from './container/home/home';
import Tab from './container/tab/tab';
// import createBrowserHistory from 'history/createBrowserHistory';

class RouterMap extends React.Component {
	render() {
		// const customHistory = createBrowserHistory();
		return (
			< Router history={hashHistory} >
				{/* <ul>
					<li><Link to='/'>首页</Link></li>
					<li><Link to='/tab'>关于</Link></li>
					
				</ul> */}
			
				<Route exact path="/" component={Home} />
				{/* <Route path="/tab" component={Tab} /> */}
			</Router>
		);
	}
}

export default RouterMap;