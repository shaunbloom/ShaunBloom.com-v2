import { elements, clearContent, noThumbnail, fadeElement } from '../base';

export const renderView = name => {
	const markup = `
    	<article id="${name}" class="portrait">
    		${renderThumbnail(name)}
    		<img name="${name}" src="http://images.shaunbloom.com/art/${name}-a-large.jpg">
    	</article>
    `;

    //clearContent(elements.dynamicContent);
  	elements.dynamicContent.insertAdjacentHTML('beforeend', markup);
    fadeElement(elements.dynamicWrapper, 'in');
  	//elements.artFullWrapper.style.display = 'block';
};

const renderThumbnail = name => {
	return (noThumbnail.indexOf(name) < 0) ? `
		<div id="original-thumb">
			<img src="http://www.shaunbloom.com/images/art/${name}-b-thumb.jpg">
		</div>
    ` : '';
};