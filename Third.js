// 21)	Print the *** at end of string.
// const input = "abc"
// // output = “abc***”

// function starPrint(str) {
// 	return str.padEnd(6, "*")
// }
// console.log(starPrint("abc"))

////////////////////////////////////////////////
// 22)	Find The Duplicate from The Given Array.
// const input = [10, 20, 30, 10, 40, 50, 20]
// output = [10, 20]

//Method-1
// const duplicates = input.filter((item, index) => index !== input.indexOf(item))
// console.log(duplicates)

//Method-2
// function findDup(arr) {
// 	let res = arr.filter((item, i, arr) => arr.indexOf(item) !== i)
// 	return res
// }
// console.log(findDup(input))

////////////////////////////////////////////////////////
// 23)	Create a function that removes all vowels from a string:
// const Input = "hello world"
// Output: "hll wrld"
// const noVowels = Input.replace(/[aeiou]/gi, "")
// console.log(noVowels)

/////////////////////////////////////////////////////////////

// 24)	Concat the nested array.(without using inbuilt method)
// let input = [1, 2, [3, 4, [5, 6], 8], 9]
// Output = [1, 2, 3, 4, 5, 6, 8, 9]

// let input = [1, 2, [3, 4, [5, 6], 8], 9]
// let arr2 = []
// function flat(arr) {
// 	arr.forEach((element) => {
// 		if (typeof element == "object") {
// 			flat(element)
// 		} else {
// 			arr2.push(element)
// 		}
// 	})
// }
// flat(input)
// console.log(arr2)

//////////////////////////////////////////////////////
// 25)	Calculate the sum of ages from the object.

// let Input = [
// 	{ id: "1", name: "ketan", age: 23 },
// 	{ id: "2", name: "sam", age: 24 },
// 	{ id: "3", name: "raj", age: 25 },
// ]

// Output = 72

// const ages = Input.map((user) => {
// 	return user.age
// })
// console.log(ages) // to get the number

// const output = ages.reduce((acc, user) => {
// 	return Number(acc) + Number(user)
// })

// console.log(output)

//////////////////////////////////////////////////
// 26)	Create a function that returns the longest common prefix of an array of strings:

// const Input = ["flower", "flow", "flight"]
// Output: "fl"

// const findFirstTwoValue = (arr) => {
// 	for (let i = 0; i < arr[0].length; i++) {
// 		for (let j = 1; j < arr.length; j++) {
// 			if (arr[0][i] !== arr[j][i]) {
// 				return arr[0].slice(0, i)
// 			}
// 		}
// 	}
// 	return arr[0]
// }
// console.log(findFirstTwoValue(Input))

/////////////////////////////////////////////////////
// 27)	Write code For Higher order function.

//Example-1
// const createBase = (num1) => {
// 	return function addSix(num2) {
// 		return num1 + num2
// 	}
// }

// let addSix = createBase(6)
// console.log(addSix(10))
// console.log(addSix(21))

//Example-2
// const highOrderFun = (func) => {
// 	return func()
// }

// console.log(
// 	highOrderFun(() => {
// 		return `Hello Madhav = JavaScript is awesome`
// 	})
// )

// 28)	Given two arrays: a1  and a2. Task is to check whether a2 is a subset of a1 or not.
// Input:
// let a1 = {11, 1, 13, 21, 3, 7},
// let a2= {11, 3, 7, 1}
// Output : Yes

// let a1 = [11, 1, 13, 21, 3, 7]
// let a2 = [11, 3, 7, 1]

// const isSubset = a2.every((val) => a1.includes(val))
// if (isSubset) {
// 	console.log("Yes" + " =" + " a2 is a subset of a1")
// } else {
// 	console.log("No" + " =" + " a2 is not a subset of a1")
// }

////////////////////////////////////////////////////////
// 29)	The task is place all negative element at the end of array without changing the order of positive element and negative element.
// let arr = [1, -1, 3, 2, -7, -5, 11, 6]
// Output: [1, 3, 2, 11, 6, -1, -7, -5]

// let positiveArr = []
// let negativeArr = []

// for (let i = 0; i < arr.length; i++) {
// 	if (arr[i] >= 0) {
// 		positiveArr.push(arr[i])
// 	}
// }
// for (let i = 0; i < arr.length; i++) {
// 	if (arr[i] <= 0) {
// 		negativeArr.push(arr[i])
// 	}
// }
// let joined = positiveArr.concat(negativeArr)
// console.log(joined)

////////////////////////////////////////////////////////
// 30)	Write a "mul" function which will properly when invoked as below syntax .
// Input : console.log(mul(2)(3)(4));
// output : 24

// function mul(a) {
// 	return function (b) {
// 		return function (c) {
// 			return a * b * c
// 		}
// 	}
// }
// console.log(mul(2)(3)(4))
