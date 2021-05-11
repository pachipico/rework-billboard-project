import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Tabs from "react-bootstrap/Tabs";

import Tab from "react-bootstrap/Tab";
import Card from "react-bootstrap/Card";

import "./Details.css";

function Details({ data, videoData }) {
	const [Activated, setActivated] = useState(false);
	console.log("videoData", videoData);
	console.log(typeof videoData);
	const biography = () => {
		if (data.strBiographyEN) {
			if (!Activated) {
				return (
					<p>
						{data.strBiographyEN.slice(0, 400)}...
						<a style={{ color: "blue" }} onClick={() => setActivated(true)}>
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
					{biography()}
				</Tab>
				<Tab eventKey='Youtube' title='Youtube'>
					{videoData.map((video) => {
						return (
							<>
								<a href={video.strMusicVid} target='_blank'>
									{video.strTrack}
								</a>
								<br />
							</>
						);
					})}
				</Tab>
				<Tab eventKey='contact' title='Contact' disabled>
					sadfas
				</Tab>
			</Tabs>
		</div>
	);
}

export default Details;
