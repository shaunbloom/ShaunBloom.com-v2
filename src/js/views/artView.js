import { elements, clearContent } from '../base';

export const renderView = (artData) => {
  	const markup = `
        <section id="art-page" class="dynamic-content main-content">
        <h1>ART</h1>
        ${ renderArticle(artData) }
        </section>
    `;
    //clearContent(elements.dynamicContent);
  	elements.dynamicContent.insertAdjacentHTML('beforeend', markup);
};

const renderArticle = (data) => {
    let article = "";

    data.forEach(d => {
        article  = article + `  
            <article class="art-full">
              <a class="thumb"  title="Click for full view">
                <img name="tupac" src="${d.thumbPath}" class="section#art-page article img"  data-name="${d.name}" data-year="${d.year}">
                <footer>${d.name.charAt(0).toUpperCase() + d.name.slice(1)} '${d.year}</footer>
              </a>
              <hr>
              ${purchaseLink(d)}
            </article>
      `;
    });

    return article;
};

const purchaseLink = (d) => {
    if (d.purchase) {
      return `<a href="${d.smallpaper}" class="purchase-link" target="_blank">${d.linkText}</a>`;
    }

    return `<span class="purchase-link-blank"><br></span>`;
};