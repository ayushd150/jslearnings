const arr1 = [0,1,2,3,4]
const arr2 = ['ayush']
const arr3 = new Array(1,2,34)
// console.log(arr1);
// arr2.push(6)
// console.log(arr2)
// arr3.unshift(5) // adds 5 infront of the array
// console.log(arr3)
// arr2.shift() // removes first element of the array
// console.log(arr2)
// console.log(arr2.includes(6))//if element present then returns true else false
// console.log(arr3.indexOf(34))
console.log("A", arr1)
const d = arr1.slice(1,3)
console.log(d)// does not include third element
console.log("B", arr1) // original array printed
const e = arr1.splice(1,3)
console.log(e) //includes third element
console.log("C", arr1)//prints array elements left after removing spliced elements
console.log(Array.isArray("ayush"))//false
console.log(Array.from("ayush"))//array created
console.log(Array.from({name:"ayush"})); //[]
const a = 10
var b = 20
console.log(Array.of(a, b))