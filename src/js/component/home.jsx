import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = (props) => {
	return (
		<div className="text-center row counter"  >
	
			<div className="col counterIcon"><i className="far fa-clock"></i></div>
			<div className="col counterIcon">{props.six}</div>
			<div className="col counterIcon">{props.five}</div>
			<div className="col counterIcon">{props.four}</div>
			<div className="col counterIcon">{props.three}</div>
			<div className="col counterIcon">{props.two}</div>
			<div className="col counterIcon">{props.one}</div>
		</div>
	);
};

export default Home;
