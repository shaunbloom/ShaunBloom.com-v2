import * as artView from './views/artView';
import * as contactView from './views/contactView';
import * as resumeView from './views/resumeView';
import * as portfolioView from './views/portfolioView';
import { portfolioData } from './models/portfolio-data';
import { artData } from './models/art-data';

export const elements = {
	mainNav: document.querySelector('.main-nav'),
	frameworkNav: document.querySelector('.framework-nav'),
	dynamicWrapper: document.querySelector('#dynamic-content'),
	dynamicContent: document.querySelector('#dynamic-content .content'),
	homePageBackground: document.querySelector('.background')

};

export const sections = {
	ART       : 'art',
	CONTACT   : 'contact',
	RESUME    : 'resume',
	PORTFOLIO : 'portfolio'
};

export const clearContent = parent => {
	parent.innerHTML = '';
};

export const renderMainView = view => {
	switch (view) {
		case sections.ART:
			artView.renderView(artData);
			break;
		case sections.CONTACT:
			clearContent(elements.homePageBackground);
			contactView.renderView();
			break;
		case sections.RESUME:
			resumeView.renderView();
			break;
		case sections.PORTFOLIO:
			portfolioView.renderView(portfolioData);
			break;
	}

	// Show dynamic content element for all but the Contact page
	if (view !== sections.CONTACT) {
		elements.dynamicWrapper.style.display = 'block';
	}
};