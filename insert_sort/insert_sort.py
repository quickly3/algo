def insertSort(arr):
	for i in range(1,len(arr)):
		tmp = arr[i]
		key = i - 1
		while key >= 0 and tmp < arr[key]:
			arr[key+1] = arr[key]
			key-=1
	
		arr[key+1] = tmp 

	return arr

num = [54,2135,31520,2015,3451,21,42,1,4,120,87];

num = insertSort(num)

print(num)
