import React from "react";
import { Carousel } from "react-bootstrap";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Link } from "react-router-dom";

export class Home extends React.Component {
	render() {
		return (
			<div className="bodyBackground">
				<div className="jumbotron jumbotron-fluid  homeJumboImage bg-white d-none d-lg-block py-3 mb-0">
					<div className="row m-0">
						<div className="col-3">
							<img
								className="img-fluid"
								src="https://ucarecdn.com/0eaee51a-7f9d-44e9-acc8-5b48cc664761/-/resize/350x/"
							/>
						</div>
						<div className="col d-flex justify-content-start align-items-end mb-5 ml-5 p-0">
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
				{/*sm jumbo*/}
				<div className="jumbotron jumbotron-fluid  text-center homeJumboImageSmall  bg-white  p-0 mb-0 d-lg-none d-xl-none">
					<img
						className=" img-fluid "
						src="https://ucarecdn.com/0eaee51a-7f9d-44e9-acc8-5b48cc664761/-/resize/250x/"
					/>
				</div>
				<div className="jumbotron jumbotron-fluid text-white backgorundBlack text-center text-md-left mb-0 p-3 ">
					<div className="row m-0">
						<div className="col-12 col-sm-12 col-lg-7">
							<div className="p-sm-1 p-lg-4">
								<p
									id="aboutUs"
									className="h1 weAre text-secondary">
									We Are ...
								</p>
								<p className="lead ">
									Ultra ZX, a Colombian based company driven
									to help you reach your true potential, with
									our natural products created out from the
									top quality ingredients, imported from
									around the world, with the goal to help you
									improve your focus and maximize your
									weight-loss.
								</p>
							</div>
						</div>
						<div className="col-12 col-sm-12 col-lg-5">
							<Carousel controls={false} indicators={false}>
								<Carousel.Item>
									<img
										className="d-block mx-auto"
										src="https://ucarecdn.com/1d6c6644-cdf3-4b59-ac11-4c5f0b3d41c2/-/resize/400x/"
										alt="First slide"
									/>
								</Carousel.Item>
								<Carousel.Item>
									<img
										className="d-block mx-auto"
										src="https://ucarecdn.com/f0a829ef-5e8e-4b40-96a5-34e913db3c52/-/resize/400x/"
										alt="Third slide"
									/>
								</Carousel.Item>
								<Carousel.Item>
									<img
										className="d-block mx-auto"
										src="https://ucarecdn.com/3f44c9fb-d6a5-45b2-bd76-2c6f0e1ebac2/-/resize/400x/"
										alt="Third slide"
									/>
								</Carousel.Item>
							</Carousel>
						</div>
					</div>
				</div>
				<div className="container-fluid productBackground p-4">
					<div className="row pb-2 mb-5">
						<div className="col-12 text-center text-white">
							<p id="products" className="display-3 scrollspy">
								{" "}
								Our Products{" "}
							</p>
						</div>
					</div>
					<div className="row pb-5 mb-5 pb-3 ">
						<div className="col-12 col-sm-12 col-md-12 col-lg-6 mb-5 text-center lipoBlue mb-3 pb-3">
							<img
								className="position-relative img-fluid"
								src="https://ucarecdn.com/3b37c89d-9938-41da-924c-05185cf3af1b/-/resize/250x/"
							/>
						</div>
						<div className="col-12 col-sm-12 col-md-12 col-lg-6">
							<div className=" p-1 p-lg-4 text-center text-md-left ml-0 ml-md-5">
								<p className="h2  text-secondary">LIPOBLUE</p>
								<p className="font-weight-bold lead text-secondary">
									Multifunctional supplement with more than 5
									years in the market,
								</p>
								<p className="lead text-white">
									with many success stories. Will help towards
									weight-loss to those who aren't physically
									active, Will Bun fat, reduce liquid
									retention and it is recommended for
									sedentary people with low physical activity
									who wish to lose weight
								</p>
								<ul className="text-white">
									<li>suppress appetite </li>
									<li>reduces anxiety</li>
									<li>lose 4 kg to 6 kg per month</li>
									<li>for sedentary people </li>
									<li>reduces liquid retention</li>
									<li>
										cleans liquids and toxins in the body{" "}
									</li>
									<li>
										benefits blood pressure and controls
										diabetes{" "}
									</li>
								</ul>
								<button
									type="button"
									className="btn btn-info btn-sm mr-1">
									Shop now
								</button>

								<button
									type="button"
									className="btn btn-info btn-sm">
									Learn More
								</button>
							</div>
						</div>
					</div>
					<div className="row pb-5 mb-5 pb-3">
						<div className="col-12 col-sm-12 col-md-12 col-lg-6 mb-5 advance text-center mb-3 pb-3">
							<img
								className="position-relative img-fluid"
								src="https://ucarecdn.com/accd1aee-fefd-4ea1-a6e7-dfb6f588a0bc/-/resize/250x/"
							/>
						</div>
						<div className="col-12 col-sm-12 col-md-12 col-lg-6">
							<div className="p-1 p-lg-4 text-center text-md-left ml-0 ml-md-5">
								<p className="h2  text-secondary">Advance </p>
								<p className="font-weight-bold lead text-secondary">
									multifunctional supplement with great
									recognition for its effectiveness,
								</p>
								<p className="lead text-white">
									when it comes to lose weight and reduce
									liquid retention. It improves performance
									when training. Recommended for people who
									exercise and have an active lifestyle
								</p>
								<ul className="text-white">
									<li>increases energy</li>
									<li>helps to reduce BFP</li>
									<li>increases metabolic rate </li>
									<li>helps to reduce liquid retention</li>
									<li>increases body performance </li>
									<li>suppresses appetite </li>
									<li>controls anxiety</li>
									<li>
										cleans the body and gets rid of liquids
										and toxins
									</li>
									<li>
										benefits blood pressure and controls
										diabetes
									</li>
								</ul>
								<button
									type="button"
									className="btn btn-info btn-sm mr-1">
									Shop now
								</button>
								<button
									type="button"
									className="btn btn-info btn-sm">
									Learn More
								</button>
							</div>
						</div>
					</div>
					<div className="row pb-5 mb-5 pb-3">
						<div className="col-12 col-sm-12 col-md-12 col-lg-6 mb-5 text-center supreme mb-3 pb-3">
							<img
								className="position-relative img-fluid"
								src="https://ucarecdn.com/9f1f42b2-a71b-4a97-9fb2-5683f8f57e79/-/resize/250x/"
							/>
						</div>
						<div className="col-12 col-sm-12 col-md-12 col-lg-6">
							<div className="p-1 p-lg-4 text-center text-md-left ml-0 ml-md-5">
								<p className="h2  text-secondary">Supreme</p>
								<p className="font-weight-bold lead text-secondary">
									The supremacy of the supplements,
								</p>
								<p className="lead text-white">
									helps reduce anxiety and control appetite
									effectively. with the highest amount of
									Forskolin within the lips blue line. supreme
									was made for people who wanted to see
									greater results after taking lipo blue and
									Advance. helps towards weight loss, burns
									fat and reduces liquid retention
								</p>
								<ul className="text-white">
									<li>controls appetite </li>
									<li>reduces anxiety </li>
									<li>lose 4 kg to 6kg per month</li>
								</ul>
								<button
									type="button"
									className="btn btn-info btn-sm mr-1">
									Shop now
								</button>
								<button
									type="button"
									className="btn btn-info btn-sm ">
									Learn More
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
