$(document).ready(function(){ 
//remove the margin-right at 4-el image in gallery
$('.gallery_plate:nth-of-type(4n)').css
	({
		'margin-right': '0'
	});
//remove the margin-right at 3-el div in sidebar
$('.sidebar .bar:nth-of-type(3n)').css
	({
		'margin-right': '0'
	});
	
});