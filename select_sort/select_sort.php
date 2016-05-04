<?php 

	function bubbleSort(&$arr){
		$_size = count($arr);
		for($i = 0;$i < $_size;$i++){	
			for ($j = 0; $j < $_size - $i - 1; $j++) { 
				if($arr[$j] > $arr[$j+1]){
					$tmp = $arr[$j];
					$arr[$j] = $arr[$j+1];
					$arr[$j+1] = $tmp;
				}
			}
		}

		return $arr;
	}

    $arr = array(1, 5, 3, 7, 9 ,10, 2, 8);
    bubbleSort($arr);
    var_dump($arr);

 ?>