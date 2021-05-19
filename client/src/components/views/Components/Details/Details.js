import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Tabs from "react-bootstrap/Tabs";
import CardDetail from "../CardDetail/CardDetail";
import Tab from "react-bootstrap/Tab";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import "./Details.css";
import Col from "react-bootstrap/Col";

function Details({ data, videoData }) {
	const [DetailActivated, setDetailActivated] = useState(false);
	const [YoutubeActivated, setYoutubeActivated] = useState(false);
	console.log("videoData", videoData);

	const biography = () => {
		if (data.strBiographyEN) {
			if (!DetailActivated) {
				return (
					<p>
						{data.strBiographyEN.slice(0, 400)}...
						<a
							style={{ color: "blue" }}
							onClick={() => setDetailActivated(true)}
						>
							read more
						</a>
					</p>
				);
			} else {
				return <p>{data.strBiographyEN}</p>;
			}
		}
	};

	return (
		<div>
			<Tabs defaultActiveKey='profile' id='uncontrolled-tab-example'>
				<Tab eventKey='profile' title='Profile'>
					<div id='profile'>{biography()}</div>
				</Tab>
				<Tab eventKey='Youtube' title='Youtube'>
					{/* need to use grid to make it clean */}
					<Container style={{ textAlign: "center" }}>
						<Row>
							{videoData.map((song) => {
								return (
									<>
										{song.strTrackThumb && (
											<Col lg={3} md={4} style={{ margin: " 20px 0px" }}>
												<CardDetail song={song}></CardDetail>
											</Col>
										)}
									</>
								);
							})}
						</Row>
					</Container>
				</Tab>
				<Tab eventKey='contact' title='Contact'>
					<div id='contact'>
						<a href={`https://${data.strFacebook}`} target='_blank'>
							FaceBook
						</a>
						<br />
						<a href={`https://${data.strTwitter}`} target='_blank'>
							Tweeter
						</a>
						<br />
						<a href={`https://${data.strWebsite}`} target='_blank'>
							{data.strWebsite}
						</a>
					</div>
				</Tab>
			</Tabs>
		</div>
	);
}

export default Details;
