import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Table from "react-bootstrap/Table";
import Jumbotron from "react-bootstrap/Jumbotron";
import Spinner from "react-bootstrap/Spinner";
import Button from "react-bootstrap/Button";
import Axios from "axios";
import List from "../Components/List/List";

// datepicker
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
function SearchPage() {
	const [Chart, setChart] = useState([]);
	const [IsLoading, setIsLoading] = useState(false);
	const [StartDate, setStartDate] = useState("");
	const [Week, setWeek] = useState("");
	const filterDatePickerDates = (date) => {
		return date.getDay() === 6;
	};

	const handleSearch = (e) => {
		e.preventDefault();
		setIsLoading(true);
		let today = "";
		function getToday() {
			var date = StartDate;
			var year = date.getFullYear();
			var month = ("0" + (1 + date.getMonth())).slice(-2);
			var day = ("0" + date.getDate()).slice(-2);

			return (today = year + "-" + month + "-" + day);
		}
		getToday();
		const variable = {
			today,
		};
		Axios.post("/api/chart/searchChart", variable)
			.then((response) => response)
			.then((response) => {
				if (response.data.success) {
					setWeek(response.data.chart.week);
					setChart(response.data.chart.songs);
					setIsLoading(false);
				} else {
					alert("Failed to search chart");
				}
			});
	};
	const renderList = Chart.map((song, index) => {
		return <List song={song} />;
	});

	return (
		<>
			<Jumbotron style={{ textAlign: "center" }}>
				<br />
				<h1>Select Date!</h1>

				<form action='submit' onSubmit={handleSearch}>
					<DatePicker
						dateFormat='yyyy-MM-dd'
						selected={StartDate}
						filterDate={filterDatePickerDates}
						onChange={(date) => setStartDate(date)}
						showMonthDropdown
						showYearDropdown
						withPortal
						dropdownMode='select'
					/>
					<div>
						<Button
							size='sm'
							variant='outline-primary'
							type='submit'
							// onClick={handleSearch}
						>
							Search
						</Button>
					</div>
				</form>
			</Jumbotron>
			<br />
			<br />
			<div>
				{IsLoading ? (
					<div style={{ textAlign: "center" }}>
						<Spinner animation='border' />
					</div>
				) : (
					<Table style={{ verticalAlign: "middle" }} striped bordered hover>
						{renderList}
					</Table>
				)}
			</div>
		</>
	);
}

export default SearchPage;
