//Global app controller
import { elements, sections, clearContent, renderMainView, fadeElement } from './base';
import * as artFullView from './views/artFullView';

// Rende main view for the first time
renderMainView(sections.HOME);


// FAMEWORK NAV
elements.frameworkNav.addEventListener('click', e => {
	e.preventDefault();
	homeView.updateSelectedFrameworkNav(e);
});



// MAIN NAV
elements.mainNav.addEventListener('click', e => {
	// 1) Get section name
	const section = e.target.dataset.section;

	// 2) Render the new section view
	renderMainView(section);
});



// ART THUMBNAILS
elements.dynamicContent.addEventListener('click', e => {
	// 1) Get art work name
	const name = e.target.dataset.name.replace('-', '');

	// 2) Clear the current dynamic content as we rerender
	fadeElement(elements.homePageContent, 'out');

	// 3) Add custom class to overide some of the dynamic
	//    containers base css
	elements.dynamicContent.classList.add('art-full-page');
	
	// 4) Render the full page art view
	artFullView.renderView(name);
});



// HOME link from CONTACT page
elements.homePageContent.addEventListener('click', e => {
	// 1) Make sure it was the actual home-link that
	//    was clicked on and not the background
	if (e.target.id === "home-link") {
		renderMainView(sections.HOME);
	}
});



// CLOSE BUTTON
elements.dynamicClose.addEventListener('click', e => {
	// 1) Fade out dynamic content
	fadeElement(elements.dynamicWrapper, 'out');

	// 2) Wait second for the fade before clearing the content 
	//    and fading the dynamic content container back in
	setTimeout(function() {
        clearContent(elements.dynamicContent);
        fadeElement(elements.dynamicContent, 'in');
    }, 1000);
});

