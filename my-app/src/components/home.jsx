import React from "react";
import Header from "./header.jsx";
import Header2 from "./header2.jsx";
import MainContent from "./MainContent.jsx";
import BannerItem from "./BannerItem.jsx";
import "../../styles/bootstrap.min.css";

const Home = () => {
	return (
		<>
			<div>
				<Header />
			</div>
			<div>
				<Header2 />
			</div>
			<div className="container">
				<MainContent />
			</div>
			<BannerItem />
		</>
	);
};

// Exports
export default Home;