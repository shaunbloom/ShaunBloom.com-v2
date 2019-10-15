import * as artView from './views/artView';
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
	//artFullWrapper: document.querySelector('#art-full-page'),
	//artFullContent: document.querySelector('#art-full-page .content'),
	//artFullClose: document.querySelector('#art-full-page #close'),
	homePageBackground: document.querySelector('.background')

};

export const sections = {
	ART       : 'art',
	CONTACT   : 'contact',
	RESUME    : 'resume',
	PORTFOLIO : 'portfolio'
};

export const noThumbnail = [
	'eddie',
	'man'
];

export const fadeElement = (el, type) => {
	if (type === "in") {
		el.classList.remove("fade-out", "fade-out-init");
		el.classList.add("fade-in");
		return;
	}
	el.classList.remove("fade-in");
	el.classList.add('fade-out');
	setTimeout(clearContent, 1000, elements.dynamicContent);
};

export const displayElement = (el, display) => {
	el.style.display = display;
	//clearContent(el);
};

export const clearContent = el => {

	if (typeof el === "array") {

		el.forEach(parent => {
			parent.innerHTML = '';
		})

		return;
	}
	el.innerHTML = '';
};

export const renderMainView = view => {
	switch (view) {
		case sections.ART:
			//clearContent(elements.dynamicContent);
			artView.renderView(artData);
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

	// Show dynamic content element for all but the Contact page
	if (view !== sections.CONTACT) {
		fadeElement(elements.dynamicWrapper, 'in');
		//elements.dynamicWrapper.style.display = 'block';
	}
};