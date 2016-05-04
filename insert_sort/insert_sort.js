
function insertSort(arr){
	for(var i = 1; i<arr.length; i++){
		tmp = arr[i];
		key = i - 1;
		while( key >= 0 && tmp < arr[key] ){
			console.log(key)
			arr[key+1] = arr[key];
			swap(key,key+1)
			key-=1;
		}

		if(key+1 != i){
			swap(key+1,i);	
		}
		
		arr[key+1] = tmp;
		// if(i == 3){
		// 	break;
		// }
	}
	return arr;
}


var cnt = 1;
var trans = d3.transition();
function swap(a,b){
	var ax = {},
		bx = {},
		tempx = {};

	

	// if(cnt == 0){
	// 	return false;
	// }
	// console.log(a,b)
	


	var transition = svg.transition().duration(750),
		delay = function(){ return cnt * 50 };

	ax.cx = svg.select("#multi-"+ a +" > circle").attr("cx");
	ax.x  = svg.select("#multi-"+ a +" > text").attr("x");
	bx.cx = svg.select("#multi-"+ b +" > circle").attr("cx");
	bx.x  = svg.select("#multi-"+ b +" > text").attr("x");	


	transition.select("#multi-"+ a +" > circle")
		.delay(delay)
		.attr("cx",bx.cx);

	transition.select("#multi-"+ a +" > text")
		.delay(delay)
		.attr("x",bx.x);
	
	transition.select("#multi-"+ b +" > circle")
		.delay(delay)	
		.attr("cx",ax.cx);
	transition.select("#multi-"+ b +" > text")
		.delay(delay)
		.attr("x",ax.x);

	

	var dom_a = svg.select("#multi-"+ a);
	var dom_b = svg.select("#multi-"+ b);

	dom_a.attr("id","multi-"+b);
	dom_b.attr("id","multi-"+a);

	cnt++;
}





num = [54,2135,31520,2015,3451,21,42,1,4,120,87];



var width = 960,
	height = 500,
	cornerRadius = 30;

var svg = d3.select("body").append("svg")
			.attr({"width":width,"height":height})
			.append("g")
			.attr("transform","translate("+width/2+","+height/2+")");

svg.selectAll(".multi-cir")
	.data(num)
	.enter()
	.append("g")
	.attr("class","multi-cir")
	.attr("id",function(d,i){
		return "multi-"+i;
	})
	.append("circle")
    .style("stroke", "#555")
    .style("fill", "#2a6496")
    .attr("class", "corner")
    .attr("cx", function(d,i) { 
    	return (i - 5) * 80
    })
    .attr("cy", function(d,i) {  
    	return 0
    })
    .attr("r",cornerRadius);

svg.selectAll(".multi-cir")
	.append("text")
    .attr("x", function(d,i){
    	var _len = d.length

    	return (i - 5) * 80;
    })
    .attr("y", function(d,i){
    	return 0
    })
    .attr("dx",function(d){
    	var _len = (''+d);

    	return -4*_len.length;
    })
    .attr("dy", ".35em")
    .attr("class", "title")
    .style("fill","#fff")
    .text(function(d){
    	return d
    });




num = insertSort(num);
console.log(num)