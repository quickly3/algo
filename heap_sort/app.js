// 堆排序
function heapSort(_arr) {
	//初始化大顶堆
	_arr = initHeap(_arr);

	// 开始交换首尾节点,并每次减少一个末尾节点再调整堆,直到剩下一个元素
	for (_end = _arr.length - 1; _end > 0; _end--) {
		_temp = _arr[0];		
		_arr[0] = _arr[_end];
		_arr[_end] = _temp;
		_arr = adjustNodes(_arr, 0, _end - 1);
	}
}


// 初始化最大堆,从最后一个非叶子节点开始,最后一个非叶子节点编号为 数组长度/2 向下取整
// 最后一个非叶子节点 Math.floor($len / 2)
function initHeap(_arr) {
	_len = _arr.length;

	for (_start = Math.floor(_len / 2) - 1; _start >= 0; _start--) {
		_arr = adjustNodes(_arr, _start, _len - 1);

	}
	return _arr;
}

// 调整节点
// @param $arr    待调整数组
// @param $start    调整的父节点坐标
// @param $end    待调整数组结束节点坐标

function adjustNodes(_arr, _start, _end) {
	maxInx = _start;
	_len = _end + 1;                     	// 待调整部分长度
	leftChildInx = (_start + 1) * 2 - 1;	// 左孩子坐标
	rightChildInx = leftChildInx + 1;		// 右孩子坐标

	// 如果待调整部分有左孩子
	if (leftChildInx + 1 <= _len) {
		// 获取最小节点坐标
		if (_arr[maxInx] < _arr[leftChildInx]) {
			maxInx = leftChildInx;
		}

		// 如果待调整部分有右子节点
		if (rightChildInx + 1 <= _len) {
			if (_arr[maxInx] < _arr[rightChildInx]) {
				maxInx = rightChildInx;
			}
		}
	}
	// 交换父节点和最大节点
	if (_start != maxInx) {
		_temp = _arr[_start];
		_arr[_start] = _arr[maxInx];
		_arr[maxInx] = _temp;

		// 如果交换后的子节点还有子节点,继续调整
		if ((maxInx + 1) * 2 < _len) {
			_arr = adjustNodes(_arr, maxInx, _end)
		}
	}
	return _arr;
}


_arr = [1, 5, 3, 7, 9, 10, 2, 8]

heapSort(_arr);

console.info(_arr);