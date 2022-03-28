// Reverse a string

// let str = "Aakash"
// let reverse = ""

// for(let char of str){
//     reverse = char + reverse
// }

// console.log(reverse)

//====================================Palindrome============================================

const Palindrome = (str) => {
    let str2 = str.split('').reverse().join('')
    console.log(str === str2)
}

Palindrome("Akash")
Palindrome("AakaA")




