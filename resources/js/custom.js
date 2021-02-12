$(document).ready(function(){
	$('.cart-count p').click(function(){
		$(this).hide();
	})

})

$(document).ready(function(){


	var mixer = mixitup('.filtering');


	//Dropdown menu
	$('.dropdown-btn').click(function(){
		$('.dropdown-content > a').toggle();
	})

	//Tooltip
	$('[data-toggle="tooltip"]').tooltip();	  

	//Owl carousel 
	$(document).ready(function(){
	  $(".owl-carousel").owlCarousel();
	});







});