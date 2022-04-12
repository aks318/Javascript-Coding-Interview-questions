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

// const isBinary = (num) => {
//     let binary= false
//     for(let i of String(num)){
//         if(i==="0" || i=== "1"){
//             binary = true
//         }
//         else{
//             return false
//         }
//     }
//     return binary
// } 
// console.log(isBinary(10110101510))


// ================================Find the largest and smallest number in unsorted array================

// const findMinMax = (arr) => {
//     let min = arr[0]
//     let max = arr[0]
//     for (let i of arr){
//         if(i>max){
//             max = i
//         }
//         else if(i<min){
//             min = i
//         }
//     }
//     console.log(min , max)
// }
// findMinMax([5,6,7,3,9,-1,10,12,4,-5])

// ==========================Find 1st 2 max from unsorted array============================

// const findFirstTwoMax = (arr) => {
//     let max1 = arr[0]
//     let max2 = arr[0]

//     for (let i of arr){
//         if(i>max1){
//             max2 = max1
//             max1 = i
//         }
//         else if(i>max2){
//             max2 = i
//         }
//     }
//     console.log(max1 , max2)
// }

// findFirstTwoMax([5,6,7,3,9,-1,10,12,4,-5,18,19])

// =========================Find 2nd max and 2nd min from unsorted array================================

// const findSecondMaxMin = (arr) =>{
//     let max1 = arr[0]
//     let max2 = arr[0]
//     let min1 = arr[0]
//     let min2 = arr[0]

//     for (let i of arr){
//         if(i>max1){
//             max2 = max1
//             max1 = i
//         }
//         else if(i>max2){
//             max2 = i
//         }

//         if(i<min1){
//             min2 = min1
//             min1 = i
//         }
//         else if(i<min2){
//             min2 = i
//         }
//     }
//     console.log(min2 , max2)
// }
// findSecondMaxMin([5,6,7,-3,9,-1,10,12,4,-5,28,19])

// ===============================Find no. of pair from array whose sum equals to given no.=================

// const findTotalPair = (arr , n) => {
//     total = 0
//     for (let i of arr){
//         if(arr.includes(i+n)){ //in operator checks if index is their or not
            
//             total++
//         }
//     }
//     return total
// }

// console.log(findTotalPair([2,3,6,4,9,5,19,15,12] , 4))

// ==========================Move all negative elements to start======================================

// const moveNegToStart = (arr) => {
//     brr = []
//     for (let i=0 ; i<arr.length ; i++){
//         if(arr[i]>0){
//             brr.push(arr[i])
//         }
//         else brr.unshift(arr[i])
//     }
//     return brr
// }

// console.log(moveNegToStart([2,4,5,-4,-5,-6,3,6,-4,2]))

// ======================Bubble sort algorithm =================================

// const bubbleSort = (arr) => {
//     for (let i=0 ; i<arr.length ; i++){
//         for(let j=0 ; j<arr.length - i - 1; j++){
//             if(arr[j] > arr[j+1]){
//                 var temp = arr[j]
//                 arr[j] = arr[j+1]
//                 arr[j+1] = temp
//             }
//         }
//     }
//     console.log(arr)
// }

// bubbleSort([3,4,1,5,7,2,3,6,8,9,1,10,2,29,1])

// ==========================Find kth largest and kth smallest from array=================

// const findKthLargestAndSmallest = (arr , k) => {
//     arr.sort((a,b) => a-b)
//     console.log(arr)
//     return([arr[k-1] , arr[arr.length - k]])
// }

// console.log(findKthLargestAndSmallest([1,2,3,4,5,6,7,8,9,10] , 3))

// ====================program which accept a number as input and insert dashes (-) between each two even numbers===========

// const insertDash = (num) => {
//     let arr = []
//     for (let i=0 ; i<num.length-1 ; i++){
//         if(num[i] % 2 ===0 && num[i+1] % 2 === 0){
//             arr.push(num[i])
//             arr.push("-")
//         }
//         else{
//             arr.push(num[i])
//         }
//     }
//     arr.push(num[num.length -1])
//     return(arr.join(''))
// }

// console.log(insertDash("02456"))

// ======================Find the most frequent item of an array===================

// const mostFreq = (arr) => {
//     let mf = 1
//     let m = 0
//     let item

//     for(let i=0 ; i<arr.length ; i++){
//         for(let j=i ; j<arr.length ; j++){
//             if(arr[i] === arr[j]){
//                 m++;
//             }
//             if (mf < m){
//                 mf = m
//                 item = arr[i]
//             }
//         }
//         m = 0
//     }

//     return [item , mf]
// }

// console.log(mostFreq([3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]))

// ==============swap the case of each character from string=========================

// const swapChar = (str) => {
//     arr = str.split("")
//     for (let i=0 ; i<arr.length ; i++){
//         if(arr[i] === arr[i].toLowerCase()) {
//             arr[i] = arr[i].toUpperCase()
//         }
//         else if(arr[i] === arr[i].toUpperCase()) {
//             arr[i] = arr[i].toLowerCase()
//         }
//     }
//     return arr.join('')
// }

// console.log(swapChar("The World is waiting For me to become rich."))

//===================================remove duplicated from list===========================
// ====================Method 1====================
// let arr = [2,3,5,2,8,9,7,5,2,9,7]
// let uniqueList = [...new Set(arr)]
// console.log(uniqueList)

