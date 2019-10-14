import { elements, clearContent, noThumbnail } from '../base';

export const renderView = name => {
	const markup = `
    	<article id="${name}" class="portrait">
    		${renderThumbnail(name)}
    		<img name="${name}" src="http://images.shaunbloom.com/art/${name}-a-large.jpg">
    	</article>
    `;

    clearContent(elements.artFullContent);
  	elements.artFullContent.insertAdjacentHTML('beforeend', markup);
  	elements.artFullWrapper.style.display = 'block';
};

const renderThumbnail = name => {
	return (noThumbnail.indexOf(name) < 0) ? `
		<div id="original-thumb">
			<img src="http://www.shaunbloom.com/images/art/${name}-b-thumb.jpg">
		</div>
    ` : '';
};