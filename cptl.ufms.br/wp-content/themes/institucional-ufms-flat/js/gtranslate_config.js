if ( jQuery( ".switcher2" ).length ) { 
	jQuery('.switcher2 .option2').html(jQuery('.switcher2 .option2').html().replace(/return false;/g,"jQuery('div.switcher div.selected a').html(jQuery(this).html());return false;"));
}
if ( jQuery( ".switcher" ).length ) { 
	jQuery('.switcher .option').html(jQuery('.switcher .option').html().replace(/return false;/g,"jQuery('div.switcher2 div.selected2 a').html(jQuery(this).html());return false;"));
}