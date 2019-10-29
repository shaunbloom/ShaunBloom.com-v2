import { elements, clearContent, noThumbnail, fadeElement } from '../base';

export const renderView = name => {
	const markup = `
    	<article id="${name}" class="portrait">
    		${renderThumbnail(name)}
    		<img name="${name}" src="http://images.shaunbloom.com/art/${name}-a-large.jpg">
    	</article>
    `;
    
  	elements.dynamicContent.insertAdjacentHTML('beforeend', markup);
};

const renderThumbnail = name => {
	return (noThumbnail.indexOf(name) < 0) ? `
		<div id="original-thumb">
			<img src="http://www.shaunbloom.com/images/art/${name}-b-thumb.jpg">
		</div>
    ` : '';
};