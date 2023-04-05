// 11)	Print the odd count from the given array of input.
// const Input = [1, 2, 3, 4, 5]
// output = [1, 3, 5]

// function findOdd(arr) {
// 	//Method-1
// 	// const result = arr.filter((item) => {
// 	// 	return item % 2 !== 0
// 	// })
// 	// return result

// 	//Method-2
// 	let newArr = []
// 	for (let i = 0; i < arr.length; i++) {
// 		if (arr[i] % 2 !== 0) {
// 			newArr.push(arr[i])
// 		}
// 	}
// 	return newArr
// }
// console.log(findOdd([1, 2, 3, 4, 5]))

////////////////////////////////////////////////////
// 12)	From the give string make the first letter capital.
// let Input = "my name is rocky"
// Output = "My Name Is Rocky"

// function capFirstLetter(str) {
// 	let res = str.split(" ")
// 	console.log(res)
// 	let result = res.map((item) => {
// 		return item.slice(0, 1).toUpperCase() + item.slice(1)
// 	})
// 	return result.join(" ")
// }

// console.log(capFirstLetter("my name is rocky"))

////////////////////////////////////////////////////////////
// 13)	Sort the following array alphabetically. (without using sort Meathod )
// let input = ["b", "c", "d", "a"]
// Output = ["a", "b", "c", "d"]

// function sortArr(arr) {
// 	const output = arr.sort((a, b) => a.localeCompare(b))
// 	return output
// }
// console.log(sortArr(["b", "c", "d", "a"]))

/////////////////////////////////////////////////////////////
// 14)	Find the index number of negative value.
// const input = [5, 7, -6, -8, 1, 5, 4, -7, -9]
// output = [2, 3, 7, 8]

// function findIndexOfNeg(arr) {
// 	let index = []
// 	for (let i = 0; i < arr.length; i++) {
// 		if (arr[i] < 0) {
// 			index.push(arr.indexOf(arr[i]))
// 		}
// 	}
// 	return index
// }
// console.log(findIndexOfNeg([5, 7, -6, -8, 1, 5, 4, -7, -9]))

///////////////////////////////////////////////////////////
// 15)	Create a function that removes all whitespace from a string:
// const str = " hello world "
// Output: "helloworld"

// function removeSpaces(str) {
// 	let result = ""
// 	let s = str.split(" ")
// 	for (let i = 0; i < s.length; i++) {
// 		result += s[i]
// 	}
// 	console.log(result)
// }
// removeSpaces(" hello world ")

/////////////////////////////////////////////////////////////
// 16)	find the vowels (a, e ,i ,o ,u) from the given input string.
// const input = "jairadhekrishna"
// output = ["a", "i", "a", "e", "i", "a"] // 6

// function findVowels(str) {
// 	const res = str.split("").filter((char) => {
// 		return (
// 			char.includes("a") +
// 			char.includes("e") +
// 			char.includes("i") +
// 			char.includes("o") +
// 			char.includes("u")
// 		)
// 	})
// 	return res
// }
// console.log(findVowels("jairadhekrishna"))

//////////////////////////////////////////////////////
// 17)	Print each no after same second of that same no.
// const input = [1, 2, 3, 4, 5]
// // output : 1 will print after 1sec, 2 after 2 sec, 3 after 3sec ,4 after 4 sec like 5 also.
// const timer = (arr) => {
// 	for (let i = 1; i <= arr.length; i++) {
// 		setTimeout(() => {
// 			console.log(`${i} will print after ${i} Sec`)
// 		}, i * 1000)
// 	}
// }
// console.log(timer([1, 2, 3, 4, 5]))

////////////////////////////////////////////////////////////

// 18)	Merge two arrays with duplicate values.
// let input = [1, 2, 3]
// let input1 = [3, 4, 5]
// Output = [1, 2, 3, 4, 5]

// const uniqueArr = (arr1, arr2) => {
// 	const combine = arr1.concat(arr2)
// 	console.log(combine)

// 	//Method-1
// 	// const res = new Set(combine)
// 	// return [...res]

// 	//Method-2
// 	const result = combine.filter((item, i, arr) => arr.indexOf(item) === i)
// 	return result
// }
// console.log(uniqueArr([1, 2, 3], [3, 4, 5]))

///////////////////////////////////////////////////////
// 19)	Write a code for Call,  apply, bind Methods.
// const obj = { name: "Radha" }
// function display(greet) {
// 	console.log(greet + this.name)
// }
// display.call(obj, "Good morning ")
// display.apply(obj, ["Good afternoon "])
// display.bind(obj, "Good night ")()

////////////////////////////////////////////////////////////
// 20)	Create a function that removes duplicate characters from a string:
// const str = "hello world"
// Output: "helo wrd"

// function removeDuplicate(str) {
// 	//Method-1
// 	let output = str.split("").filter((item, i, arr) => arr.indexOf(item) === i)
// 	return output.join("")

// Method-2
// let output = str.split("");
// output = new Set(output);
// return [...output].join("")
// }
// console.log(removeDuplicate("hello world"))
