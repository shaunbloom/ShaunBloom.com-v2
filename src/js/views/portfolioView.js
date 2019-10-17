import { elements } from '../base';

export const renderView = (portfolioData) => {
	const markup = `
		<section id="portfolio-page" class="dynamic-content main-content">
		<h1>PORTFOLIO</h1>
		${ renderArticle(portfolioData) }
		</section>
	`;

	elements.dynamicContent.insertAdjacentHTML('beforeend', markup);
};

const renderArticle = (data) => {
	let article = "";

	data.forEach(d => {
		article  = article + `
			<article class="${d.class}">
	          <a href="${d.url}">
	            <img class="img-responsive img-border img-left hidden-xs" src="${d.imgSrc}" alt="${d.title}"></a>
	          
	          <div class="description">
	             <div class="title">${d.title}</div>
	             <a href="${d.url}"><i class="fa fa-eye"><span>view</span></i></a>
	             ${d.description}
	          </div>
	        </article>
		`;
	});

	return article;
};