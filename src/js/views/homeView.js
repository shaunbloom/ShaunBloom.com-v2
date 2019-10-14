import { elements, clearContent } from '../base';

export const renderView = () => {
	const markup = `
		<article id="home-page" class="dynamic-content">
			<div class="twinkle"></div>
			<table>
		    	<tbody>
		    		<tr>
		        		<td class="name">Name:</td> 
		        		<td class="value">Shaun Bloom</td>
		        	</tr>
		        	<tr>
				        <td class="name">Age:</td> 
			    	    <td class="value">Wise</td>
			        </tr>
			        <tr>
				        <td class="name">Location:</td> 
			    	    <td class="value">Duvall, WA</td>    
			        </tr>
			        <tr>
				        <td class="name">Occupation:</td> 
			    	    <td class="value">Web Developer</td>  
			        </tr>
			        <tr>
				        <td class="name">Motto:</td>
			    	    <td class="value pad">Don't cry over spilt milk, cry over David Lee Roth's hair now!</td>
			        </tr>
			        <tr>
				        <td class="name">Objective:</td>
			    	    <td class="value pad">Make it through life without going too crazy, raise my kids to the best of my ability, and conquer the web one day at a time. God only knows how much info is out there to learn!!</td>
			        </tr>
		    	</tbody>
			</table>
		</article>
	`;
	clearContent(elements.homePageBackground);
	elements.homePageBackground.insertAdjacentHTML('beforeend', markup);
};

export const updateSelectedFrameworkNav = (e) => {

	// Get all framework nav link elements
	const fwNavArr = Array.from(document.querySelectorAll('.fw-link'));
   
    // Remove selected class from all framework nav link elements
   	fwNavArr.forEach(el => {
   		el.classList.remove('selected');
   	});

   	// Add selected class to the current framework nav link element
   	e.target.classList.add('selected');
};