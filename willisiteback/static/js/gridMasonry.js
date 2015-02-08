function setMasonryGrid(){
	var $container = $('#container-wall') || "";
	// layout Masonry again after all images have loaded
	if(!$container){
		return;
	}else{

		$container.imagesLoaded(function() {
		  $container.masonry({
		  	 columnWidth: 1,
		  	 itemSelector : '.box'
		  });
		});
	}
}

function setTabletMasonryGrid(){
	var $container = $('#container-tablet-wall') || "";
	// layout Masonry again after all images have loaded
	if(!$container){
		return;
	}else{

		$container.imagesLoaded(function() {
		  $container.masonry({
		  	 columnWidth: 1,
		  	 itemSelector : '.box'
		  });
		});
	}
}

function setSmallMasonryGrid(){
	var $container = $('#container-small-wall') || "";
	// layout Masonry again after all images have loaded
	if(!$container){
		return;
	}else{

		$container.imagesLoaded(function() {
		  $container.masonry({
		  	 columnWidth: 1,
		  	 itemSelector : '.box'
		  });
		});
	}
}

$(function(){

	setMasonryGrid();
	setTabletMasonryGrid();
	setSmallMasonryGrid();

})