// import React from 'react';
// import ReactDOM from 'react-dom';
// import { HashRouter } from 'react-router-dom'
// import Routes from './routes'
// ReactDOM.render(
//   <HashRouter>
//     <Routes />
//   </HashRouter>, document.getElementById('root')
// );

import React from "react";
import {render} from "react-dom";
// import {Router, Route, browserHistory} from "react-router";
import { BrowserRouter, Route, browserHistory, Link, Switch } from 'react-router-dom'

import {Header}  from "./components/Header";
import {Home}  from "./components/Home";
import {Login}  from "./components/Login";
import axios from "axios";

class App extends React.Component {

	constructor() {
		super()
		this.state = {
			username: 'asdsa'
		};

		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		axios.get('/api/v2/users/register')
			.then(response => this.setState({username: response.data}))
	}

	render() {
		return (
			<div>
				<div>
					<Header/>
				</div>
				<div className="row">
					<div className="container">
						<Login />
					</div>
				</div>				
			</div>
			)
	}

	  //  render() {
   //    return (
   //       <BrowserRouter>
   //          <div>
   //             <h2>Welcome to React Router Tutorial</h2>
   //             <ul>
   //                <li><Link to={'/'}>Home</Link></li>
   //                <li><Link to={'/Register'}>Register</Link></li>
   //             </ul>
   //             <hr />
               
   //             <Switch>
   //                <Route exact path='/' component={Home} />
   //                <Route exact path='/Register' component={Register} />
   //             </Switch>
   //          </div>
   //       </BrowserRouter>
   //    );
   // }
}

render(<App/>, document.getElementById('app'))