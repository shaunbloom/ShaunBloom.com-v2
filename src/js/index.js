//Global app controller
import ImagePreloader from 'image-preloader';
import { elements, sections, clearContent, renderMainView, fadeElement, classes } from './base';
import { imgPreloadData} from './models/img-preload-data';
import { activateTwinkle, setElementToLoaded } from './views/homeView';


// Get image peload data
const preloadData = imgPreloadData();

// Get new image preloader
const preloader = new ImagePreloader();


const init = () => {
	// 1) Start preloading all images
	preloader.preload(preloadData)
	.then(function(status) {
	    setTimeout(activateTwinkle, 2000, '');
	});

	// 2) Fade main body in
	fadeElement(elements.mainBody, 'in');

	// 3) Fade in top border of content frame and scroll down
	setElementToLoaded(elements.mainContent, true);

	// 4) Load home page background
    setTimeout(setElementToLoaded, 1000, elements.background, true);

    // 5) Load Navs into view
    setTimeout(() => {
    	elements.mainContent.classList.remove('overflow-hidden');
    	setElementToLoaded(elements.frameworkNav, true);
    	setElementToLoaded(elements.mainNav, true);
    }, 2000);


	// 6) Render home page content into view
	renderMainView(sections.HOME);
}

init();


// FAMEWORK NAV
elements.frameworkNav.addEventListener('click', e => {
	//e.preventDefault();
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

	// 2) Fade dynamic content (Art Page) out before clearing
	fadeElement(elements.dynamicWrapper, 'out');

	setTimeout(function() {
		// 3) Clear dynamic content
        clearContent(elements.dynamicContent);

    	// 4) Add custom class to overide some of the dynamic containers base css    
        elements.dynamicWrapper.classList.add(classes.ART_FULL);
        elements.closeButton.classList.add(classes.ART_FULL);

        // 5) Render the full page art view
        renderMainView(sections.ART_FULL, name);

        // 6) Fade full art into view
        fadeElement(elements.dynamicWrapper, 'in');
    }, 1000);
});



// HOME link from CONTACT page
elements.homePageContent.addEventListener('click', e => {
	// 1) Supress background clicks as we only want to rendef from home-link clicks
	if (e.target.id === classes.HOME_LINK) {
		renderMainView(sections.HOME);
	}
});



// CLOSE BUTTON
elements.dynamicClose.addEventListener('click', e => {
	var isFullArtView = elements.closeButton.classList.contains(classes.ART_FULL);

	// 1) Fade out dynamic content
	fadeElement(elements.dynamicWrapper, 'out');
		
	setTimeout(function() {
		// 2) Cleardynamic content now that it's faded
        clearContent(elements.dynamicContent);

        // If this event is from the full art close button
		if (isFullArtView) {
			// 3) Remove full art override classes
			elements.dynamicWrapper.classList.remove(classes.ART_FULL)
			elements.closeButton.classList.remove(classes.ART_FULL)

			// 4) Render the art page
        	renderMainView(sections.ART);
        	return;
		}
		renderMainView(sections.HOME, '', true);
    }, 1000);
});


