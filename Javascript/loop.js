// Make Countdown using Loop
{
    const countdown = 10;
 
     for (let i = countdown; i >= 1; i--) {
     document.write( i + "<br>")
    }
    document.write("Countdown Is  Over" + "<br>")
}

{
    document.write("<br>")
    let i = 10;
     while (i >= 1) {
     document.write( i + "<br>")
     i--;
     }
     document.write("Countdown Is Over" + "<br>")
}

{
    document.write("<br>")
    let i = 10;
    do {
        document.write( i + "<br>")
        i--;
    }while (i >= 1)
    document.write("Countdown Is Over" + "<br>")
}

document.write("<br>")

// Sum of 1 to 10
{
    let a; s=0;

    for(a=1; a<=10; a++){
        s=s+a;
    }
    document.write("The Sum Of 1 to 10 is " + s + "<br>")
}

{
    let a=1; s=0;

    while(a <= 10){
        s=s+a;
        a++;
    }
    document.write("The Sum Of 1 to 10 is " + s + "<br>")
}

{
    let a=1; s=0;
    do{
        s=s+a;
        a++;
    }while(a <= 10)
    document.write("The Sum Of 1 to 10 is " + s + "<br>")
}

document.write("<br>")  

//  Multiplication using Loop

{
    const num = 3;

    for(let i = 1; i <= 10; i++){
        const res = i * num;
        document.write(num + "*" + i + "=" + num * i + "<br>");
    }
}

document.write("<br>") 

{
    const num = 4;
    let i = 1;

    while (i <= 10) {
      document.write(num + "*" + i + "=" + num * i + "<br>");
      i++;
    }
}

document.write("<br>") 

{
    const num = 5;
    let i = 1;

    do{
        document.write(num + "*" + i + "=" + num * i + "<br>");
        i++;
    }while (i <= 10)
}

document.write("<br>") 

// Generate the Fibonacci sequence using  loop

{
  let x = 0;
  let y = 1;
  let z;
  for (let i = 1; i < 9; i++) {
        document.write(x + "\t")
        z = x + y;
        x = y;
        y = z;
    }  
}

document.write("<br>") 

{
    let num1 = 0,
    num2 = 1;
    i = 1;
    while (i < 9) {
        document.write(num1 + "\t");
        let nextNum = num1 + num2;
        num1 = num2;
        num2 = nextNum;
        i++;
    }
}

document.write("<br>") 

{
    let num1 = 0;
    let num2 = 1;
    let i = 1;
    do {
        document.write(num1 + "\t");
        let nextnum = num1 + num2;
        num1 = num2;
        num2 = nextnum;
        i++;
    }while (i < 9);
}
document.write("<br>") 

// Calculate factorial of a number using loop

document.write("<br>")
{
    let num = 5;
    let total = 1;

for (let i = 0; i < num; i++){
    total = total * (num - i);
}
document.write(num + ' ! = ' + total + "<br>");
}

{
    let num = 5;
    let total = 1;
    let i = 0;
    while(i < num){
        total = total * (num - i);
        i++;
    }
    document.write(num + ' ! = ' + total + "<br>");
}

{
    let num = 5; total = 1; i = 0;
    do{
        total= total * (num - i);
        i++;
    }while(i < num);
    document.write(num + ' ! = ' + total + "<br>");
}

document.write("<br>")

// Calculate the power of a number using a while loop

{
    let num = 1; power = 2; n = 5;

    for(let i = 0; i < power; i++){
        num=num*n;
    }
    document.write("5 " + "* " + "5 " + "= " + num + "<br>");
}

{
    let num = 1; power = 2; n = 5; i = 0;

    while(i < power){
        num=num*n;
        i++;
    }
    document.write("5 " + "* " + "5 " + "= " + num + "<br>");
}

{
    let num = 1; power = 2; n = 5; i = 0;

    do{
        num=num*n;
        i++;
    }while(i < power)
    document.write("5 " + "* " + "5 " + "= " + num + "<br>");
}

// Print a pattern using a while loop
document.write("<br>")

{
    let n = 5;  

    for (let i = 1; i <= n; i++) {
	let str = "* ";
	document.write(str.repeat(i) + "<br>");
    }
}

document.write("<br>")

{
    let i=0;
    while (i <= 4){
    for(j=0;j<=i;j++){
    document.write ("* ");
    }
    document.write ("<br>");
    i++;
    }
}

document.write("<br>")

{
    let i ; row = 1; column = 1;
    do{
        i = 4;
        do{
            i--;
        }while(i>=row);
        column = 1;
        do{
            document.write("* ");
            column++;
        }while(column<=row);
        document.write("<br>");
        row++;
    }while(column<=5);
}

document.write("<br>")

// Search for a specific number using a for loop and break statement

{

}

document.write("<br>")

// .Find the first odd number in a sequence using a while loop and break
// statement

{
  let i = prompt("Enter Number For check Odd or Even:");
  while (true) {
    if (i % 2 == 0) {
      document.write(`The first odd number is: ${i}`);
      break;
    }
    i++;
  }
}

document.write("<br>")

// Loop with a conditional break statement based on user input

{
    let sum = 0, number;

    while(true) {

        number = parseInt(prompt('Enter a number: '));

        if(number < 0) {
           break;
        }
       sum += number;
    }
    document.write(`The sum is ${sum}.`);
}


{
  let randomNumber = 20;
  let guessCount = 0;
  let guess = 5;

  while (guessCount < guess) {
    let userGuess = prompt("Enter a number between 1 and 100");
    guessCount++;

    if (userGuess == randomNumber) {
      alert(
        "Congratulations! You guessed the number in " + guessCount + " tries."
      );
      break;
    }

    if (userGuess > randomNumber) {
      alert("Your guess is too high. Try again.");
    } else if (userGuess < randomNumber) {
      alert("Your guess is too low. Try again.");
    }

    if (guessCount == guess) {
      alert(
        "Sorry, you have exceeded the guess limit. The number was " +
          randomNumber +
          "."
      );
    }
  }
}