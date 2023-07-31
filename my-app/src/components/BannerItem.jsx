import React from "react";

const BannerItem = () => {
	return (
		<div className="container-fluid mt-4">
			<div className="banner-item row justify-content-center pt-4 text-white">
				<div>
					<div className="row justify-content-evenly">
						<div className="col-12 col-md-4">
							<img src="https://d3puay5pkxu9s4.cloudfront.net/curso/4271/800_imagen.jpg" />

							<p className="mt-3">Formación especializada</p>
						</div>
						<div className="col-12 col-md-4">
							<ul className="navbar-nav">
								<li key="1" className="nav-item">
									<span className="pe-5">Postres</span>
									<span>◈</span>
								</li>
								<li key="2" className="nav-item">
									<span className="pe-5">
										Comida Japonesa
									</span>{" "}
									<span>◈</span>
								</li>
								<li key="3" className="nav-item">
									<span className="pe-5">Comida Arabe</span>{" "}
									<span>◈</span>
								</li>
								<li key="4" className="nav-item">
									<span className="pe-5">Panaderia</span>{" "}
									<span>◈</span>
								</li>
							</ul>
						</div>
						<div className="col-12 col-md-4">
							<p className="mt-3">
								Tecnico en alimentos y Bebidas{" "}
								<strong>Especializacion</strong> y <strong>Cocinero 1</strong>
							</p>
						</div>
					</div>
					<p className="mt-4 text-center">
						© 2023 | Todos los derechos reservados.
					</p>
				</div>
			</div>
		</div>
	);
};

export default BannerItem;