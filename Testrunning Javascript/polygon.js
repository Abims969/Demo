// console.log("Polygon");

// // 1. Comment
// // This is my first javascript function single line comment
// //          ctrl + /

// /* Multi comment
// Multi comment
// Multi comment
// Multi comment */

// // this is my first variable
// // let a = 3;

// // 2. Data Types and Variables

// // undefined

// // console.log('Web3ladies', b)

// // null
// let pocket = null;
// console.log("Web3ladies", pocket);

// // Boolean
// // true or false
// let color = true;

// // String
// let name = "Malik Mukhtar";
// console.log("Web3ladies",  name);

// // Symbol
// // let sym = new Symbol()

// // Number
// let age = 1100
// console.log("Web3ladies",  age);


// // Object {}
// // key: value
// // crayon: green

// {}
// let person = {
//     firstName:"John", 
//     lastName:"Doe", 
//     age:50,
//      eyeColor:"blue",
//      color: true,
//      longhair: false,
//      state: null,
//      gender: undefined,
//     };

// console.log("this is person property", person.age);



//     // Ways to declare Variables 
//     // var, let , const

//     var name1 = 'Malik'

//     let name2 = 'Mukhtar'

//     const name3 = 'school'

//     const vat = 7.5

//     name2 = "Jane";

//     console.log("this is vat property", name2);

//     //Variable naming conventions

//     // camelCase
//     let samSungGoesToSchool = 30;

//     // PascalCase
//     let MalikNamingConvention = 'School';

//     // snake_case
//     let malik_naming_convention = 'NamingConvention';

//     // kebab case
//     // let kebab-naming-convention = 'NamingConvention';

//     // Arithmetics in JS
//     // addition  + , multiplication *, division /, subtraction -, reminder % (modulus)


//     // addition

//     let a = 1000;

//     let b = 3000;

//     let c = a + b;
    
    
//     console.log("Answer to first c", c + 20);
    
//     //multiplication
//     let d = a * b;
//     console.log("Answer", d);
    
//     //division
//     let e = a / b;
//     console.log("Answer", e);
    
    
//     //subtraction
//     let f = b - a
//     console.log("Answer", f);

// //reminder

// let malikNumber = 9;

// console.log("Answer to reminder", 25647732 % 356);


// // I generated a random number between 0 and 1   Math.random()

// //Multiplied it m=by this large number 10000000000000 times

// // then find d reminder with %

// let Web3ladies = Math.floor(Math.random() * 10000000000000);
//     console.log("Web3ladies", Web3ladies % 28)
    



//     // concatenation

//     let variableOne = 'Malik'

//     let variableTwo = 'Web3Ladies'

//     let country = 'Nigeria';

//     let finalResult = variableOne + ' is a student ' + variableTwo + ' Academy ' + country 

//     console.log('Final Result', finalResult)




// let a = 100

// let b = 5

// console.log('final result', a + b)

//Type Coercion

// Array (how to declare an array)

// let firstArray = ['Malik', 16473, 'Color', true, {color:'red'}, null, undefined, 'Color', true, {color:'red'}, null, undefined]
           //         0       1       2       3       4           5       6         7       8       9           10      11

    //   console.log('My first array', firstArray.length)

// let c = 2;

// let d = "588490388477588499983838"

// let name (string) = "malik"

// name = 3;



// console.log('Answer', c + d.toString())



let b = true // 0

let a = undefined // 1

console.log('Our ans', b + a)

// NaN Not a Number

// let firstArray = ['Malik', 16473, 'Color', true, {color:'red'}, null, undefined, 'Color', true, {color:'red'}, null, undefined]

let nestedArr = ['John', 'Doe', "67", ['HTML', 'JS', 'CSS', [1,2,3,'Chioma']]]


console.log('My anssssss', firstArray[4])
console.log('My second anssssssss', nestedArr[3][3][3])


//Array Methods

//Push

let resultArray = []

console.log('Our Assignment Result', resultArray)

resultArray.push(7)
resultArray.push(8)
resultArray.push(2)
resultArray.push(10)
resultArray.push(true)
resultArray.push(undefined)
resultArray.push(null)
resultArray.push('malik')
resultArray.push({
    color: 'green'
})
resultArray.push('Web3Ladies')

console.log('Our Assignment Result Final', resultArray)

//Pop
resultArray.pop()//web3ladies
resultArray.pop()//color:green
resultArray.pop()//malik
resultArray.pop()//null
resultArray.pop()//undefined

console.log('Our Assignment Result Final after removing', resultArray)

resultArray.shift()
resultArray.shift()


console.log('Our Assignment Result Final after Shifting', resultArray)

resultArray.unshift('International')
resultArray.unshift('Sport')
resultArray.unshift('Web3Ladies')

console.log('Our Assignment Result Final after UnShifting', resultArray)



let firstArray = ['Malik', 16473, 'Color', true, {color:'red'}, null, undefined, 'lizzy']

resultArray.filter()

console.log ('solution', resultArray)



