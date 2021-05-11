import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Table from "react-bootstrap/Table";
import Badge from "react-bootstrap/Badge";
import Image from "react-bootstrap/Image";

function List({ song }) {
	let artist = song.artist;

	const unNessessary = [" & ", " Featuring ", " X ", " + ", " x ", "Duet With"];
	unNessessary.map((string) => {
		artist = artist.replace(string, ",");
	});
	artist = artist.split(",");

	return (
		<tbody>
			<tr>
				<td>{song.rank}</td>
				<td style={{ width: "5%" }}>
					<Image src={song.cover} fluid />
				</td>
				<td>{song.title}</td>
				<td>
					{artist.map((artist) => {
						return (
							<a href={`/details/${artist}`}>
								{`${artist}`}&nbsp;&nbsp;&nbsp;&nbsp;
							</a>
						);
					})}
				</td>
			</tr>
		</tbody>
	);
}

export default List;
