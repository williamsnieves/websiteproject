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

$(function(){

	setMasonryGrid();

})