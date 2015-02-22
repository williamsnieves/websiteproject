var width = $(window).width();

function log(){
	console.log(arguments);
}

var csrftoken = $.cookie('csrftoken');


function csrfSafeMethod(method) {
    // these HTTP methods do not require CSRF protection
    return (/^(GET|HEAD|OPTIONS|TRACE)$/.test(method));
}

$.ajaxSetup({
    beforeSend: function(xhr, settings) {
        if (!csrfSafeMethod(settings.type) && !this.crossDomain) {
            xhr.setRequestHeader("X-CSRFToken", csrftoken);
        }
    }
});

function comment(){
	$(".custom-comment-btn").on("click", function(e){
		e.preventDefault();

		var $comment = $("#comment").val();
		var $nameNetwork = $(".social-picture img").attr("data-network");
		var $id_tutorial = $(".social-picture img").attr("data-id-tutorial") || null;
		var $id_lab = $(".social-picture img").attr("data-id-lab") || null;
		var $userName = $(".social-name span").text();

		var $imageProfile = "";

		if($nameNetwork == 'facebook'){
			var $tempimgurl = $(".social-picture img").attr("src");
			$tempimgurl = $tempimgurl.replace("?type=large", "");
			$imageProfile  = $tempimgurl;

		}else{
			$imageProfile = $(".social-picture img").attr("src");	
		}
		


		var data_comments = {
			comment: $comment,
			network: $nameNetwork,
			username: $userName,
			image: $imageProfile,
			id_tutorial: $id_tutorial,
			id_lab: $id_lab
		}


		$.ajax({
			url: "http://localhost:8000/comments/",
			dataType: "json",
			type: "POST",
			data: JSON.stringify(data_comments),
			success: function(response){
				console.log(response)

				$("#form-comment-wrapper").slideUp(function(){
					$(this).hide();
					$(".social-buttons-wrapper").removeClass("hideCommentButtons");
					$("#form-comment-wrapper .social-name span").text("");
					window.location.reload();
				});

			} 
		})
		
	})
}


function commentTablet(){
	$(".custom-comment-btn").on("click", function(e){
		e.preventDefault();

		var $comment = $("#comment-tablet").val();
		var $nameNetwork = $(".social-picture-tablet img").attr("data-network");
		var $id_tutorial = $(".social-picture-tablet img").attr("data-id-tutorial") || null;
		var $id_lab = $(".social-picture-tablet img").attr("data-id-lab") || null;
		var $userName = $(".social-name-tablet span").text();

		var $imageProfile = "";

		if($nameNetwork == 'facebook'){
			var $tempimgurl = $(".social-picture-tablet img").attr("src");
			$tempimgurl = $tempimgurl.replace("?type=large", "");
			$imageProfile  = $tempimgurl;

		}else{
			$imageProfile = $(".social-picture-tablet img").attr("src");
		}



		var data_comments = {
			comment: $comment,
			network: $nameNetwork,
			username: $userName,
			image: $imageProfile,
			id_tutorial: $id_tutorial,
			id_lab: $id_lab
		}


		$.ajax({
			url: "http://localhost:8000/comments/",
			dataType: "json",
			type: "POST",
			data: JSON.stringify(data_comments),
			success: function(response){
				console.log(response)

				$("#form-comment-wrapper-tablet").slideUp(function(){
					$(this).hide();
					$(".social-buttons-wrapper").removeClass("hideCommentButtons");
					$("#form-comment-wrapper-tablet .social-name-tablet span").text("");
					window.location.reload();
				});

			}
		})

	})
}

