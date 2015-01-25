$(function(){
	var circle = new ProgressBar.Circle('#container-circle', {
    	color: '#aaa',
    	strokeWidth: 10,
    	duration: 2000,
    	text: {
        	value: '0'
    	},
	    from: { color: '#aaa', width: 0 },
	    to: { color: '#666', width: 10 },
	    step: function(state, bar) {
        	bar.setText((bar.value() * 100).toFixed(0) + "%");
    	}
	});
	circle.animate(1);
	var target;
	var circle2 = new ProgressBar.Circle('#container-circle2', {
    	color: '#00b4cc',
    	strokeWidth: 10,
    	duration: 2000,
    	text: {
        	value: '0'
    	},
	    from: { color: '#aaa', width: 0 },
	    to: { color: '#666', width: 10 },
	    step: function(state, bar) {
	    	bar.setText((bar.value() * 100).toFixed(0) + "%");
	    	target = bar.value();
	    	if((target * 100).toFixed(0) == 60){
				
	    		bar.stop();
	    	}       	

    	}

	});

	circle2.animate(1);
	/*circle2.animate(1, function(){
		circle2.animate();
	});*/
})