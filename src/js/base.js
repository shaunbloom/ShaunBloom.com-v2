import * as artView from './views/artView';
import * as resumeView from './views/resumeView';
import * as portfolioView from './views/portfolioView';

export const elements = {
	mainNav: document.querySelector('.main-nav'),
	frameworkNav: document.querySelector('.framework-nav'),
	dynamicContent: document.querySelector('#dynamic-content')
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
			artView.renderView();
			break;
		case sections.RESUME:
			resumeView.renderView();
			break;
		case sections.PORTFOLIO:
			portfolioView.renderView();
			break;
	}
};