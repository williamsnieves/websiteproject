$(document).ready(function(){
   $(".skill-image-right").show();
   $(".skill-image").show();
   var target;
		var circleLeftOne = new ProgressBar.Circle('#skill-left-1', {
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
	    	if((target * 100).toFixed(0) == $(".first-skill").attr("data-amount")){

	    		bar.stop();
	    	}

    	}

	});

	circleLeftOne.animate(1);


	var target;
	var circleLeftTwo = new ProgressBar.Circle('#skill-left-2', {
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
	    	if((target * 100).toFixed(0) == $(".second-skill").attr("data-amount")){

	    		bar.stop();
	    	}

    	}

	});

	circleLeftTwo.animate(1);


	var target;
	var circleLeftThree = new ProgressBar.Circle('#skill-left-3', {
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
	    	if((target * 100).toFixed(0) == $(".third-skill").attr("data-amount")){

	    		bar.stop();
	    	}

    	}

	});

	circleLeftThree.animate(1);


	var target;
	var circleLeftFour = new ProgressBar.Circle('#skill-left-4', {
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
	    	if((target * 100).toFixed(0) == $(".fourth-skill").attr("data-amount")){

	    		bar.stop();
	    	}

    	}

	});

	circleLeftFour.animate(1);


	var target;
	var circleLeftFive = new ProgressBar.Circle('#skill-left-5', {
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
	    	if((target * 100).toFixed(0) == $(".fifth-skill").attr("data-amount")){

	    		bar.stop();
	    	}

    	}

	});

	circleLeftFive.animate(1);




	var target;
	var circleRightOne = new ProgressBar.Circle('#skill-right-1', {
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
	    	target = bar.value();
	    	if((target * 100).toFixed(0) == $(".first-skill-right").attr("data-amount")){

	    		bar.stop();
	    	}

    	}

	});

	circleRightOne.animate(1);


	var target;
	var circleRightTwo = new ProgressBar.Circle('#skill-right-2', {
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
	    	target = bar.value();
	    	if((target * 100).toFixed(0) == $(".second-skill-right").attr("data-amount")){

	    		bar.stop();
	    	}

    	}

	});

	circleRightTwo.animate(1);


	var target;
	var circleRightThree = new ProgressBar.Circle('#skill-right-3', {
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
	    	target = bar.value();
	    	if((target * 100).toFixed(0) == $(".third-skill-right").attr("data-amount")){

	    		bar.stop();
	    	}

    	}

	});

	circleRightThree.animate(1);


	var target;
	var circleRightFour = new ProgressBar.Circle('#skill-right-4', {
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
	    	target = bar.value();
	    	if((target * 100).toFixed(0) == $(".fourth-skill-right").attr("data-amount")){

	    		bar.stop();
	    	}

    	}

	});

	circleRightFour.animate(1);

	/************************* tablet **************************************************/


	var target;
		var circleLeftTabletOne = new ProgressBar.Circle('#skill-left-tablet-1', {
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
	    	if((target * 100).toFixed(0) == $(".first-skill").attr("data-amount")){

	    		bar.stop();
	    	}

    	}

	});

	circleLeftTabletOne.animate(1);


	var target;
	var circleLeftTabletTwo = new ProgressBar.Circle('#skill-left-tablet-2', {
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
	    	if((target * 100).toFixed(0) == $(".second-skill").attr("data-amount")){

	    		bar.stop();
	    	}

    	}

	});

	circleLeftTabletTwo.animate(1);


	var target;
	var circleLeftTabletThree = new ProgressBar.Circle('#skill-left-tablet-3', {
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
	    	if((target * 100).toFixed(0) == $(".third-skill").attr("data-amount")){

	    		bar.stop();
	    	}

    	}

	});

	circleLeftTabletThree.animate(1);


	var target;
	var circleLeftTabletFour = new ProgressBar.Circle('#skill-left-tablet-4', {
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
	    	if((target * 100).toFixed(0) == $(".fourth-skill").attr("data-amount")){

	    		bar.stop();
	    	}

    	}

	});

	circleLeftTabletFour.animate(1);


	var target;
	var circleLeftTabletFive = new ProgressBar.Circle('#skill-left-tablet-5', {
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
	    	if((target * 100).toFixed(0) == $(".fifth-skill").attr("data-amount")){

	    		bar.stop();
	    	}

    	}

	});

	circleLeftTabletFive.animate(1);




	var target;
	var circleRightOne = new ProgressBar.Circle('#skill-right-tablet-1', {
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
	    	target = bar.value();
	    	if((target * 100).toFixed(0) == $(".first-skill-right").attr("data-amount")){

	    		bar.stop();
	    	}

    	}

	});

	circleRightOne.animate(1);


	var target;
	var circleRightTwo = new ProgressBar.Circle('#skill-right-tablet-2', {
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
	    	target = bar.value();
	    	if((target * 100).toFixed(0) == $(".second-skill-right").attr("data-amount")){

	    		bar.stop();
	    	}

    	}

	});

	circleRightTwo.animate(1);


	var target;
	var circleRightThree = new ProgressBar.Circle('#skill-right-tablet-3', {
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
	    	target = bar.value();
	    	if((target * 100).toFixed(0) == $(".third-skill-right").attr("data-amount")){

	    		bar.stop();
	    	}

    	}

	});

	circleRightThree.animate(1);


	var target;
	var circleRightFour = new ProgressBar.Circle('#skill-right-tablet-4', {
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
	    	target = bar.value();
	    	if((target * 100).toFixed(0) == $(".fourth-skill-right").attr("data-amount")){

	    		bar.stop();
	    	}

    	}

	});

	circleRightFour.animate(1);
})
