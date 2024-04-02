// function addTwoNos(n,m){
//     console.log(n+m)
// }
// addTwoNos(3,null)//null is 0
// function addTwoNos(n,m){
//     let result = n+m
//     return result//if this line removed then undefined
//     console.log("Ayush")//code after return statement is not executed
// }
// const result = addTwoNos(3,null)
// console.log("Result:", result)// 3 printed
// function logIn(userid = "ayush"){
//     if(userid){
//         console.log("Hi")
//         return
//     }
//     return `${userid} just logged in`
// }
// console.log(logIn("ram")) //hi not executed, undefined just logged in - if no input passed
//when "ayush" passed with return statement after hi, hi then undefined is executed 
// function logIn(userid = "ash"){
//     if(!userid){
//         console.log("Please enter a valid name")
//         return
//     }
//     return `${userid} just logged in`
// }
// console.log(logIn("rohit"))
// function calc(...num1)//three dots mandatory - rest operator
// {
//     return num1
// }
// console.log(calc(2,4,6,5))
const arr = [1,3,5,7,9]
function val(getarr){
    return getarr[2]
}
console.log(val(arr))