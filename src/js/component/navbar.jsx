import React from "react";
import { Link } from "react-router-dom";

export class Navbar extends React.Component {
	render() {
		return (
			<div className="d-none d-lg-block">
				{/*big size navbar*/}
				<nav className="navbar text-white navbar-expand-sm navbar-dark bg-dark py-0 gradient">
					<div className="container-fluid">
						<div className="row w-100 p-0">
							<div className="col-4 position-relative">
								<div
									className="collapse navbar-collapse d-flex justify-content-start position-absolute pt-2"
									id="navbarNavAltMarkup">
									<div className="navbar-nav">
										<Link to="/" className="nav-link">
											<a
												className="nav-item nav-link  "
												href="./home.html">
												Home
											</a>
										</Link>
										<Link
											to="/learning-tools"
											className="nav-link">
											<a className="nav-item nav-link  ">
												Distributors
											</a>
										</Link>
										<Link
											to="/learning-tools"
											className="nav-link">
											<a className="nav-item nav-link  ">
												About Us
											</a>
										</Link>
									</div>
								</div>
							</div>
							<div className="col d-flex justify-content-center">
								<a className="navbar-brand" href="#">
									<Link to="/" className="nav-link py-0">
										<img
											src="https://ucarecdn.com/7d94e24f-53bf-4da1-a350-ba156b362c72/-/resize/40x/"
											className="img-fluid"
											alt="Responsive image"
										/>
									</Link>
								</a>
							</div>
							<div className="col-4">
								<div
									className="collapse navbar-collapse d-flex justify-content-end pt-2"
									id="navbarNavAltMarkup">
									<div className="navbar-nav">
										<Link
											to="/about-us"
											className="nav-link">
											<a className="nav-item nav-link">
												Products
											</a>
										</Link>
										<Link
											to="https://student.breatheco.de/login"
											className="nav-link">
											<a
												className="nav-item nav-link"
												href="#">
												Testimonies
											</a>
										</Link>
										<Link
											to="https://student.breatheco.de/login"
											className="nav-link">
											<a
												className="nav-item nav-link"
												href="#">
												Contact
											</a>
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</nav>
			</div>
		);
	}
}
