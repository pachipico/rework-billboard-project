import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import Jumbotron from "react-bootstrap/Jumbotron";
import { Facebook, Twitter } from "react-bootstrap-icons";

function MainImage({ data }) {
	return (
		<div style={{ marginBottom: "50px" }}>
			<Jumbotron>
				<Container>
					<Row
						style={{
							height: "300px",
							display: "flex",
							justifyContent: "center",
							alignItems: "flex-end",
						}}
					>
						<Col lg={4} md={4}>
							<Image
								style={{
									width: "100%",
									height: "80%",
									boxShadow: "1px 2px 3px rgba(0,0,0,.5)",
								}}
								src={data.strArtistThumb}
							></Image>
						</Col>

						<Col lg={4}>
							<h1>{data.strArtist}</h1>
							<br />
							<p>Label: {data.strLabel ? data.strLabel : "No Data"}</p>
							<p>
								Born year: {data.intBornYear ? data.intBornYear : "No Data"}
							</p>
							<p>
								Debut: {data.intFormedYear ? data.intFormedYear : "No Data"}
							</p>
						</Col>
						<Col lg={4}>
							<div>
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
						</Col>
					</Row>
				</Container>
			</Jumbotron>
		</div>
	);
}

export default MainImage;
