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