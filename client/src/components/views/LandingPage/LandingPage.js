import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Table from "react-bootstrap/Table";
import Spinner from "react-bootstrap/Spinner";
import Axios from "axios";
import List from "../Components/List/List";

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
	Chart && console.log("landingpage", Chart);
	const renderList = Chart.map((song, index) => {
		return <List song={song} />;
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
				<Table style={{ verticalAlign: "middle" }} striped bordered hover>
					{renderList}
				</Table>
			)}
		</>
	);
}

export default LandingPage;
