/*  JavaScript Function and Function Expressions */

/*

A function is a block of code that performs a specific task.
A function is declared using the function keyword.
The basic rules of naming a function are similar to naming a variable. It is better to write a descriptive name for your function. For example, if a function is used to add two numbers, you could name the function add or addNumbers.

*/

{
    // function print(){
    //     console.log("Hello Bete");
    //     console.log(4*2);
    // }
}

/* Function Parameters */

// A function can also be declared with parameters. A parameter is a value that is passed when declaring a function.


{

    // function multiply(x , y){
    //     console.log(x);
    //     return x * y
    // }

    // console.log( multiply(2 , 12));

}

/* Function Return */

// The return statement can be used to return the value to a function call.

// The return statement denotes that the function has ended. Any code after return is not executed.

// If nothing is returned, the function returns an undefined value.

/*   Benefits of Using a Function   */

// Function makes the code reusable. You can declare it once and use it multiple times.
// Function makes the program easier as each small task is divided into a function.
// Function increases readability.
{
    // function add(x , y){
    //     return x + y
    // }

    // console.log(add(12 , 4));
    // console.log(add(12 , 10));
    // console.log(add(12 , 34));
    // console.log(add(12 , 112));
    // console.log(add(12 , 89));
    // console.log(add(12 , 78));
    // console.log(add(12 , 54));
}

/* 4. Function Expressions */

{
    // program to find the square of a number
    // function is declared inside the variable
    // let a = function (num) { return num * num };
    // console.log(a(23));

    // can be used as variable value for other variables
    // let b = a(4);
    // console.log(b);

    // variable "a" is used to store the function. Here the function is treated as an expression. And the function is called using the variable name.

    // The function above is called an anonymous function.
}


/* JavaScript Arrow Function / Multiline Arrow Functions */

// Arrow function is one of the features introduced in the ES6 version of JavaScript. It allows you to create functions in a cleaner way compared to regular functions.

/* Arrow Function With Arguments */

// function print(){
//     return console.log("Hello Lalu");
// }
// print();

// let x = () => console.log("Hello Arrow Beta!");

// x();

// let y = () => console.log(4 * 7));

// y();

// Arrow Function as an Expression

{
    //    let gender = prompt()

    //    let x =(gender=="male")?() => console.log("You Are Male!") :(gender == "female") ? () => console.log("You Are Female!") : () => console.log("You Are Other!");;

    //    x();
}


/* JavaScript CallBack Function */

{
    // // function
    // function greet(name, callback) {
    //     console.log('Hi' + ' ' + name);
    //     callback();
    // }
    
    // // callback function
    // function callMe() {
    //     console.log('I am first callback function');
    // }

    // greet('Tushar', callMe);
    // // passing function as an argument

}