function commentSmall(){
	$(".custom-comment-btn").on("click", function(e){
		e.preventDefault();

		var $comment = $("#comment-small").val();
		var $nameNetwork = $(".social-picture-small img").attr("data-network");
		var $id_tutorial = $(".social-picture-small img").attr("data-id-tutorial") || null;
		var $id_lab = $(".social-picture-small img").attr("data-id-lab") || null;
		var $userName = $(".social-name-small span").text();

		var $imageProfile = "";

		if($nameNetwork == 'facebook'){
			var $tempimgurl = $(".social-picture-small img").attr("src");
			$tempimgurl = $tempimgurl.replace("?type=large", "");
			$imageProfile  = $tempimgurl;

		}else{
			$imageProfile = $(".social-picture-small img").attr("src");
		}



		var data_comments = {
			comment: $comment,
			network: $nameNetwork,
			username: $userName,
			image: $imageProfile,
			id_tutorial: $id_tutorial,
			id_lab: $id_lab
		}


		$.ajax({
			url: "http://localhost:8000/comments/",
			dataType: "json",
			type: "POST",
			data: JSON.stringify(data_comments),
			success: function(response){
				console.log(response)

				$("#form-comment-wrapper-small").slideUp(function(){
					$(this).hide();
					$(".social-buttons-wrapper").removeClass("hideCommentButtons");
					$("#form-comment-wrapper-small .social-name-small span").text("");
					window.location.reload();
				});

			}
		})

	})
}

function socialLogin(){
	$nameButton = "";

	hello.init({
		'twitter' : 'Xg0xqLocwwVqOL9jK0KdmL7aS',
		'facebook': '788783481157622'
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
					$(".social-buttons-wrapper").addClass("hideCommentButtons");
					var bigImageProfile = p.profile_image_url.replace("_normal", "");

					$("#form-comment-wrapper .social-picture img").attr("src", bigImageProfile);
					$("#form-comment-wrapper .social-picture img").attr("data-network",$nameButton);
					$("#form-comment-wrapper .social-name span").text("@"+p.screen_name);

					$("#form-comment-wrapper").slideDown().show();
					//console.log(p)
				}, log );
				break;
			case "facebook":

				var facebook = hello($nameButton);
				// Login
				facebook.login().then( function(r){
					// Get Profile
					//console.log(r);
					return facebook.api('me');
				}, log )
				.then( function(p){
                     console.log("entre aqui en web")
					// Put in page
					//document.getElementById('login').innerHTML = "<img src='"+ p.thumbnail + "' width=24/>Connected to "+ network+" as " + p.name;
					$(".social-buttons-wrapper").addClass("hideCommentButtons");
					var bigImageProfile = "http://graph.facebook.com/"+p.id+"/picture?type=large";

					$("#form-comment-wrapper .social-picture img").attr("src", bigImageProfile);
					$("#form-comment-wrapper .social-picture img").attr("data-network",$nameButton);
					$("#form-comment-wrapper .social-name span").text(p.name);

					$("#form-comment-wrapper").slideDown().show();
					//console.log(p)
				}, log );
				break;
			default:
				console.log("algo");
		}

	})

	$(".social-name a").on("click", function(e){
		e.preventDefault();

		var social_network = hello($nameButton);

		social_network.logout().then(
			function(e){
				$("#form-comment-wrapper").slideUp().hide();
				$(".social-buttons-wrapper").removeClass("hideCommentButtons");
				$("#form-comment-wrapper .social-name span").text("");
			},

			function(e){
				console.log(e.error.message);
			}

		)
	})
}