// ======================================Method 2=============
// let obj={}
// let uniqueList=[]
// for (let i=0 ; i<arr.length ; i++){
//     obj[arr[i]] = 0
// }

// for(let i in obj) uniqueList.push(i)
// console.log(uniqueList)


// ========================JavaScript function to fill an array with values (numeric, string with one character)============

// const fillArray = (c1 , c2 , n) => {
//     let c1Code = c1.charCodeAt(0)
//     let c2Code = c2.charCodeAt(0)
//     let i=c1Code + n

//     let arr = [c1]
//     while(i<c2Code){
//         arr.push(String.fromCharCode(i))
//         i+=n
//     }

//     return arr
// }

// console.log(fillArray('a' ,'z' , 3))
  

// =========================Shift array to right by given number======================================

// const shiftRight = (arr , n) => {
//     n = n % arr.length
//     let arr2 = arr.splice(arr.length-n , arr.length-1)
//     return arr2.concat(arr)
// }

// console.log(shiftRight([1,2,3,4,5] , 6))

// =========================Shift array to right by given number======================================


// const shiftLeft = (arr , n) => {
//     n = n % arr.length
//     let arr2 = arr.splice(0 , n)
//     return arr.concat(arr2)
// }

// console.log(shiftLeft([1,2,3,4,5] , 6))

// =====================Replace emoji with spaces========================

// const emojify = (msg , emj) => {
//     if(typeof msg === 'string'){
//         let arr = msg.split(" ")
//         if(arr.length <= 1){
//             console.log('invalid string')
//         }
//         else{
//             console.log(arr.join(emj))
//         }
//     }
//     else if(typeof msg === 'object'){
//         let newmsg = (String(msg))
//         let arr = newmsg.split(" ").join(emj)
//         console.log(arr)
//     }
// }

// emojify(" some message here" , "/:")
// emojify("here" , "/:")
// emojify({hello : 'world'} , '/:')

// ==============================program to compute the union of two arrays=============

// const unionArray = (arr1 , arr2) =>{
//     console.log([...new Set(arr1.concat(arr2))])
// }

// unionArray([1,2,3] , [2,3,4,5])


// ====================================Patter Program=====================================

//   *****
//   *****
//   *****
//   *****
//   *****

// let n = 5
// let string = ""

// for(let i=0 ; i<n ; i++){
//     for(let j=0 ; j<n ; j++){
//         string += "*"
//     }
//     string += "\n"
// }
// console.log(string)

// =========================================================================

//  *****
//  *   *
//  *   *
//  *   *
//  *****

// let n = 5
// let string = ""

// for(let i=0; i<n ; i++){
//     for(let j=0 ; j<n ; j++){
//         if(i===0 || i===n-1) string += "*"
//         else if(j===0 || j===n-1) string += "*"
//         else string += " "
//     }
//     string += '\n'
// }
// console.log(string)

// =========================================================

//      *
//     **
//    ***
//   ****
//  *****

// let n=5
// let string=""

// for(let i=1 ; i<=n ; i++){
//     for(let j=1 ; j<=n-i ; j++) {
//         string+=" "
//     }
//     for(let k=1 ; k<=i ; k++){
//         string+="*"
//     }
//     string+="\n"
// }
// console.log(string)


// =============================================================

//  *
//  **
//  ***
//  ****
//  *****

// let n=5
// let string=""

// for(let i=0 ; i<n ; i++){
//     for(let j=0 ; j<=i ; j++){
//         string+="*"
//     }
//     string+="\n"
// }
// console.log(string)


// ===================================================================

//  *****
//  ****
//  ***
//  **
//  *

// let n=5
// let string=""

// for(let i=0 ; i<n ; i++){
//     for(let j=n ; j>i ; j--){
//         string+="*"
//     }
//     string+="\n"
// }
// console.log(string)

// ========================================================================

//  *
//  **
//  * *
//  *  *
//  *   *
//  ******

// let n=5
// let string=""

// for(let i=0 ; i<n ; i++){
//     for(let j=0 ; j<=i ; j++){
//         if(i===0 || i===n-1) string+="*"
//         else if(j===0 || j===i) string+="*"
//         else string+=" "
//     }
//     string+="\n"
// }
// console.log(string)

// =========================================================================

//      *
//     ***
//    *****
//   *******
//  *********

// let n=5
// let string=""

// for(let i=0 ; i<n ; i++){
//     for(let j=0 ; j<n-i-1; j++){
//         string+=" "
//     }
//     for(k=0 ; k<2*i+1 ; k++){
//         string+="*"
//     }
//     string+="\n"
// }
// console.log(string)


// ===================================================================

//  *********
//   *******
//    *****
//     ***
//      *

// let n=5
// let string=""

// for(let i=0 ; i<n ; i++){
//     for(let j=0 ; j<i ; j++){
//         string+=" "
//     }
//     for(k=0 ; k<(n-i)*2 -1 ; k++){
//         string+="*"
//     }
//     string+="\n"
// }
// console.log(string)

// ===================================================================

//      *
//     * *
//    *   *
//   *     *
//  *********

let n=5
let string=""

for(let i=0 ; i<n ; i++){
    for(let j=0 ; j<n-i-1 ; j++){
        string +=" "
    }
    for(let k=0 ; k<2*i +1 ; k++){
        if(i===0 || i===n-1) string += "*"
        else if(k===0 || k===2*i) string +="*"
        else string+=" "
    }
    string+="\n"
}
console.log(string)