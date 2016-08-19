$(function(){
	$("#container").switchPage({
		'loop' : true,
		'keyboard' : true,
		'duration' : 500,
		'direction' : 'vertical'
	});

	var colors = [['#D3B6C6', '#4B253A'],['#dfe8ed', '#30bae7'], ['#FCE6A4', '#EFB917'],['#dfe8ed', '#d74680'], ['#dfe8ed', '#15c7a8'], ['#dfe8ed', '#eb7d4b'],
				['#dfe8ed', '#FF00FF'], ['#dfe8ed', 'purple'], ['#dfe8ed', '#00F5FF'], ['#BEE3F7', '#45AEEA'],['#F8F9B6', '#D2D558']];                                                           
	
	var percentage = [60,70,60,60,40,30,30,60];
	
	var circles = [];
	
    for (var i = 1; i <= 8; i++) {
		var child = document.getElementById('circles-' + i);
			
		circles.push(Circles.create({
			id:         child.id,
			value:		percentage[i - 1],
			radius:     60,
			width:      12,		
			colors:     colors[i - 1]
		}));
		
	}
	for(var i = 1; i <= 8; i++){
		document.getElementById('add_button-'+i).onclick = function(e){
			
			var str= $(this).attr("id").substring(11);
			
			var ii = parseInt(str);
			if(circles[ii-1]._value == 100){
				circles[ii-1].update(0, 250);
			}
			circles[ii-1].update(circles[ii-1]._value + 10, 250);
			circles[ii-1].updateColors(colors[circles[ii-1]._value/10]);
		}
	}

});

