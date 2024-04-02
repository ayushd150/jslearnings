//global execution context(this) - phase 1
//functional execution context
//eval execution context 
//code - memory creation phsae- 2 and execution phase - 3
// if (2 === NaN){
//     console.log("hi")
// }
const myOB = {
    js: "javascript",
    rb: "ruby"
}
for (const key in myOB) {
    console.log(`${myOB.key}`)//myOB.key will give undefined s output
}