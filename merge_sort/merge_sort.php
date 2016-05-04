<?php 	
function merge($a,$b){
	$c = [];
	while( count($a) && count($b) ){
		$c[] = $a[0] < $b[0]?array_shift($a):array_shift($b);
	}
	return array_merge($c,$a,$b);
}

function mergeSort(&$arr){
	$len = count($arr);
	
	if( $len <= 1 ){
		return $arr;
	}
	
	$mid = floor($len/2);

	$left_arr = array_slice($arr,0,$mid);
	$right_arr = array_slice($arr,$mid);

	$left_arr = mergeSort($left_arr);
	$right_arr = mergeSort($right_arr);

	$arr = merge($left_arr,$right_arr);
	return $arr;
}

$num = [54,2135,31520,2015,3451,21,42,1,4,120,87];

mergeSort($num);

var_dump($num);


?>