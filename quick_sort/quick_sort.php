<?php 

function quickSort(&$arr){
	
	if(count($arr) > 1){
		$k = $arr[0];
		$x = [];
		$y = [];
		$_size = count($arr);

		for($i = 1;$i<$_size;$i++){
			if($arr[$i] <= $k){
				$x[] = $arr[$i];
			}else{
				$y[] = $arr[$i];
			}
		}

		$x = quickSort($x);
		$y = quickSort($y);
		return array_merge($x,array($k),$y);

	}
	
	return $arr;

}

$num = [54,2135,31520,2015,3451,21,42,1,4,120,87];

quickSort($num);

var_dump($num);



?>