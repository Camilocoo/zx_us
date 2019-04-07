import React from "react";

import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export class Home extends React.Component {
	render() {
		return (
			<div>
				<div className="jumbotron jumbotron-fluid vh-100 homeJumboImage bg-white d-none d-lg-block">
					<img
						className="img-fluid"
						src="https://ucarecdn.com/0eaee51a-7f9d-44e9-acc8-5b48cc664761/-/resize/350x/"
					/>
				</div>
			</div>
		);
	}
}
