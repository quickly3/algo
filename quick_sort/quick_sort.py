def quickSort(arr):
	if(len(arr)>1):
		k = arr[0]
		x = []
		y = []
		_size = len(arr)

		for i in range(1,_size):

			if arr[i] <= k:
				x.append(arr[i])
			else :
				y.append(arr[i])

		x = quickSort(x)
		y = quickSort(y)

		return x+[k]+y
	else :
		return arr


num = [54,2135,31520,2015,3451,21,42,1,4,120,87];

num = quickSort(num)

print(num)


