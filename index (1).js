jQuery(document).ready(function(){
	$('.toggler').on('click', function() {
		$(this).toggleClass('stylebars');
		$('.main-menu').slideToggle(300, function() {
			$(this).toggleClass('nav-expand').css('display', '');
		})
	});	
});