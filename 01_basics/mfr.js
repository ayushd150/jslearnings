// const coding = ["ayush", "amit", "aman"]
// const val = coding.forEach((item)=>{
//     return item
// })
// console.log(val) //undefined
// const num = [1,2,3,4,5,6]
// const newnum = num.filter((num)=>{
//     return num>3//return keyword necessary for paranthesis open
// })
// console.log(newnum)
// const newn = num.map((num) =>{ 
//     return num+10}
//     )
// console.log(newn)
const crs = [{
    nam: "py",
    pr: 1230
},{
    nam: "js cor",
    pr: 2340
}]
const pay = crs.reduce((acc,nam)=>acc+nam.pr,0)
console.log(pay)