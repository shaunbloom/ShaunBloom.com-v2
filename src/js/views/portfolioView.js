import { elements } from '../base';

export const renderView = () => {
	const markup = `
		PORTFOLIO PORTFOLIO PORTFOLIO PORTFOLIO PORTFOLIO PORTFOLIO PORTFOLIO PORTFOLIO PORTFOLIO PORTFOLIO PORTFOLIO 
		PORTFOLIO PORTFOLIO PORTFOLIO PORTFOLIO PORTFOLIO PORTFOLIO PORTFOLIO PORTFOLIO PORTFOLIO PORTFOLIO PORTFOLIO
		PORTFOLIO PORTFOLIO PORTFOLIO PORTFOLIO PORTFOLIO PORTFOLIO PORTFOLIO PORTFOLIO PORTFOLIO PORTFOLIO PORTFOLIO
		PORTFOLIO PORTFOLIO PORTFOLIO PORTFOLIO PORTFOLIO PORTFOLIO PORTFOLIO PORTFOLIO PORTFOLIO PORTFOLIO PORTFOLIO
		PORTFOLIO PORTFOLIO PORTFOLIO PORTFOLIO PORTFOLIO PORTFOLIO PORTFOLIO PORTFOLIO PORTFOLIO PORTFOLIO PORTFOLIO
		PORTFOLIO PORTFOLIO PORTFOLIO PORTFOLIO PORTFOLIO PORTFOLIO PORTFOLIO PORTFOLIO PORTFOLIO PORTFOLIO PORTFOLIO
		PORTFOLIO PORTFOLIO PORTFOLIO PORTFOLIO PORTFOLIO PORTFOLIO PORTFOLIO PORTFOLIO PORTFOLIO PORTFOLIO PORTFOLIO
		PORTFOLIO PORTFOLIO PORTFOLIO PORTFOLIO PORTFOLIO PORTFOLIO PORTFOLIO PORTFOLIO PORTFOLIO PORTFOLIO PORTFOLIO
	`;

	elements.dynamicContent.insertAdjacentHTML('afterbegin', markup);
};