function socialLoginTablet(){
	$nameButton = "";

	hello.init({
		'twitter' : 'Xg0xqLocwwVqOL9jK0KdmL7aS',
		'facebook': '788783481157622'
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
					$(".social-buttons-wrapper").addClass("hideCommentButtons");
					var bigImageProfile = p.profile_image_url.replace("_normal", "");

					$("#form-comment-wrapper-tablet .social-picture-tablet img").attr("src", bigImageProfile);
					$("#form-comment-wrapper-tablet .social-picture-tablet img").attr("data-network",$nameButton);
					$("#form-comment-wrapper-tablet .social-name-tablet span").text("@"+p.screen_name);

					$("#form-comment-wrapper-tablet").slideDown().show();
					//console.log(p)
				}, log );
				break;
			case "facebook":
				var facebook = hello($nameButton);
				// Login
				facebook.login().then( function(r){
					// Get Profile
					//console.log(r);
					return facebook.api('me');
				}, log )
				.then( function(p){
					// Put in page
					//document.getElementById('login').innerHTML = "<img src='"+ p.thumbnail + "' width=24/>Connected to "+ network+" as " + p.name;
					$(".social-buttons-wrapper").addClass("hideCommentButtons");
					var bigImageProfile = "http://graph.facebook.com/"+p.id+"/picture?type=large";

					$("#form-comment-wrapper-tablet .social-picture-tablet img").attr("src", bigImageProfile);
					$("#form-comment-wrapper-tablet .social-picture-tablet img").attr("data-network",$nameButton);
					$("#form-comment-wrapper-tablet .social-name-tablet span").text(p.name);

					$("#form-comment-wrapper-tablet").slideDown().show();
					//console.log(p)
				}, log );
				break;
			default:
				console.log("algo");
		}

	})

	$(".social-name-tablet a").on("click", function(e){
		e.preventDefault();

		var social_network = hello($nameButton);

		social_network.logout().then(
			function(e){
				$("#form-comment-wrapper-tablet").slideUp().hide();
				$(".social-buttons-wrapper").removeClass("hideCommentButtons");
				$("#form-comment-wrapper-tablet .social-name span").text("");
			},

			function(e){
				console.log(e.error.message);
			}

		)
	})
}

function socialLoginSmall(){
	$nameButton = "";

	hello.init({
		'twitter' : 'Xg0xqLocwwVqOL9jK0KdmL7aS',
		'facebook': '788783481157622'
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
					$(".social-buttons-wrapper").addClass("hideCommentButtons");
					var bigImageProfile = p.profile_image_url.replace("_normal", "");

					$("#form-comment-wrapper-small .social-picture-small img").attr("src", bigImageProfile);
					$("#form-comment-wrapper-small .social-picture-small img").attr("data-network",$nameButton);
					$("#form-comment-wrapper-small .social-name-small span").text("@"+p.screen_name);

					$("#form-comment-wrapper-small").slideDown().show();
					//console.log(p)
				}, log );
				break;
			case "facebook":
				var facebook = hello($nameButton);
				// Login
				facebook.login().then( function(r){
					// Get Profile
					//console.log(r);
					return facebook.api('me');
				}, log )
				.then( function(p){
					// Put in page
					//document.getElementById('login').innerHTML = "<img src='"+ p.thumbnail + "' width=24/>Connected to "+ network+" as " + p.name;
					$(".social-buttons-wrapper").addClass("hideCommentButtons");
					var bigImageProfile = "http://graph.facebook.com/"+p.id+"/picture?type=large";

					$("#form-comment-wrapper-small .social-picture-small img").attr("src", bigImageProfile);
					$("#form-comment-wrapper-small .social-picture-small img").attr("data-network",$nameButton);
					$("#form-comment-wrapper-small .social-name-small span").text(p.name);

					$("#form-comment-wrapper-small").slideDown().show();
					//console.log(p)
				}, log );
				break;
			default:
				console.log("algo");
		}

	})

	$(".social-name-small a").on("click", function(e){
		e.preventDefault();

		var social_network = hello($nameButton);

		social_network.logout().then(
			function(e){
				$("#form-comment-wrapper-small").slideUp().hide();
				$(".social-buttons-wrapper").removeClass("hideCommentButtons");
				$("#form-comment-wrapper-small .social-name-small span").text("");
			},

			function(e){
				console.log(e.error.message);
			}

		)
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

function closeMenuMobile(){
    $(".main-menu").slideUp();
}

function displayMoreProfile(){
	$(".expand-more-profile").on("click", function(e){
		e.preventDefault();
		$(".web-more-profile").slideToggle();
	})
}

function scrollTo(){
     $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top - 315
            }, 1000);
            closeMenuMobile();
            return false;
          }

        }
      });
}
 

$(function(){
	$(document).foundation();

    scrollTo();

	displayMenuMobile();

	displayMoreProfile();

    if(width >=  680){
        $(".main-menu").hide();
    }

    if(width >= 1000){
        socialLogin();
        comment();
    }


    if(width >=  680 && width < 1000){
        socialLoginTablet();
        commentTablet()
    }

    if(width < 680){
        socialLoginSmall();
        commentSmall()
    }


    //dynamicCaptionMasonry();
})