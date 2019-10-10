//Global app controller
import { elements, sections, clearContent, renderMainView } from './base';
import * as homeView from './views/homeView';


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

document.querySelector('#close').addEventListener('click', e => {
	elements.dynamicWrapper.style.display = 'none';
	clearContent(elements.dynamicContent);
});