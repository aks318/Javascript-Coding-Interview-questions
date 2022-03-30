// Reverse a string

// let str = "Aakash"
// let reverse = ""

// for(let char of str){
//     reverse = char + reverse
// }

// console.log(reverse)

//====================================Palindrome============================================

// const Palindrome = (str) => {
//     let str2 = str.split('').reverse().join('')
//     console.log(str === str2)
// }

// Palindrome("Akash")
// Palindrome("AakaA")


// ================================Maximum Character from String=======================================

// const maxChar = (str) =>{
//     let obj = {}
//     for (let i of str){
//         (!obj[i]) ? obj[i] = 1 : obj[i]++
//     }
//     let max = 0
//     let maxChar = ""

//     for(let i in obj){
//         if(obj[i] >= max){
//             max = obj[i]
//             maxChar = i
//         }
//     }

//     console.log(maxChar , max)
// }

// maxChar("Aakaahsksjaaljsa")

// const maxChar = (str) =>{
//     let obj = {}
//     let max = 1
//     let maxChar = str[0]
//     for (let i of str){
//         if(obj[i]){
//             if(obj[i] >= max){
//                 max++
//             }
//             maxChar = i
//             obj[i]++
//         }
//         else{
//             obj[i] =1
//         }
//     }

//     console.log(maxChar , max)
// }

// maxChar("AakaahsksjaaljsaAaAAAAAAAAAAAAAA")


// ================================================Reverse a Integer================================================

// const reverseInt = (n) =>{
//     return parseInt(n.toString().split('').reverse().join(''))
// }

// console.log(reverseInt(1564))


// ===========================================Fizzbuzz=========================================================

// const fizzBuzz = (n) => {
//     for(let i=1 ; i<=n; i++){
//         if(i%3 === 0 && i%5 !==0){
//             console.log("fizz")
//         }
//         else if(i%5 ===0 && i%3 !==0){
//             console.log('buzz')
//         }
//         else if(i%3 === 0 && i%5 ===0){
//             console.log('fizzbuzz')
//         }
//         else{
//             console.log(i)
//         }
//     }
// }
// fizzBuzz(15)

// ==================================Given a string, reverse each word in the sentence======================================

// var str = "Welcome to this Javascript Guide!"

// var str2 = str.split("").reverse().join("")

// console.log(str2.split(" ").reverse().join(" "))

// =========================================Given two strings, return true if they are anagrams of one another=============

// const isAnagram = ( str1 , str2) =>{
//     var a = str1.toLowerCase().split("").sort().join("")
//     var b = str2.toLowerCase().split("").sort().join("")

//     console.log(a===b)
// }

// isAnagram("Mary" , "army")


//  =============================Given no if binary or not============================

const isBinary = (num) => {
    let binary= false
    for(let i of String(num)){
        if(i==="0" || i=== "1"){
            binary = true
        }
        else{
            return false
        }
    }
    return binary
} 

console.log(isBinary(10110101510))



