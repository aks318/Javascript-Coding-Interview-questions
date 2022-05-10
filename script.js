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

// let n=5
// let string=""

// for(let i=0 ; i<n ; i++){
//     for(let j=0 ; j<n-i-1 ; j++){
//         string +=" "
//     }
//     for(let k=0 ; k<2*i +1 ; k++){
//         if(i===0 || i===n-1) string += "*"
//         else if(k===0 || k===2*i) string +="*"
//         else string+=" "
//     }
//     string+="\n"
// }
// console.log(string)

// ===================================================================

//       *
//      ***
//     *****
//    *******
//   *********
//    *******
//     *****
//      ***
//       *

// let n=5
// let string=""

// for(let i=0 ; i<n ; i++){
//     for (let j=0 ; j<n-i-1 ; j++){
//         string+=" "
//     }
//     for (let k=0 ; k<2*i+1 ; k++){
//         string+="*"
//     }
//     string+="\n"
// }

// for(let i=0 ; i<n-1 ; i++){
//     string+=" "
//     for(let j=0 ; j<i ; j++){
//         string+=" "
//     }
//     for(let k=0 ; k<(n-i)*2 - 3; k++){
//         string+="*"
//     }
//     string+='\n'
// }
// console.log(string)

// ============================================================

//      *
//     * *
//    *   *
//   *     *
//  *       *
//   *     *
//    *   *
//     * *
//      *

// let n=5
// let string=""

// for(let i=0 ; i<n ; i++){
//     for(let j=0 ; j<n-i-1 ; j++){
//         string+=" "
//     }
//     for(let k=0 ; k<2*i+1 ; k++){
//         if(k===0 || k===2*i) string+="*"
//         else string+=" "
//     }
//     string+="\n"
// }

// for(let i=0 ; i<n-1 ; i++){
//     string+=" "
//     for(let j=0 ; j<i ; j++){
//         string+=" "
//     }
//     for(let k=0 ; k<(n-i)*2 -3 ;k++){
//         if(k===0 || k===(n-i)*2-4) string+="*"
//         else string+=" "
//     }
//     string +="\n"
// }
// console.log(string)

// ====================================================================

//  *********
//   *******
//    *****
//     ***
//      *
//     ***
//    *****
//   *******
//  *********

// let n=5
// let string=""

// for(let i=0 ; i<n ; i++){
//     for(let j=0 ; j<i ; j++){
//         string+=" "
//     }
//     for(let k=0 ; k<(n-i)*2-1 ; k++){
//         string+="*"
//     }
//     string+="\n"
// }

// for(let i=0 ; i<n-1; i++){
//     for(let j=0 ; j<(n-i-2) ; j++){
//         string+=" "
//     }
//     for(let k=0 ; k<(2*i)+3 ; k++){
//         string+="*"
//     }
//     string+="\n"
// }
// console.log(string)

// ==================================================================

//  *
//  **
//  ***
//  ****
//  *****
//  ****
//  ***
//  **
//  *

// let n=5
// let string=""

// for(let i=0 ; i<n ;i++){
//     for(let j=0 ; j<=i ; j++){
//         string+="*"
//     }
//     string+="\n"
// }
// for(let i=0 ; i<n-1 ; i++){
//     for(let j=0 ; j<n-i-1 ; j++){
//         string+="*"
//     }
//     string+="\n"
// }
// console.log(string)

// =================================================================

//     *
//    **
//   ***
//  ****
// *****
//  ****
//   ***
//    **
//     *

// let n=5
// let string=""

// for(let i=0 ; i<n ; i++){
//     for(let j=0 ; j<n-i-1 ; j++){
//         string+=" "
//     }
//     for(let k=0 ; k<=i ; k++){
//         string+="*"
//     }
//     string+="\n"
// }
// for(let i=0 ; i<n-1 ; i++){
//     string+=" "
//     for(let j=0 ; j<i ; j++){
//         string+= " "
//     }
//     for(let k=0 ; k<n-i-1 ; k++){
//         string+="*"
//     }
//     string+="\n"
// }
// console.log(string)

// ===========================Double the value of each element in array using Map function=====================

// const doubleValue = (arr) => {
//     return arr.map(val => val*2)
// }

// console.log(doubleValue([2,5,6,8,9]))

// =====================Filter out the value equals to 2 from array=========================

// const filterValue = (arr) => {
//     return arr.filter(val => val !==2)
// }
// console.log(filterValue([2,6,2,7,9,5,2,5,2]))

