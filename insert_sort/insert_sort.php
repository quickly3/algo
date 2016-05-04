<?php 
function insertSort(&$arr){

	for($i = 1 ; $i < count($arr);$i++){
		$tmp = $arr[$i];
		$key = $i - 1;

		while ($key >= 0 && $tmp < $arr[$key] ) {
			$arr[$key+1] = $arr[$key];
			$key--;
		}	
		if(($key + 1) != $i){
			$arr[$key+1] = $tmp;
		}
	}
	return $arr;
}

$num = [54,2135,31520,2015,3451,21,42,1,4,120,87];

insertSort($num);

var_dump($num);


?>