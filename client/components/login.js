import React from "react";



export class Login extends React.Component {
	render() {
		return(
			<div className="col-md-4  offset-md-4 login-center">
				<div className="form-group">
					<input
						name="email"
						placeholder="Email"
						className="form-control"
					/>
				</div>
				<div className="form-group">
					<input
						name="password"
						placeholder="Password"
						className="form-control"
						type="password"
					/>
				</div>
				<button type="submit" className="btn btn-primary">Login</button>
			</div>
			)
	}
}
