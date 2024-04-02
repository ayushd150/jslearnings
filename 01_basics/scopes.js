// function addone(val){
//     return val + 1
// }
// addone(5)
// const user = {
//     id: "ayush",
//     price: 1000,
//     welcomeMsg: function(){
//         console.log(`${this.id} welcome to the website`)
//         console.log(this)
//     }
// }
// user.welcomeMsg()
// user.id = "hari"
// user.price = 1900
// user.welcomeMsg()
// console.log(this)
//global object in browser is window object
// 
// const name = function(){
//     let id = "ayush"
//     console.log(this.id)//undefined
// }
// name()
// const name = () =>//arrow function
// {
//     let id = "ayush"
//     console.log(this.id)//undefined
// }
// name()
// const add = (a,b) => (a+b)//implicit return ()- paranthesis , do not use return. if curly  braces then return is used
// console.log(add(1,2))

(function d(){
    //named iife
    console.log(`hi brother`)
})();
//iife - global scope pollution problem- to remove that iife is used
((name) =>{
    console.log(`HI ${name}`)
})('hari');