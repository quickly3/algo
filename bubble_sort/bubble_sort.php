<?php 

	function bubbleSort(&$arr){
		$_size = count($arr);
		for($i = 0;$i < $_size;$i++){	
			for ($j = $i + 1; $j < $_size; $j++) { 
				if($arr[$j] < $arr[$i]){
					$tmp = $arr[$j];
					$arr[$j] = $arr[$i];
					$arr[$i] = $tmp;
				}
			}
		}
		return $arr;
	}

    $arr = array(1, 5, 3, 7, 9 ,10, 2, 8);
    bubbleSort($arr);
    var_dump($arr);

 ?>