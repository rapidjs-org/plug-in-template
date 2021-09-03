/**
 * TODO: Add plug-in description.
 * 
 * (c) "author / copyright holder"
 */

// Object providing syntactical literals to be used among plug-in files
const config = {};	// TODO: Use or remove accordingly

// TODO: Optionally use private scope

// Core interface connection
module.exports = rapidJS => {
	// Initialize feature frontend module
	rapidJS.initFrontendModule("./frontend", config);	// TODO: Use frontend module initialization (if using frontend module)
	
	rapidJS.setEndpoint(body => {
		// TODO: Define endpoint

        return true;
    });
};