import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Spinner from "react-bootstrap/Spinner";
import Axios from "axios";
import List from "../Components/List/List";

// datepicker
import WeekPicker from "../Components/WeekPicker/WeekPicker";

function LandingPage() {
	const [SelectedDate, setSelectedDate] = useState("");
	const [IsLoading, setIsLoading] = useState(true);
	const [Chart, setChart] = useState([]);
	useEffect(() => {
		Axios.get("/api/chart/getChart").then((response) => {
			if (response.data.success) {
				setChart(response.data.chart.songs);
				Chart && setIsLoading(false);
			} else {
				alert("Failed to get chart");
			}
		});
	}, []);
	const renderList = Chart.map((song, index) => {
		return <List chart={Chart} />;
	});
	return (
		<>
			<div>
				<Jumbotron>
					<Container>
						<h1>
							This week's Billboard{" "}
							<span style={{ color: "red" }}>hot 100</span>
						</h1>
						<p>Click to see more information!</p>
					</Container>
				</Jumbotron>
			</div>
			{IsLoading ? (
				<div style={{ textAlign: "center" }}>
					<Spinner animation='border' />
				</div>
			) : (
				<div>{renderList}</div>
			)}
			<div></div>
		</>
	);
}

export default LandingPage;
