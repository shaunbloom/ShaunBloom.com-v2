//Global app controller
import { elements, sections, clearContent, renderMainView, fadeElement } from './base';
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

	console.log(e);

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
	
	fadeElement(elements.dynamicWrapper, 'out');
	//clearContent(elements.dynamicContent);

	elements.dynamicContent.classList.add('art-full-page');
	// Render the new sections view
	artFullView.renderView(name);
});

elements.homePageBackground.addEventListener('click', e => {
	e.preventDefault();
	homeView.renderView();
});

elements.dynamicClose.addEventListener('click', e => {
	fadeElement(elements.dynamicWrapper, 'out');
	//elements.dynamicContent.classList.remove('art-full-page');
	//elements.dynamicWrapper.style.display = 'none';
});

// elements.artFullClose.addEventListener('click', e => {
// 	fadeElement(elements.artFullWrapper, 'out');
// 	clearContent(elements.artFullContent);
// 	renderMainView(sections.ART);
// });