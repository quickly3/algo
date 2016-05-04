function quickSort(arr){
	if(arr.length > 1){
		var k = arr[0],
			x = [],
			y = [],
			size = arr.length;
		
		for(var i = 1;i<size ;i++ ){
			if( arr[i] <= k ){
				x.push(arr[i]);
			}else{
				y.push(arr[i]);
			}
		}

		x = quickSort(x);
		y = quickSort(y);

		return x.concat([k],y);

	}else{
		return arr;	
	}

	
}



function swap(a,b){
	var ax = {},
		bx = {},
		tempx = {};

	ax.cx = svg.select("#multi-"+ a +" > circle").attr("cx");
	ax.x  = svg.select("#multi-"+ a +" > text").attr("x");
	bx.cx = svg.select("#multi-"+ b +" > circle").attr("cx");
	bx.x  = svg.select("#multi-"+ b +" > text").attr("x");	

	svg.select("#multi-"+ a +" > circle").transition().duration(500).attr("cx",bx.cx);
	svg.select("#multi-"+ a +" > text").transition().duration(500).attr("x",bx.x);
	

	svg.select("#multi-"+ b +" > circle").transition().duration(500).attr("cx",ax.cx);
	svg.select("#multi-"+ b +" > text").transition().duration(500).attr("x",ax.x);


	svg.select("#multi-"+ a).attr("id","multi-"+b);
	svg.select("#multi-"+ b).attr("id","multi-"+a);

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




num = quickSort(num);
// svg.select("#multi-1 > circle").transition().attr("cx",-200);
// svg.select("#multi-1 > text").transition().attr("x",-200);