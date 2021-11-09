// Iteration 1: Names and Input
// 
var hacker1 = "David"
console.log(`The driver's name is ${hacker1}`)

var hacker2 = "Raissa"
console.log(`The navegator's name is ${hacker2}`)


// Iteration 2: Conditionals

var biggerName = 0;

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`)
} else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}


// Iteration 3: Loops

function iRename (str) {
    str = str.toUpperCase();
    let newString = ''
    for (let i = 0; i < hacker1.length; i++) {
        const charCode = str.charCodeAt (i)
        if(charCode >= 65 && charCode <=90) {
        newStri +=str.charAt(i)
    }
}
console.log ({str, newString})} ; 