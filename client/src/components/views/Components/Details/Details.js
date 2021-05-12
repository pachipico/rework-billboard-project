import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Tabs from "react-bootstrap/Tabs";

import Tab from "react-bootstrap/Tab";
import Media from "react-bootstrap/Media";

import "./Details.css";

function Details({ data, videoData }) {
	const [DetailActivated, setDetailActivated] = useState(false);
	const [YoutubeActivated, setYoutubeActivated] = useState(false);
	console.log("videoData", videoData);
	console.log(typeof videoData);
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
	const youtubeRender = (song) => {};
	return (
		<div>
			<Tabs defaultActiveKey='profile' id='uncontrolled-tab-example'>
				<Tab eventKey='profile' title='Profile'>
					<div id='profile'>{biography()}</div>
				</Tab>
				<Tab eventKey='Youtube' title='Youtube'>
					<ul id='youtube' className='list-unstyled'>
						{videoData
							? videoData.map((song) => {
									if (song.strTrackThumb) {
										return (
											<Media as='li'>
												<img
													width={64}
													height={64}
													className='mr-3'
													src={song.strTrackThumb}
													alt={song.strTrack}
												/>
												<Media.Body>
													<h5>{song.strTrack}</h5>
													{() => {
														if (YoutubeActivated) {
															return <p>{song.strDescriptionEN}</p>;
														} else {
															return (
																<p>
																	{song.strDescriptionEN.slice(0, 200)}...
																	<a onClick={() => setYoutubeActivated(true)}>
																		read more
																	</a>
																</p>
															);
														}
													}}
												</Media.Body>
											</Media>
										);
									}
							  })
							: null}
					</ul>
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
