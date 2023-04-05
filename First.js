// 1)	Remove The Duplicate from The Given Array.
// const input = [10, 20, 30, 10, 40, 50, 20]
// output = [10, 20, 30, 40, 50]

// function removeDup(arr) {
// 	// Method-1
// 	// let newArr = new Set(arr)
// 	// console.log(newArr)
// 	// return [...newArr]

// 	//Method-2
// 	const result = arr.filter((item, i, arr) => arr.indexOf(item) === i)
// 	return result
// }
// console.log(removeDup([10, 20, 30, 10, 40, 50, 20]))

////////////////////////////////////////////////////////////////
// 2)	Find The second largest value from The Given Array.
// let input = [3, 4, 6, 2, 4, 9]
// output = 6

// function secLargest(arr) {
// 	const result = arr.sort((a, b) => b - a)
// 	console.log(result) //firstly sort the array
// 	return result[1]
// }
// console.log(secLargest([3, 4, 6, 2, 4, 9]))

////////////////////////////////////////////////////////////////
// 3)	Find The Prime number up to 20.
// Output = 2, 3, 5, 7, 11, 13, 17, 19

// function findPrime() {
// 	for (let i = 0; i <= 20; i++) {
// 		let num = 0
// 		for (let j = 2; j < i; j++) {
// 			if (i % j === 0) {
// 				num = 1
// 			}
// 		}
// 		if (i > 1 && num === 0) {
// 			console.log(i)
// 		}
// 	}
// }
// findPrime()

//////////////////////////////////////////////////////
// 4)	Find The occurrence of each word from the give below string.
// let input = "abcaacdee"
// output = { a: 3, b: 1, c: 2, d: 1, e: 2 }

// function countchar(str) {
// 	let charMap = {}
// 	let splitArr = str.split("")
// 	console.log(splitArr)
// 	splitArr.forEach((char) => {
// 		if (charMap[char]) {
// 			charMap[char]++
// 		} else {
// 			charMap[char] = 1
// 		}
// 	})
// 	return charMap
// }
// console.log(countchar("abcaacdee"))

/////////////////////////////////////////////////////
// 5)	Group by the people object according to age .
// const people = [
// 	{ name: "John", age: 21 },
// 	{ name: "Max", age: 20 },
// 	{ name: "Alexa", age: 20 },
// ]

// output = {
// 	20: [
// 		{ name: "Max", age: 20 },
// 		{ name: "Alexa", age: 20 },
// 	],
// 	21: [{ name: "John", age: 21 }],
// }

//Method-1
// const result = people.sort((a, b) => {
// 	return a.age - b.age
// })
// console.log({ 20: [result[0], result[1]], 21: [result[2]] })

// //Method-2
// const age20 = people.filter((user) => {
// 	return user.age <= 20
// })

// const age21 = people.filter((user) => {
// 	return user.age > 20
// })

// const findOutput = { 20: age20, 21: age21 }
// console.log(findOutput)

////////////////////////////////////////////////////////
// 6)	Reverse The following string according to output name.
// const input = "Good Morning"
// Output = "dooG gninroM"

// function revStr(str) {
// 	let rev = str.split("").reverse().join("")
// 	console.log(rev)
// 	return rev.split(" ").reverse().join(" ")
// }
// console.log(revStr("Good Morning"))

////////////////////////////////////////////////////////////////
// 7)	Create a function that returns the first non-repeated character in a string:
// const str = "hello world"
// Output: "h"

// function firstNonRepeat(str) {
// 	const result = str.split("").filter((char, i, arr) => arr.indexOf(char) === i)
// 	return result[0]
// }
// console.log(firstNonRepeat("hello world"))

//////////////////////////////////////////////////////

// 8)	Find the non-repeting Charter from the give string .
// let input = "abczabcbb" //(here abcz are unique and their count 4 )
// output = 4

// function nonRepeatCount(str) {
// 	const result = str.split("").filter((char, i, arr) => arr.indexOf(char) === i)
// 	return result.length
// }
// console.log(nonRepeatCount("abczabcbb"))

//////////////////////////////////////////////////////
// 9)	Print the array of string in to object in the form of key and value like as shown in output.

// const input = ["jane:1", "doe:2"]
// output: [
// 	{
// 		name: "jane",
// 		value: "1",
// 	},
// 	{
// 		name: "doe",
// 		value: "2",
// 	},
// ]

// function arrange(arr) {
// 	let result = []
// 	for (let i = 0; i < arr.length; i++) {
// 		let newArr = arr[i].split(":")
// 		console.log(newArr)
// 		result.push({ name: newArr[0], value: newArr[1] })
// 	}
// 	return result
// }
// console.log(arrange(["jane:1", "doe:2"]))

/////////////////////////////////////////////////////////////
// 10)	Write a example for Promise.

// let a = "Madhav"
// new Promise((resolve, reject) => {
// 	if (typeof a === "string") {
// 		resolve(console.log("Hello,Madhav"))
// 	} else {
// 		reject(console.log("error"))
// 	}
// })
