import Axios from "axios";
import React, { useEffect, useState } from "react";
import MainImage from "../Components/MainImage/MainImage";
import Details from "../Components/Details/Details";

function DetailsPage(props) {
	const [ArtistData, setArtistData] = useState([]);

	const [YoutubeLink, setYoutubeLink] = useState([]);
	const artist = props.match.params.id;

	useEffect(() => {
		Axios.get(`https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artist}`)
			.then((response) => response)
			.then((result) => {
				setArtistData(result.data.artists[0]);
				return result.data.artists[0].idArtist;
			})
			.then((result) => {
				Axios.get(`https://theaudiodb.com/api/v1/json/1/mvid.php?i=${result}`)
					.then((response) => response)
					.then((result) => setYoutubeLink(result.data.mvids));
			});
	}, []);

	ArtistData && console.log(ArtistData);
	YoutubeLink && console.log(YoutubeLink);
	return (
		<div>
			{ArtistData && <MainImage data={ArtistData}></MainImage>}
			<div>
				<Details videoData={YoutubeLink} data={ArtistData}></Details>
			</div>
		</div>
	);
}

export default DetailsPage;
