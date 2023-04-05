// 31)	Write a function that would allow you to do this.
// Input : var addSix = createBase(6)  addSix(10);
// Output: 16

// function createBase(a) {
// 	return function (b) {
// 		return a + b
// 	}
// }
// let addSix = createBase(6)
// console.log(addSix(10))

//////////////////////////////////////////////////////////////
// 32)	Solve the array.
// Input = [1, 2, 3, 4]
// Output = ["4", "3", "2", "1"]

// function resolveArr(arr) {
// 	return arr.reverse().toString().split(",")
// }
// console.log(resolveArr([1, 2, 3, 4]))

///////////////////////////////////////////////////////
// 33)	Write code for Clouse.
// function makeFunc() {
// 	const name = "Madhav"
// 	function displayName() {
// 		console.log(name)
// 	}
// 	return displayName
// }
// const myFunc = makeFunc()
// myFunc()

//Example-2
// const safeBooking = () => {
// 	let passangerCount = 0
// 	return function () {
// 		passangerCount++
// 		return `Passanger Count = ${passangerCount}`
// 	}
// }
// const book = safeBooking()
// console.log(book())
// console.log(book())
// console.log(book())
// console.log(book())

/////////////////////////////////////////////////////
// 34)	create a star pattern using JavaScript take size as 5.
// Output:
// *
// **
// ***
// ****

// let n = 4
// let string = ""
// for (let i = 1; i <= n; i++) {
// 	for (let j = 0; j < i; j++) {
// 		string += "*"
// 	}
// 	string += "\n"
// }
// console.log(string)

///////////////////////////////////////////////////////////////
// 35)	Create a function that replaces all occurrences of a string in an array with another string:
// const Input = ["apple", "banana", "orange", "banana"]
// console.log(Input)
// Output: ["apple", "kiwi", "orange", "kiwi"]

// function replaceFun(arr) {
// 	let res = arr.join(" ")
// 	console.log(res)
// 	let newArr = res.replaceAll("banana", "kiwi").split(" ")
// 	return newArr
// }
// console.log(replaceFun(["apple", "banana", "orange", "banana"]))

//////////////////////////////////////////////////////
// 36)	Create a function that finds the longest word in a string:
// const input = "hello world it is a beautiful day"
// Output: "beautiful"

// function findLongestWord(str) {
// 	var words = str.split(" ")
// 	var longestWord = ""
// 	for (var i = 0; i < words.length; i++) {
// 		if (words[i].length > longestWord.length) {
// 			longestWord = words[i]
// 		}
// 	}
// 	return longestWord
// }
// var longest = findLongestWord(input)
// console.log(longest)

//////////////////////////////////////////////
// 37)	Find The second Smallest value from The Given Array.
// let input = [3, 4, 6, 2, 4, 9]
// output = 3

// function largValue(arr) {
// 	let s = arr.sort()
// 	console.log(s[1])
// }
// largValue([3, 4, 2, 6, 4, 9])

//////////////////////////////////////////////////////////
// 38)	Apply the map filter & reduce Methods for the Give Array.

// let input = [1, 2, 3, 4, 5, 6]

// const mapmethod = input.map((num) => {
// 	return num * 2
// })
// console.log(mapmethod)

// const filtermethod = input.filter((item) => {
// 	return item > 3
// })
// console.log(filtermethod)

// const reducemethod = input.reduce((acc, num) => {
// 	return acc + num
// })
// console.log(reducemethod)

////////////////////////////////////////////////
// 39)	sum of array of number by adding 1 to each.
// const input = [1, 2, 3, 4]
// output: 15

// function findSum(arr) {
// 	const sum = arr.reduce((acc, num, i, arr) => {
// 		return acc + num + 1
// 	}, 1)
// 	return sum
// }
// console.log(findSum([1, 2, 3, 4]))

//////////////////////////////////////////////////////////

// 40)	Addition of numbers in string.
// const input = "abcd2345"
// output: 14

// let sum = 0
// let result = input.split("").forEach((ele) => {
// 	if (Number(ele)) {
// 		sum = sum + Number(ele)
// 	}
// })
// console.log(sum)
