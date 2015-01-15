function log(){
	console.log(arguments);
}

function socialLogin(){
	$nameButton = "";

	hello.init({
		'twitter' : 'Xg0xqLocwwVqOL9jK0KdmL7aS'
	})
	$(".social-button").on("click", function(e){
		e.preventDefault()
		$nameButton = $(this).attr("data-name");

		switch($nameButton){
			case "twitter":
				var twitter = hello($nameButton);
				// Login
				twitter.login().then( function(r){
					// Get Profile
					//console.log(r);
					return twitter.api('me');
				}, log )
				.then( function(p){
					// Put in page
					//document.getElementById('login').innerHTML = "<img src='"+ p.thumbnail + "' width=24/>Connected to "+ network+" as " + p.name;
					$("#form-comment-wrapper .social-picture img").attr("src", p.profile_image_url);
					console.log(p)
				}, log );
				break;
			case "facebook":
				console.log("llamar a facebook")
				break;
			default:
				console.log("algo");
		}

	})
}


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

	socialLogin();
    //dynamicCaptionMasonry();
})