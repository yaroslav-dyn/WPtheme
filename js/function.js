$(document).ready(function(){ 
	//remove the margin-right at 4-el image in gallery
	$('.gallery_plate:nth-of-type(4n)').css
		({
			'margin-right': '0'
		});
	//remove the margin-right at 3-el div in sidebar
	$('.footer_inner .bar:nth-of-type(3n)').css
		({
			'margin-right': '0'
		});
	//remove the margin-right at 2-el li in footer search tag
	$('.footer_inner .by ul:nth-of-type(2)').css
		({
			'margin-right': '0'
		});
		
	$('#search_input').on('focus', function(){
		$(this).attr('value', '');
	});
		$('#search_input').on('blur', function(){
		$(this).attr('value', 'Looking for something?');
	});
		
});