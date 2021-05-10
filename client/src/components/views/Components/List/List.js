import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Table from "react-bootstrap/Table";
import Image from "react-bootstrap/Image";

function List({ chart }) {
	const renderData = chart.map((song) => {
		return (
			<tr style={{ verticalAlign: "middle" }}>
				<td>{song.rank}</td>
				<td width='5%'>
					<Image src={song.cover} fluid />
				</td>
				<td>{song.title}</td>

				<td>{song.artist}</td>
			</tr>
		);
	});
	return (
		<Table striped bordered hover>
			<tbody>{renderData}</tbody>
		</Table>
	);
}

export default List;
