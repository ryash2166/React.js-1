/* 1. Write a function that returns the square of a number 1 to 20 */

{
    function Square(){
        let i;
        let Square;
        for(i = 1 ; i <= 20 ; i++){
            
            Square = i * i

            console.log(Square);
        }
    }
    Square() ;
}

/* 2. Write a function to convert Celsius to Fahrenheit */

{
    function Fahrenheit(){
        let Celsius = 12.00;

        console.log("Fahrenheit is" , (Celsius * 9/5) + 32 ); 

    }
    Fahrenheit();
}

/* 3. Write a function to find the area of a given Rectangle */

{
    function Rectangle(){
        let l = 12; w = 20; r = 0;

        r = l * w;
        console.log("The Reactangle Area is" , r);
    }
    Rectangle();
}

/* 4. Write a function to reverse a number */

{
    function reverse(){
        let num1 = 123456789;
        let num2 = num1.toString().split('').reverse().join('');
        let result1 = Number(num2);
        
        console.log("After Reverse:" , num1);
        console.log("Before Reverse:", result1);
    }
    reverse();
}

/* 5. Count the number of Vowels in the String */

{
    function num(string){
        let Vowels = 'aAeEiIoOuU';
        let count = 0;

        for(let i = 0; i < string.length; i++){
            if (Vowels.indexOf(string[i]) !== -1){
                count += 1;
            }
        }
        return count;
    }
    console.log("The Total Number Of Vowels is", num("Yash Rakholiya!"));
}

/* 6. Write a function to calculate simple interest based on the principal amount */

{
    function SI(){
        let p = 10000;
        let r = 5;
        let t = 5;
        let si;

        si = (p * r * t)/100;
        
        return si;
    }
    console.log("The Simpe Interest is", SI());
}

/* 7. Write a function to generate a random number */

{
    function random(){
        
        let random = Math.random() * (200 - 23) + 1;
        let random1 = Math.random() * (200 - 23) + 1;

        console.log("The Random Number is", random);
        console.log("The Random Number is", random1);

    }
    random();
}

/*8. Write a JavaScript program to display the current day and time in the following format. */

{
    function date(){
        let now = new Date();
        let Day = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
        let day = Day[now.getDay()];
        let hours = now.getHours();
        let minutes = now.getMinutes();

        console.log("Today is", day , "& Current Time is", hours,":",minutes);
    }
    date();
}

/* 9.  Write a JavaScript function that returns a passed string with letters in alphabetical order */

{
    
    function order(string){

        return string.split('').sort().join('');

    }
    console.log("FEDCBA =", order("FEDCBA"));
}

/* 10. Write a JavaScript conditional statement to find the sign of the product of three numbers. Display an alert box with the specified sign. */

{    
    let a = prompt("Enter Value With Sign: "); 
    let b = prompt("Enter Value With Sign: "); 
    let c = prompt("Enter Value With Sign: ");

    if(a>0 && b>0 && c>0){
        alert("Sign is ' + '");
    }
    else if(a<0 && b>0 && c>0){
        alert("Sign is '- + +'");
    }
    else if(a>0 && b<0 && c>0){
        alert("Sign is '+ - +'");
    }
    else if(a>0 && b>0 && c<0){
        alert("Sign is '+ + -'");
    }
    else if(a>0 && b<0 && c<0){
        alert("Sign is '+ - -'");
    }
    else if(a<0 && b>0 && c<0){
        alert("Sign is '- + -'");
    }
    else if(a<0 && b<0 && c>0 ){
        alert("Sign is '- - +'");
    }
    else{
        alert("Sign is ' - '");
    }
}