import React from "react";

import "../../styles/header2.css";

function Header2() {
	return (
		<>
			<div className="container-fluid">
				<div className="row rowheader">
					<div className="col-1"></div>
					<div className="col-6 textheader">
						<h2>
							Planes de estudio, cursos y tecnicos 
						</h2>
						<br></br>
						<p>
							Haz realidad tu sueño y conviertete en un profesional de la cocina.
						</p>
						<br></br>
						<button className="buttonheader">
							Iniciar mi carrera 
						</button>
					</div>
					<div className="col-5">
						<iframe
							className="videoheader"
							width="560"
							height="315"
							src="https://youtu.be/dB9NrfO-oEI"
							title="YouTube video player"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
					</div>
				</div>
			</div>
		</>
	);
}

export default Header2;