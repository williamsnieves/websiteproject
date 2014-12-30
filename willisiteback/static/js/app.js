function displayMenuMobile(){
	$("#main-menu-display").on("click", function(e){
		e.preventDefault();
		$(".main-menu").slideToggle();
	})
}

function displayMoreProfile(){
	$(".expand-more-profile").on("click", function(e){
		e.preventDefault();
		$(".web-more-profile").slideToggle();
	})
}
 

$(function(){
	$(document).foundation();

	displayMenuMobile();

	displayMoreProfile();
})