// ===========================Sum of array using reduce function ==================================

// const arrSum = (arr) => {
//     return arr.reduce((acc , curr) => acc = acc + curr , 0)
// }
// console.log(arrSum([2,5,6,8,7,9]))


// ==============================Higher Order Function Example=====================================

// const radiuses = [2,4,6,8,9]

// const area = (radius) => 3.14 * radius * radius
// const circum = (radius) => 2 * 3.14 * radius
// const diameter = (radius) => 2 * radius

// const calculate = (radiuses , logic) => {
//     let output = []
//     radiuses.forEach(radius => output.push(logic(radius)));
//     return output
// }

// console.log("Area of circle" , calculate(radiuses , area))
// console.log("Circum of circle" , calculate(radiuses , circum))
// console.log("Diameter of circle" , calculate(radiuses , diameter))


// =====================================call , apply , bind===============================

// let a = {
//     firstName : "Akash",
//     lastName : "Karma",
//     fullName : function(city){
//         return `${this.firstName} ${this.lastName} ${city}`
//     }
// }
// // console.log(a.fullName("mumbai"))

// let b = {
//     firstName : "Kartik",
//     lastName : "Pahadi"
// }
// // console.log(a.fullName.call(b , "mumbai"))

// const fullName = function(city) { 
//     return `${this.firstName} ${this.lastName} ${city}`
// }

// console.log(fullName.call(a, "pune")) // invoked immediently
// console.log(fullName.apply(b, ["pune"])) //invoked immediently
// console.log(fullName.bind(a , "Mumbai")) //return new function

// const bindReturnFunc = fullName.bind(a , "mumbai")
// console.log(bindReturnFunc())
// console.log(fullName.bind(a , "Mumbai")())


// ===============================clousure===================================

// const A = () => {
//     let x = 1
//     let y = 1

//     return () => {
//         console.log(x+y)
//     }
// }

// const CF = A()
// console.log(CF)
// CF()

// const fullName = function(city) { 
//     return `${this.firstName} ${this.lastName} ${city}`
// }

// console.log(fullName.call(a, "pune")) // invoked immediently
// console.log(fullName.apply(b, ["pune"])) //invoked immediently
// console.log(fullName.bind(a , "Mumbai")) //return new function

// const bindReturnFunc = fullName.bind(a , "mumbai")
// console.log(bindReturnFunc())
// console.log(fullName.bind(a , "Mumbai")())


// ============================Ways Of Creating Objects in JS=======================================

// 1.By object literal

// let obj1 = {name : "Aaksh" , city : "Mumbai"}
// console.log(obj1)

// // 2. By creating instance of Object

// let obj2 = new Object()
// obj2.name = "Aakash"
// obj2["city"] = {
//     station : "Dahisar"
// } 
// console.log(obj2)

// // 3.By using an Object constructor

// function emp(id , name , salary){
//     this.id = id
//     this.name = name
//     this.salary = salary
// }
//  let emp1 = new emp(1 , "Aakash" , 60000)
//  let emp2 = new emp(2 , "Sandeep" , 55000)

//  console.log(emp1)
//  console.log(emp2)

// //  4.Function Factory

// const car = (name , cost) => {
//     return {
//         name,
//         cost 
//     }
// }

// let car1 = car("odi" , 6500000)
// let car2 = car("ferrari" , 10500000)

// console.log(car1)
// console.log(car2)


// ===============================Prototype and Prototype-Chaining==========================

// arr = [1,2,3,4,5]

// console.log(arr.__proto__ === Array.prototype)
// console.log(Array.prototype.__proto__ === Object.prototype)


// =============================Hoisting========================


// console.log(v1)  undefined
// var v1=5

// console.log(v2)  undefined
// var v2
// v2 = 5

// v3=5
// console.log(v3)  5
// var v3

// console.log(l1)  ReferenceError: Cannot access 'l1' before initialization
// let l1=5

// console.log(l2)  ReferenceError: Cannot access 'l2' before initialization
// let l2
// l2 = 5

// l3 = 5
// console.log(l3) ReferenceError: Cannot access 'l3' before initialization
// let l3


// ===============================Function Currying============================

// const add = (a) => (
//     (b) => (
//         (c) => (
//             a+b+c
//         )
//     )
// )

// console.log(add(8)(4)(2))

//================================Swapping 2 no without using 3rd variable=================

// let a = 1
// let b = 6

