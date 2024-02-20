/* Declare a function fullName and it print out your full name. */

{
  let fullName = (firstname, lastname) => `${firstname} ${lastname}`;

  console.log(fullName("Yash", "Rakholiya"));
}

/* Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name. */

{
  let fullName = function (firstname, lastname) {
    return firstname + " " + lastname;
  };
  console.log(fullName("Yash", "Rakholiya"));
}

/* Declare a function addNumbers and it takes two two parameters and it returns sum. */

{
  let num = function (num1, num2) {
    let sum = 0;
    sum = num1 + num2;
    return sum;
  };
  console.log(num(10, 20));
}

/* An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.*/

{
  function Rectangle() {
    let l = 12;
    w = 20;
    r = 0;

    r = l * w;
    console.log("The Reactangle Area is", r);
  }
  Rectangle();
}

/* A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle. */

{
  function Rectangle() {
    let l = 12;
    w = 20;
    r = 0;

    r = 2 * (l + w);
    console.log("The Reactangle Perimeter is", r);
  }
  Rectangle();
}

/* A volume of a rectangular prism is calculated as follows: volume = length x width x height. Write a function which calculates volumeOfRectPrism. */

{
  function Rectangle() {
    let l = 12;
    w = 20;
    h = 5;
    r = 0;

    r = l * w * h;
    console.log("The Reactangle Volume is", r);
  }
  Rectangle();
}

/* Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle. */

{
  function circle() {
    let r = 24;
    a = 0;

    a = Math.PI * r * r;
    console.log("The Circle Area is", a);
  }
  circle();
}

/* Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle. */

{
  function circle() {
    let r = 24;
    a = 0;

    a = 2 * Math.PI * r;
    console.log("The Circle Circumference is", a);
  }
  circle();
}

/* Density of a substance is calculated as follows:density= mass/volume. Write a function which calculates density. */

{
  function density() {
    let d = 0;
    m = 25;
    v = 19.75;

    d = m / v;

    console.log("The Density is", d);
  }
  density();
}

/* Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken. Write a function which calculates a speed of a moving object, speed. */

{
  function speed() {
    let s = 0;
    m = 2;
    d = 120.54;

    s = d / m;

    console.log("The Speed is", s);
  }
  speed();
}

/* Weight of a substance is calculated as follows: weight = mass x gravity. Write a function which calculates weight. */

{
  function weight() {
    let w = 0;
    m = 50;
    g = 9.8;

    w = m * g;

    console.log("The Weight is", w);
  }
  weight();
}

/* Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelsiusToFahrenheit. */

{
  function Fahrenheit() {
    let Celsius = 12.0;

    console.log("Fahrenheit is", (Celsius * 9) / 5 + 32);
  }
  Fahrenheit();
}

/* Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below. */

{
  function BMI(height, weight) {
    let bmi = weight / Math.pow(height, 2);
    return bmi;
  }
  let height = 1.79832;
  let weight = 70;

  // Function call
  let bmi = BMI(height, weight);
  console.log("The BMI is " + bmi + " so you are");

  // Conditions to find out BMI category
  if (bmi < 18.5) {
    console.log("underweight");
  } else if (bmi >= 18.5 && bmi < 24.9) {
    console.log("Healthy");
  } else if (bmi >= 24.9 && bmi < 30) {
    console.log("overweight");
  } else if (bmi >= 30) {
    console.log("Suffering from Obesity");
  }
}

/* Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method. */

{
  console.log(Math.max(0, 10, 5));

  console.log(Math.max(0, -10, -2));
}

/* Declare a function name printArray. It takes array as a parameter and it prints out each value of the array. */

{
  let a = ["a", "b", "c"];
  a.forEach(function (entry) {
    console.log(entry);
  });
}

/* Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object. */

{
    function showDateTime() {
        let date = new Date("2020-01-08T16:08");
        console.log(date);
    }
    showDateTime();
}

{
    function formatDate(date) {
        var d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();
    
        if (month.length < 2) 
            month = '0' + month;
        if (day.length < 2) 
            day = '0' + day;
    
        return [day, month, year].join('/');
    }
     
    console.log(formatDate('jan 08,2020'));
}