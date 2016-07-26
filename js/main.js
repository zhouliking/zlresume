$(function(){
	$("#container").switchPage({
		'loop' : true,
		'keyboard' : true,
		'duration' : 500,
		'direction' : 'vertical'
	});

	var colors = [['#dfe8ed', '#30bae7'], ['#dfe8ed', '#d74680'], ['#dfe8ed', '#15c7a8'], ['#dfe8ed', '#eb7d4b'],
				['#dfe8ed', '#FF00FF'], ['#dfe8ed', 'purple'], ['#dfe8ed', '#00F5FF'], ['#dfe8ed', 'mediumorchid']];                                                           
	
	var percentage = [70,70,60,60,60,50,50,30];
	
	var circles = [];
	
	
	for (var i = 1; i <= 8; i++) {
		var child = document.getElementById('circles-' + i),
			//percentage = 31.42 + (i * 9.84);

		circles.push(Circles.create({
			id:         child.id,
			value:		percentage[i - 1],
			radius:     60,
			width:      12,
			text:       '%',
			colors:     colors[i - 1]
		}));
	}
		
});

