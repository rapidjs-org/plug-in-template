/**
 * TODO: Add plug-in description.
 * 
 * (c) "author / copyright holder"
 */


// Interface
module.exports = rapidJS => {
	// Initialize feature client module
	$this.clientModule("./client");
	
	$this.endpoint((body, req) => {
        return true;
    });
};