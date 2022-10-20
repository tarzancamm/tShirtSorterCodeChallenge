// Write a function that will take in a string containing only s, m, and l characters. Ex: slsmmsllsmsmlmsls

// This string essentially represents a bunch of t-shirts in an unsorted pile. Your function should return this pile of t-shirts sorted by small, then medium, then large. The above example would be returned sssssssmmmmmlllll.

// The given string will never include characters outside of the lowercase s, m, and l. The string will also never contain any spaces.

// Write your solution below:

let shirtSort = (str) => {
    let arr = str.split('')
    let sortedS = []
    let sortedM = []
    let sortedL = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 's') {
            sortedS.push('s')
        } else if (arr[i] === 'm'){
            sortedM.push('m')
        } else if (arr[i] === 'l'){
            sortedL.push('l')
        }
    }
    return sortedS.join('') + sortedM.join('') + sortedL.join('')
}


console.log(shirtSort('slsmmsllsmsmlmsls'))


//---------------------------------------------------------------------


// Given an object with the following layout (it's a linked list, for those who know what that is):
// I want you to write a function that takes this object as input, and sums all of the values
// of itself and all the nested objects, and return that number.
// Each object's "next" property may be another object of the same format, or it may be null.
// Your function should be able to handle any amount of nexted objects (any size of linked list).

obj = {
    value: 6,
    next: {
        value: 5,
        next: {
            value: 0,
            next: {
                value: 7,
                next: null
            }
        }
    }
}

// Your function should return 18 for this object

// let sumObj = (object) => {
//     // let totalSum
//     let arr = Object.values(object)
//     console.log(arr.join(''))
// }

// sumObj(obj)

function sum(obj){
    let theSum = 0
    while (obj !== null) {
        theSum += obj.value
        obj = obj.next
    }
    return theSum
}

console.log(sum(obj))

// Bonus: solve this using recursion

