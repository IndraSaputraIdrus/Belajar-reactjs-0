import AboutSkillItems from "./AboutSkillItems";
import AboutDataItems from "./AboutDataItems";

const About = () => {
	return (
		<section className="about py-5" id="about">
			<div className="container-lg py-4">
				<div className="row justify-content-center">
					<div className="col-lg-8">
						<div className="section-title text-center">
							<h2 className="fw-bold mb-5">About Me</h2>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-md-6 pe-md-4">
						<div className="about-text">
							<h3 className="fs-4 mb-3">
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
							</h3>
							<p className="text-muted">
								Lorem ipsum dolor, sit amet consectetur, adipisicing elit. Modi
								alias est, adipisci enim aut eveniet nostrum tempore atque quia
								magni dolores, porro facilis sit nihil eum beatae obcaecati
								ipsam nobis.
							</p>
						</div>
						<AboutDataItems />
						<div className="row">
							<div className="col-lg-12 text-center text-md-start">
								<a href="" className="btn btn-danger px-3 my-3 my-md-0">
									Download CV
								</a>
								<a href="" className="text-muted text-decoration-none mx-5">
									Facebook
								</a>
							</div>
						</div>
					</div>
					<AboutSkillItems />
				</div>
			</div>
		</section>
	);
};

export default About;
