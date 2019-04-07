import React from "react";

import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export class Home extends React.Component {
	render() {
		return (
			<div>
				<div className="jumbotron jumbotron-fluid vh-100 homeJumboImage bg-white d-none d-lg-block py-3">
					<div className="row">
						<div className="col-3">
							<img
								className="img-fluid"
								src="https://ucarecdn.com/0eaee51a-7f9d-44e9-acc8-5b48cc664761/-/resize/350x/"
							/>
						</div>
						<div className="col d-flex justify-content-start align-items-end mb-5 ml-5">
							<div className="text-center ">
								<p className="display-3 homeFont">
									UNLEASH THE POWER
								</p>
								<button
									type="button"
									className="btn btn-info btn-sm">
									Shop now
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
