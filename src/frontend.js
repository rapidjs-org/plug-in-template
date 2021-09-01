/*
 * Access the config object as passed to the frontend module initialization via identifier "config"
 */

document.addEventListener("DOMContentLoaded", _ => {
	// TODO: Use endpoint
	rapidJS.useEndpoint(reqObj)
	.then(res => {
		// TODO: Handle successful response body
	}).catch(err => {
		// TODO: Handle error
	});
});

// TODO: Optionally use public scope
/* 
 *Example:

PUBLIC.method = function() {
	return "Hello world";
};

 */