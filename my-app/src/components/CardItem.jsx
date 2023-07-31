import React from "react";
import PropTypes from "prop-types";

import Card from "react-bootstrap/Card";

const CardItem = (props) => {
	return (
		<Card className="bg-dark text-white border-0 card-item shadow-sm">
			<Card.Img src="https://ingenieriademenu.com/wp-content/uploads/2021/01/Top-10-tipos-de-cocina-internacional-mas-populares-del-mundo.jpg" />
			<Card.ImgOverlay className="d-flex justify-content-start align-items-center">
				<div className="p-2">
					<Card.Title className="m-0">{props.title}</Card.Title>
					<Card.Text>{props.courses} cursos</Card.Text>
				</div>
				<div className="card-arrow text-end">&#8250;</div>
			</Card.ImgOverlay>
		</Card>
	);
};

CardItem.propTypes = {
	title: PropTypes.string,
	courses: PropTypes.number,
};

export default CardItem;

