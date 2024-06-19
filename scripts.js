// Fibonacci iterative

function fibonacci(num) {
	// x is representing the first term,
	// y is representing the second term, and
	// z is representing the sum of x and y.
	let answer = [];
	let x = 0;
	let y = 1;
	let z;

	// Since, the first two elements are fixed.
	// Storing the first two terms.
	answer.push(x);
	answer.push(y);

	let i = 2;
	while (i < num) {
		z = x + y;
		x = y;
		y = z;

		// Storing the current element
		answer.push(z);
		i = i + 1;
	}
	return answer;
}

let num = 8;
answer = fibonacci(num);

console.log('The Fibonacci series till the 8th term is: ', answer);

// Fibonacci recursive

function fibsRec(n) {
	if (n <= 0) {
		return [];
	} else if (n === 1) {
		return [0];
	} else if (n === 2) {
		return [0, 1];
	} else {
		const arr = fibsRec(n - 1);
		const nextFib = arr[arr.length - 1] + arr[arr.length - 2];
		arr.push(nextFib);
		return arr;
	}
}

n = 8;
console.log(
	`The Fibonacci series till the ${n}th term recursively is: `,
	fibsRec(n)
);

// Merge sort

function mergeSort(input) {
	const { length: arraySize } = input;
	if (arraySize < 2) return input;
	const mid = Math.floor(arraySize / 2);
	const sortedLeftArray = mergeSort(input.slice(0, mid));
	const sortedRightArray = mergeSort(input.slice(mid, arraySize));
	return merge(sortedLeftArray, sortedRightArray);
}

function merge(left, right) {
	let result = [];
	while (left.length && right.length) {
		if (left[0] < right[0]) {
			result.push(left.shift());
		} else {
			result.push(right.shift());
		}
	}
	/* Either left/right array will be empty or both */
	return [...result, ...left, ...right];
}

let example1 = [3, 2, 1, 13, 8, 5, 0, 1];
let example2 = [105, 79, 100, 110];
console.log(`The numbers ${example1} sorted using recursive merge sort are : ${mergeSort(example1)}.`);
console.log(`The numbers ${example2} sorted using recursive merge sort are:  ${mergeSort(example2)}.`);
