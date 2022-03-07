import { useState } from "react";

const AboutDataItems = () => {
	let [count1, setCount1] = useState(0);
	let [count2, setCount2] = useState(0);
	let [count3, setCount3] = useState(0);



	const dataAnimation = () => {
		const about = document.querySelector("#about");
		const aboutPosition = about.getBoundingClientRect().top;
		const screenPosition = window.innerHeight / 2;

		if (aboutPosition < screenPosition) {
			// count1 = setInterval(() => {
			// 	setCount1(count1++);
			// }, 50);

			// if(count1 == 50){
			// 	clearInterval(count1);
			// }
			// for (let i = 0; i < 50; i++) {
			// 	setTimeout(() => {
			// 		setCount1(i);
			// 	}, 1000);
			// }
		}
	};
	window.addEventListener("scroll", dataAnimation);

	return (
		<>
			<div className="row text-center text-uppercase my-3">
				<div className="col-sm-4">
					<div className="fact-item">
						<h4 className="fs-1 fw-bold">{count1}</h4>
						<p className="text-muted">Project Completed</p>
					</div>
				</div>

				<div className="col-sm-4">
					<div className="fact-item">
						<h4 className="fs-1 fw-bold">95</h4>
						<p className="text-muted">Happy Clients</p>
					</div>
				</div>

				<div className="col-sm-4">
					<div className="fact-item">
						<h4 className="fs-1 fw-bold">95</h4>
						<p className="text-muted">Positive Reviews</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default AboutDataItems;
