/**
 * New page dialog plugin 
 * 
 * @author christian studer <christian.studer@meteotest.ch>
 * @link http://www.dokuwiki.org/plugin:npd
 */
jQuery(function(){
	var $button = jQuery('#npd__create_button');
	if (!$button) return;
	
	// Check for link value 
	var npd_clicked_url = $button.attr('href');
	
	if(npd_clicked_url == undefined){
		// If not, it's in form mode
		npd_clicked_url = jQuery('#npd__create_form').attr('action');
	}
	
	$button.click(function(event) {
		event.preventDefault();
		
		// Create dialog
		var w = window.open(npd_clicked_url, 'npd_window', 'width=753,height=400,resizable=no');
		w.focus();
	});
	
	// Show the button
	$button.show();
});
