function dynamicCaptionMasonry(){
    $(".tut-image-content figure").on("mouseover", function(){
        var $imageHeight = $(this).children("img")[0].height;
        var $figcaptionTop = $(this).find("figcaption");


        $figcaptionTop.position().top = "400px";
        //console.log($figcaptionTop.position().top);

    })
}

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

    //dynamicCaptionMasonry();
})