// a = a+b
// b = a-b
// a = a-b
// console.log(a , b)


// =====================================Convert 2d Array into 1d array=====================

// let arr = [["a","b"] , ["c","d"] , ["e", "f"]]

// const resArr = arr.reduce((acc , curr) => acc.concat(curr) , [])
// console.log(resArr)


// =================================move all 0 at last in array====================================

// let arr = [1,5,0,2,0,3,6,0,0,1,0,2]

// arr.sort((a, b) => {
//     console.log(a,b)
//     if(a==0 && b!=0)
//         return 1;
//     else if (a!=0 && b==0)
//         return -1;
//     else 
//         return 0;
// });
// console.log(arr)


// ====================================Debouncing Function============================================

// const clickMe = document.getElementById('click-me')

// const debounce = (fn , delay) => {
//     let timeOut
//     return function(){
//         if(timeOut) clearTimeout(timeOut)

//         timeOut = setTimeout(() => {
//             fn()
//         } , delay)
//     }
// }

// clickMe.addEventListener("click" , debounce((e) => {
//         console.log("Click")
//     } , 2000)
// )

// =======================================Throttle Function=================================================

// const clickMe = document.getElementById('click-me')

// const throttle = (fn , delay) => {
//     let last = 0
//     return(...arg) => {
//         const now = new Date().getTime()
//         if(now - last < delay){
//             return
//         }
//         last = now
//         return fn(...arg)
//     }
// }

// clickMe.addEventListener("click" , throttle((e) => {
//     console.log("Click")
// } , 2000)
// )


// ===============================Capturing Example==============================

// const first = document.querySelector(".first")
// const second = document.querySelector(".second")
// const third = document.querySelector(".third")

// first.addEventListener("click" , () => {
//     console.log("First")} , true)
// second.addEventListener("click" , () => {
//     console.log("Second")} ,true)
// third.addEventListener("click" , () => {
//     console.log("Third")} , true)

// ===============================Bubbling Example==============================

// const first = document.querySelector(".first")
// const second = document.querySelector(".second")
// const third = document.querySelector(".third")

// first.addEventListener("click" , () => {
//     console.log("First")})
// second.addEventListener("click" , () => {
//     console.log("Second")})
// third.addEventListener("click" , () => {
//     console.log("Third")})


// ===================================OOPS Basic===================================

// // Constructor
// function Book (title , book , name){
//     this.title = title,
//     this.book = book,
//     this.name = name
//     this.getWholeName = function(){
//         return `${this.title} ${this.book} ${this.name}`
//     }
// }

// // Prototype
//  Book.prototype.bookYear = "1968"
//  Book.prototype.yourAge = function(){
//      return 23
//  }

// const book1 = new Book("maths by me" , "maths" , "Aakash")
// const book2 = new Book("science by me" , "science" , "Aakash")
// // console.log(book2)
// // console.log(book2.getWholeName())
// // console.log(book2.bookYear)
// // console.log(book2.yourAge())

// //Inheritance

// function Magazine (title , book , name , year){
//     Book.call(this , title , book , name)
//     this.year = year
// }
// //Inherit Prototype
// Magazine.prototype = Object.create(Book.prototype)

// //Use magazine constructor
// Magazine.prototype.constructor = Magazine

// const mag1 = new Magazine("Javascript By Me" , "Javascript" , "Aakash" , 1998)

// console.log(mag1)
// console.log(mag1.yourAge())

// ===============Using ES6==============

// class Book {
//     constructor(title , author , year){
//         this.title = title,
//         this.author = author,
//         this.year = year
//     }

//     getSummary (){
//         return `${this.title} ${this.author} ${this.year}`
//     }
// }
// const book1 = new Book("My book" , "Aakash" , 1998)
// console.log(book1)

// class Magazine extends Book{
//     constructor(title , author , year , month){
//         super(title , author , year)   //To call parent constructor
//         this.month = month
//     }
// }
// const mag1 = new Magazine("Javascpt" , "Aakash" , 1999 , 11)
// console.log(mag1)


// ==========================let And var in for loop=============================

for(var i=0 ; i<=5 ; i++){  //Prints 6s 6 after 2 seconds
    setTimeout(() => {
        console.log(i)
    } , 2000)
}

for(let i=0 ; i<=5 ; i++){  //Prints 0 1 2 3 4 5 6 after 2 seconds
    setTimeout(() => {
        console.log(i)
    } , 2000)
}