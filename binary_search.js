// Original Solution
function binarySearch(arr, value) {
	// add whatever parameters you deem necessary - good luck!
	let first = 0;
	let last = arr.length - 1;
	let middle = Math.floor((first + last) / 2);

	while (arr[middle] !== value && first <= last) {
		if (arr[middle] > value) {
			last = middle - 1;
		}
		if (arr[middle] < value) {
			first = middle + 1;
		}
		middle = Math.floor((first + last) / 2);
	}
	if (arr[middle] === value) {
		return middle;
	} else return -1;
}

// Refactored Version
function binarySearch(arr, elem) {
	var start = 0;
	var end = arr.length - 1;
	var middle = Math.floor((start + end) / 2);
	while (arr[middle] !== elem && start <= end) {
		if (elem < arr[middle]) end = middle - 1;
		else start = middle + 1;
		middle = Math.floor((start + end) / 2);
	}
	return arr[middle] === elem ? middle : -1;
}

binarySearch([2, 5, 6, 9, 13, 15, 28, 30], 103);
