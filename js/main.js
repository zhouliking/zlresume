$(function(){
	$("#container").switchPage({
		'loop' : true,
		'keyboard' : true,
		'duration' : 500,
		'direction' : 'vertical'
	});

	var colors = [['#D3B6C6', '#4B253A'],['#dfe8ed', '#30bae7'], ['#FCE6A4', '#EFB917'],['#dfe8ed', '#d74680'], ['#dfe8ed', '#15c7a8'], ['#dfe8ed', '#eb7d4b'],
				['#dfe8ed', '#FF00FF'], ['#dfe8ed', 'purple'], ['#dfe8ed', '#00F5FF'], ['#BEE3F7', '#45AEEA'],['#F8F9B6', '#D2D558']];                                                           
	
	var percentage = [60,70,60,60,50,60,40,40];
	
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


 //Hobby
 require.config({
     paths:{ 
         'echarts' : '/lib/echarts',
         'echarts/chart/pie' : '/lib/echarts'
     }
 }); 
  // 使用
 require(
     [
         'echarts',
         'echarts/chart/pie' // 使用柱状图就加载bar模块，按需加载
     ],
     function (ec) {
         // 基于准备好的dom，初始化echarts图表
         var myChart = ec.init(document.getElementById('HobbyID')); 
         
         option = {
        		    title : {
        		        text: '某地区蒸发量和降水量',
        		        subtext: '纯属虚构'
        		    },
        		    tooltip : {
        		        trigger: 'axis'
        		    },
        		    legend: {
        		        data:['蒸发量','降水量']
        		    },
        		    toolbox: {
        		        show : true,
        		        feature : {
        		            mark : {show: true},
        		            dataView : {show: true, readOnly: false},
        		            magicType : {show: true, type: ['line', 'bar']},
        		            restore : {show: true},
        		            saveAsImage : {show: true}
        		        }
        		    },
        		    calculable : true,
        		    xAxis : [
        		        {
        		            type : 'category',
        		            data : ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
        		        }
        		    ],
        		    yAxis : [
        		        {
        		            type : 'value'
        		        }
        		    ],
        		    series : [
        		        {
        		            name:'蒸发量',
        		            type:'bar',
        		            data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
        		            markPoint : {
        		                data : [
        		                    {type : 'max', name: '最大值'},
        		                    {type : 'min', name: '最小值'}
        		                ]
        		            },
        		            markLine : {
        		                data : [
        		                    {type : 'average', name: '平均值'}
        		                ]
        		            }
        		        },
        		        {
        		            name:'降水量',
        		            type:'bar',
        		            data:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
        		            markPoint : {
        		                data : [
        		                    {name : '年最高', value : 182.2, xAxis: 7, yAxis: 183, symbolSize:18},
        		                    {name : '年最低', value : 2.3, xAxis: 11, yAxis: 3}
        		                ]
        		            },
        		            markLine : {
        		                data : [
        		                    {type : 'average', name : '平均值'}
        		                ]
        		            }
        		        },
        		        {
        		            name:'iiii量',
        		            type:'bar',
        		            data:[2.6, 5.9, 10.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
        		            markPoint : {
        		                data : [
        		                    {name : '年最高', value : 182.2, xAxis: 7, yAxis: 183, symbolSize:18},
        		                    {name : '年最低', value : 2.3, xAxis: 11, yAxis: 3}
        		                ]
        		            },
        		            markLine : {
        		                data : [
        		                    {type : 'average', name : '平均值'}
        		                ]
        		            }
        		        }
        		    ]
        		};
         // 为echarts对象加载数据 
         myChart.setOption(option); 
     }
 );

