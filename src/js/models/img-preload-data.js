import { artData } from './art-data';


export const imgPreloadData = () => {
	const imgPreloadUrls = [];

	artData.forEach(data => {
		// Always add the full image abnd it's thumb path
		imgPreloadUrls.push(data.imagePath);
		imgPreloadUrls.push(data.thumbPath);

		// Only add the original thumb path if it exist
		(data.originalThumbPath !== "") ? imgPreloadUrls.push(data.originalThumbPath) : null;
	});

	return imgPreloadUrls;
}