const Home = () => {
	return (
		<section id="home py-5">
			<div className="container-lg">
				<div className="row min-vh-100 align-items-center align-content-center">
					<div className="col-md-6 mt-5 mt-md-0">
						<div className="home-img text-center mt-5 mt-md-0">
							<img
								src="img/profile.png"
								alt="profile"
								className="rounded-circle mw-100"
							/>
						</div>
					</div>
					<div className="col-md-6 mt-5 mt-md-0 order-md-first">
						<div className="home-text">
							<p className="text-muted mb-1">Hello I'm</p>
							<h1 className="text-danger text-uppercase fs-1 fw-bold">
								Web Developer
							</h1>
							<h2 className="fs-4">Indra Saputra Idrus</h2>
							<p className="mt-4 text-muted">
								Lorem ipsum dolor sit amet consectetur adipisicing, elit. Ipsa
								omnis totam quae eligendi vitae magni maiores, voluptatibus
								exercitationem magnam pariatur atque cum quisquam, sunt quia,
								temporibus quas minima dolore modi.
							</p>
							<a href="#portfolio" className="btn btn-danger px-3 mt-3">
								My Work
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Home;
