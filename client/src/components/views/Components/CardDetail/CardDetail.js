import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
function CardDetail({ song }) {
	return (
		<div>
			<Card>
				<Card.Img variant='top' src={song.strTrackThumb} />

				<Card.Body>
					<Card.Title>{song.strTrack}</Card.Title>
					<Card.Text style={{ textAlign: "left", height: "30%" }}>
						{song.strDescriptionEN ? (
							<div>{song.strDescriptionEN.slice(0, 70)}...</div>
						) : (
							<div
								style={{
									textAlign: "center",
									height: "84px",
								}}
							>
								<h3>no Data</h3>
							</div>
						)}
					</Card.Text>
					<div>
						<Button
							variant='primary'
							style={{ position: "relative" }}
							href={song.strMusicVid}
						>
							Youtube
						</Button>
					</div>
				</Card.Body>
			</Card>
		</div>
	);
}

export default CardDetail;
