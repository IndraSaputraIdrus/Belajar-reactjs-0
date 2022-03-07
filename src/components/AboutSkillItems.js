import { useState } from "react";

const AboutSkillItems = () => {

	const [width, setWidth] = useState(false);
	const [count, setCount] = useState(0);
	
	const skillAnimation = () => {
		const about = document.querySelector("#about");
		const aboutPosition = about.getBoundingClientRect().top;
		const screenPosition = window.innerHeight / 2;

		if (aboutPosition < screenPosition) {
			setTimeout(() => {
				setWidth(true);
			}, 300);
		}
	};

	window.addEventListener("scroll", skillAnimation);

	return (
		<>
			<div className="col-md-6 mt-5 mt-md-0">
				<div className="skill-item mb-4">
					<h3 className="fs-6">Html</h3>
					<div className="progress" style={{ height: "5px" }}>
						<div
							className="progress-bar bg-danger"
							role="progressbar"
							style={width ? { width: "20%" } : { width: "0" }}
							aria-valuenow="25"
							aria-valuemin="0"
							aria-valuemax="100"
						></div>
					</div>
				</div>
				<div className="skill-item mb-4">
					<h3 className="fs-6">Css</h3>
					<div className="progress" style={{ height: "5px" }}>
						<div
							className="progress-bar bg-danger"
							role="progressbar"
							style={width ? { width: "50%" } : { width: "0" }}
							aria-valuenow="50"
							aria-valuemin="0"
							aria-valuemax="100"
						></div>
					</div>
				</div>
				<div className="skill-item mb-4">
					<h3 className="fs-6">Javascript</h3>
					<div className="progress" style={{ height: "5px" }}>
						<div
							className="progress-bar bg-danger"
							role="progressbar"
							style={width ? { width: "75%" } : { width: "0" }}
							aria-valuenow="75"
							aria-valuemin="0"
							aria-valuemax="100"
						></div>
					</div>
				</div>
				<div className="skill-item mb-4">
					<h3 className="fs-6">Php</h3>
					<div className="progress" style={{ height: "5px" }}>
						<div
							className="progress-bar bg-danger"
							role="progressbar"
							style={width ? { width: "90%" } : { width: "0" }}
							aria-valuenow="90"
							aria-valuemin="0"
							aria-valuemax="100"
						></div>
					</div>
				</div>
			</div>
		</>
	);
};

export default AboutSkillItems;
