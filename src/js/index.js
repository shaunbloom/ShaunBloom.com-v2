//Global app controller
import { elements, sections, clearContent, renderMainView } from './base';
import * as homeView from './views/homeView';
import * as artFullView from './views/artFullView';


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
	//clearContent(elements.dynamicContent);

	// Render the new sections view
	renderMainView(section);
});

// Art work click event listener
elements.dynamicContent.addEventListener('click', e => {
	// Get art work name
	const name = e.target.dataset.name.replace('-', '');

	// Clear the current dynamic content as we rerender upon closing the full page art
	// 
	clearContent(elements.dynamicContent);
	elements.dynamicWrapper.style.display = 'none';

	// Render the new sections view
	artFullView.renderView(name);
});

elements.homePageBackground.addEventListener('click', e => {
	e.preventDefault();
	homeView.renderView();
});

elements.dynamicClose.addEventListener('click', e => {
	elements.dynamicWrapper.style.display = 'none';
});

elements.artFullClose.addEventListener('click', e => {
	elements.artFullWrapper.style.display = 'none';
	renderMainView(sections.ART);
});