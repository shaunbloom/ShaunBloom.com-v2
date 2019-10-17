import * as homeView from './views/homeView';
import * as artView from './views/artView';
import * as artFullView from './views/artFullView';
import * as contactView from './views/contactView';
import * as resumeView from './views/resumeView';
import * as portfolioView from './views/portfolioView';
import { portfolioData } from './models/portfolio-data';
import { artData } from './models/art-data';
import { resumeData } from './models/resume-data';

export const elements = {
	mainNav: document.querySelector('.main-nav'),
	frameworkNav: document.querySelector('.framework-nav'),
	dynamicWrapper: document.querySelector('#dynamic-content'),
	dynamicContent: document.querySelector('#dynamic-content .content'),
	dynamicClose: document.querySelector('#dynamic-content #close'),
	homePage: document.querySelector('#home-page'),
	contactPage: document.querySelector('#contact-page'),
	homePageContent: document.querySelector('.background .content'),
	closeButton: document.querySelector('#close')

};

export const classes = {
	ART_FULL  : 'art-full-page',
	HOME_LINK : 'home-link' 
}

export const sections = {
	HOME      : 'home',
	ART       : 'art',
	ART_FULL  : 'artfull',
	CONTACT   : 'contact',
	RESUME    : 'resume',
	PORTFOLIO : 'portfolio'
};

export const noThumbnail = [
	'eddie',
	'man'
];

export const fadeElement = (el, type, callback) => {
	// Clearing the content can fail if the containers doesn't exist
	try {
		if (type === "in") {
			el.classList.remove("fade-out", "fade-out-init");
			el.classList.add("fade-in");
			return;
		}
		el.classList.remove("fade-in");
		el.classList.add('fade-out');
		setTimeout(clearContent, 1000, elements.homePageContent, calback);
		setTimeout(clearContent, 1000, elements.dynamicContent, calback);	
	} catch (err) {
		// Do nothing
	}
	
};

export const displayElement = (el, display) => {
	el.style.display = display;
};

export const clearContent = el => {
	// 1) Check if it's an array
	if (typeof el === "array") {

		// 2) Loop through all elements and clear the inner HTML
		el.forEach(parent => {
			parent.innerHTML = '';
		});

		return;
	}

	// 2) Otherwise just strip the innerHTML
	el.innerHTML = '';
};

// ID is only used or the full view art  page
export const renderMainView = (view, id) => {

	// 1) Render correct view
	switch (view) {
		case sections.ART:
			artView.renderView(artData);
			break;
		case sections.ART_FULL:
			artFullView.renderView(id);
			break;
		case sections.HOME:
			homeView.renderView();
			break;
		case sections.CONTACT:
			contactView.renderView();
			break;
		case sections.RESUME:
			resumeView.renderView(resumeData);
			break;
		case sections.PORTFOLIO:
			portfolioView.renderView(portfolioData);
			break;
	}

	// 2) Show dynamic content element for all but the Contact page anc home page
	if (view !== sections.CONTACT && view !== sections.HOME) {
		fadeElement(elements.dynamicWrapper, 'in');
	}
};