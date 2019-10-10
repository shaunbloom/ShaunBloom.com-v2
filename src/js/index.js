//Global app controller
import { elements, sections, clearContent, renderMainView } from './base';
import * as homeView from './views/homeView';


homeView.renderView();


// Framework Nav click event listener
elements.frameworkNav.addEventListener('click', e => {
	e.preventDefault();
	homeView.updateSelectedFrameworkNav(e);
});

// Main Nav click event listener
elements.mainNav.addEventListener('click', e => {
	// Get section
	const section = e.target.dataset.section;

	//Clear the current dynamic content
	clearContent(elements.dynamicContent);

	// Render the new sections view
	renderMainView(section);
});

elements.homePageBackground.addEventListener('click', e => {
	e.preventDefault();
	clearContent(elements.homePageBackground);
	homeView.renderView();
});

document.querySelector('#close').addEventListener('click', e => {
	elements.dynamicWrapper.style.display = 'none';
	clearContent(elements.dynamicContent);
});