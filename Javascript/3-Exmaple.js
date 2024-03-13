/* Alert */

{
    // alert("Hello Yash")
    // window.alert("this is javascript")
}

{
    // let CD
    // CD = false

    // alert(CD ? "Nagative User" : "Positive User")
}

{
    // alert("Yash")
}

/* Prompt */

{
    // const Message = prompt()
    // document.write(Message)
}

{
    // let userName = prompt("Enter Your Name:")

    // if (userName !== null && userName !== "") {
    //     alert("Hello, " + userName + "Welcome....")
    // }
    // else {
    //     alert("You didn't enter a name.....")
    // }
}

{
    // let userName = prompt("Enter Your Name:");

    // alert(userName ? "Hello, " + userName + "Welcome....." : "You didn't enter a name......");

}

/* Confirm */

{
    // let message = confirm("this is javascript?")

    // document.write(message)
}

{
    // let userConfirmation = confirm("Do you want to proceed with the action?")

    // if (userConfirmation) {
    //     alert("Action confirmed.....")
    // }
    // else {
    //     alert("Action canceled......")
    // }
}

{
    // let userConfirmation = confirm("Do you want to proceed with the action?")

    // alert(userConfirmation
    //     ? "Action confirmed....."
    //     : "Action canceled....."
    // )
}

/* variable useing var() in javascript */

{
    // var box = "LiveScript"
    // console.log(box)

    // var Names = "food"
    // var names = "Javascript"
    // console.log(Names)

    // var number1 = 15
    // var number2 = 2
    // console.log(number1 ** number2)

    // var box1 = "toys"
    // var box2 = "cloths"
    // var box3 = 45

    // console.log(box1)
    // console.log(box2)
    // console.log(box3)
}

/* New Html Element Add In Though Javascript */

{
    // var newelement = document.createElement("h1")
    // newelement.textContent = "hello world"
    // document.body.appendChild(newelement)

    // var newelement = document.createElement("marquee", Option)
    // newelement.textContent = "Yash"
    // document.body.appendChild(newelement)

    // var newelement = document.createElement("pre")
    // newelement.textContent = `how are you!
    //  hi./kzndcb`
    // document.body.appendChild(newelement)
}

/* JavaScript is case-sensitive. So y and Y are different variables */

{
    // let y = "hi"
    // let Y = 5

    // console.log(y)
    // console.log(Y)
}

{
    // let A = "Log"
    // let a = 22

    // console.log(A)
    // console.log(a)
}

{
    // let K = "Raj"
    // let k = 20

    // console.log(K)
    // console.log(k)
}

/* Declaration let() */

{
    // let box1 = "Truck"
    // box1 = "Bus"
    // console.log(box1)
}

{
    // let number5 = 30
    // console.log(number5)
}

{
    // let number4 = 40
    // console.log(number4)
}

{
    // let number3 = 60
    // console.log(number3)
}

/* Declaration const() */

{
    // const emma1 = "this"
    // console.log(emma1)
}

{
    // const emma2 = "that"
    // console.log(emma2)
}

/* string with quotes */

{
    // let x = "wor'ld"
    // let y = 'wor"ld'
    // let z = "wor\"ld"
    // let zz = 'wor\'ld'
    // let zzz = 'hello \n world'
    // let zzzz = "he\tllo"
    // console.log(z);
    // console.log(zz);
    // console.log(zzz);
    // console.log(zzzz)
    // document.write(x + "<br>" + y + "<br>" + z)
    // console.log(y + "<br>")
}

/*  Array Methods */

/* Array length properties */
{
    // let arry = ["option", "car", bus, 41, "Bike", "truck"]
    // console.log(arry.length)
}

{
    // let arry1 = ["Log", "Gopal", "Yash", 1, "Kartik", "Jonties", 22]
    // console.log(arry1.length)
}

{
    // let arry2 = ["Nidhhi", "Exta", "Aesha", 22, "Mansi", "Hasti", 24, 567]
    // console.log(arry2.length)
}

/* The join() method also joins all array elements into a string. */
{
    // let arry1 = ["Log", "Yash", "Kartik", "Gopal", "Hari"]
    // let arry2 = arry1.join(" + ")
    // console.log(arry2)
}

{
    // let arry1 = ["Log", "Yash", "Kartik", "Gopal", "Hari", "Darshan"]
    // let arry2 = arry1.join(" ")
    // console.log(arry2)
}

{
    // let arry1 = ["Log", "Yash", "Kartik", "Gopal", "Hari", "Jonties", "Chirag", "Janak"]
    // let arry2 = arry1.join(" * ")
    // console.log(arry2)
}

/* Popping in javascript Array */
{
    // const fruits = ["Banana", "Orange", "Apple", "Mango"]
    // document.getElementById("demo").innerHTML = fruits

    // document.getElementById("demo-1").innerHTML = fruits.pop()

    // console.log(fruits)

    // console.log(fruits.length)
}

{
    // let name = ["Log", "Gopal", "Kartik", "Vijay", "Yash", "Janak"]

    // let Name = name.pop()

    // console.log("Array:", name)
    // console.log("Removed Element:", Name)

}

/* Pushing in javascript Array */

/* The push() method adds a new element to an array (at the end) */
{
    // const fruits2 = ["Banana", "Orange", "Apple", "Mango"]

    // document.getElementById("demo").innerHTML = fruits2

    // fruits2.push("Kiwi")

    // document.getElementById("demo-1").innerHTML = fruits2

    // console.log(fruits2)
}

{
    // const Namee = ["Log", "Yash", "Kartik", "Vijay", "Gopal"]

    // document.getElementById("demo").innerHTML = Namee.push("Chirag")

    // document.getElementById("demo-1").innerHTML = Namee.length

    // console.log(Namee)
}

/* Array shift() */
{
    // let arry3 = ["option", "car", 41, "Bike", "truck"]
    // let arry4 = arry3.shift()
    // let arry5 = arry3.shift()
    // console.log(arry4)
    // console.log(arry3)  
    // console.log(arry5)
}

{
    // const Name4 = ["Log", "Yash", "Kartik", "Vijay", "Gopal", "Chirag"]
    // console.log(Name4)

    // document.getElementById("demo").innerHTML = Name4.shift()
    // console.log(Name4)

    // document.getElementById("demo-1").innerHTML = Name4.shift()
    // console.log(Name4)
}

/* The unshift() method returns the new array length */

{
    // const name5 = ["Yash", "Vijay", "Hari", "Kartik", "Chirag"]
    // document.getElementById("demo").innerHTML = name5.unshift("Log")
    // console.log(name5)

    // document.getElementById("demo-1").innerHTML = name5.unshift("Gopal")
    // console.log(name5)

}

/*  Changing Elements */
{
    // const fruits6 = ["Banana", "Orange", "Apple", "Mango"]
    // console.log(fruits6)

    // fruits6[9] = "Kiwi"
    // console.log(fruits6)
}

{
    // const name6 = ["Log", "Yash", "Gopal", "Chirag", "Vijay", "Hari"]
    // console.log(name6)

    // name6[7] = "Jontes"
    // console.log(name6)
}

/* JavaScript Array add element */

{
    // const name7 = ["Yash", "Log", "Gopal", "Kartik", "Vijay", "Hari"]
    // console.log(name7);

    // name7[name7.length] = "Varun"
    // console.log(name7)
}

{
    // const name7 = ["Yash", "Log", "Gopal", "Kartik", "Vijay", "Hari"]

    // name7[name7.length] = "Varun"
    // name7[name7.length] = "Chirag"
    // console.log(name7)
}

/* JavaScript Array Splice() */
{
    // let fruits = ["apple", "banana", "orange", "grape", "mango"]
    // fruits.splice(0 , 3)
    // console.log("Array:", fruits)
}

{
    // let names = ["Log", "Yash", "Kartik", "Gopal", "Vijay", "Hari"]
    // names.splice(2 , 3)
    // console.log("Array:", names)
}

{
    // let ar = ["CD", "Vijay", "Kartik", "Hari", "Varun", "Chirag"]
    // console.log(ar)
    
    // let arr = ar.splice(2, 4, "Gopal", "Vivek")
    // console.log(arr)
    // console.log(ar)
}
    
{
    // let ar = ["CD", "Vijay", "Kartik", "Hari", "Varun", "Chirag"]
    // console.log(ar)
    
    // let arr = ar.splice(2, 2, "Aesha", "Ekta")
    // console.log(arr)
    // console.log(ar)
}

/* JavaScript Array slice() */
{
    // let a1 = [45, 89, 21, 2, 57, 23, 44]
    // console.log(a1)

    // let a2 = a1.slice(1,54)
    // console.log(a2)
    // console.log(a1)
}

{
    // let a1 = ["Log", "Aesha", "Yash", "Rana", "Kartik", "Nisha"]
    // console.log(a1)

    // let a2 = a1.slice(0, 4)
    // console.log(a2)
    // console.log(a1)
}

{
    // let Namee = ["Log", "Yash", "Aesha", "Rana", "Nidhi", "Ekta", "Kartik"]
    // let slicedNamee = Namee.slice(0, 4)
    // console.log("Array:", Namee)
    // console.log("Namee Array:", slicedNamee)
}

{
    // let colors = ["red", "green", "blue", "yellow", "purple"]
    // let selectedColors = colors.slice(0, 3)
    // console.log("Original Colors Array:", colors)
    // console.log("Selected Colors Array:", selectedColors)
}

/* Merging (Concatenating) Arrays */

{
    // let arry11 = ["javascript", "c", "c++", "python", "html", "css"]
    // let arry22 = ["option", "car", 41, "Bike", "truck"]
    // let arry33 = ["boostrap", "tailwind", "reactjs", "nextjs"]

    // let arry44 = arry11.concat(arry33, arry22)

    // console.log(arry44)
}

{
    // let arry11 = ["Log", "Yash", "Kartik", "Gopal", "Vijay", "Jontes"]
    // let arry22 = ["Aesha", "Ekta", "Nidhi", "Mansi", "Monika"]
    // let arry44 = arry11.concat(arry22)
    // console.log(arry44)
}

/*  Array.isArray */

{
    // console.log(Array.isArray(17))
}

{
    // let fruits = ["apple", "banana", "orange"]
    // let numbers = [1, 2, 3, 4]

    // console.log("Is 'fruits' an array?", Array.isArray(fruits))
    // console.log("Is 'numbers' an array?", Array.isArray(numbers))
}

 /*  javascript Sorting Array */

 {
    // let ary1 = ["CD", "Kartik", "Vijay", "Hari", "Varun", "Gopal"]
    // console.log(ary1)

    // let ary2 = ary1.sort()
    // console.log(ary2)
}

{
    // let numbers = [120, 5, 8, 2, 7, 22, 24, 340]
    // numbers.sort(function (a, b) {
    //     return a - b
    // })
    // console.log("Sorted Array:", numbers)
}

/*  Reversing array */
{
    // let arr1 = ["Gopal", "Vijay", "Janak", "CDi", "Yash", "Nimesh", "Chirag"]
    // console.log(arr1)

    // let arr2 = arr1.reverse()
    // console.log(arr2)
}

{
    // let ay1 = [189, 45, 56, 128, 10, 150, 22, 8]
    // console.log(ay1)

    // let ay = ay1.reverse()
    // console.log(ay)
}

/* Array map() */
{
    // const number1 = [56, 798, 345, 35]
    // console.log(number1)
    // const number2 = number1.map(myFunction)

    // const number3 = number2.sort((a, b) => a - b)

    // console.log(number2)

    // function myFunction(value) {
    //     return value * 2
    // }
}

{
    // let numbers = [1, 2, 3, 4, 5];
    // let squaredNumbers = numbers.map(function (number) {
    //     return number * number
    // })

    // console.log("Original Array:", numbers)
    // console.log("Squared Numbers Array:", squaredNumbers)
}

/* Array flat() */

{
    // let flatmap = [1, 2, 3, 4]
    // let flatmap1 = flatmap.flatMap((num) => num === 3 ? [1, 2] : 2)
    // console.log(flatmap1)
}

{
    // let flatarray = [10, 20, [22, 33, [44, 55, [66, 77]]]]
    // let flatmap2 = flatarray.flat(3)
    // console.log(flatmap2)
}

/* Array filter() */
{
    // let filterarry = ["Log", "Nikunj", "Vijay", "Gopal", "Yash", "Hari", "Janak"]
    // let filterarry2 = filterarry.filter((word) => word.length < 5)
    // console.log(filterarry2)
    // let filterarry3 = filterarry2.sort()
    // console.log(filterarry3)
}

{
    // let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
    // let evenNumbers = numbers.filter(function (number) {
    //     return number % 2 === 0
    // })
    // console.log("Original Numbers Array:", numbers)
    // console.log("Even Numbers Array:", evenNumbers)
}

/* Array fill() */
{
    // let fillarray = [46, 89, 101, 122, 45]
    // console.log(fillarray)

    // let fillarray2 = fillarray.fill("None", 3)
    // console.log(fillarray2)
}

{
    // let myArray = new Array(22, 33, 44, 55, 66, 77, 88, 99, 100);
    // myArray.fill(2, 5);
    // console.log("Partially Filled Array:", myArray);
}

/* Array copywithin() */
{
    // const alfa = ["A", "B", "C", "D", "E", "F"]
    // const newcopy = alfa.copyWithin(0, 3, 4)
    // console.log(newcopy)

    // console.log([1, 2, 3, 4, 5, 6].copyWithin(0, 1))

    // console.log([1, 2, 3, 4, 5, 6, 7].copyWithin(2, 3, 5))

    // console.log([7, 6, 5, 4, 3, 2, 1].copyWithin(1, 3))
}

/* javascript valueof() method */

{
    // const fruitss = ["Banana", "Orange", "Lemon", "Apple", "Mango", "watermelon", "kiwi", "Olive"]
    // const newfruits = fruitss.valueOf()
    // console.log(newfruits);
}

/*  JavaScript Multidimensional Array */

{
    // const data = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
    // console.log(data)
}

{
    // const data = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
    // let data1 = data[1][1]
    // console.log(data1)
}

/* Add an Element to a Multidimensional Array */
{
    // let studentsData = [['Rana', 22], ['Mansi', 25]]
    // studentsData.push(['Nidhi', 24])
    // let data = studentsData[1][1]

    // console.log(studentsData)
    // console.log(data)
}

{
    // let studentsData = [['Aesha', 24], ['Ekta', 26]]
    // studentsData[1][2] = 'hello'
    // console.log(studentsData)
}

/* FUNCTION */

// Basic Function..... 
{
    // function print() {
    //     console.log("Hello Function")
    // }
    // console.log(2 * 22)
}

{
    // function printt() { }
    // console.log("Hello Function")
}

{
    // function print() {
    //     console.log("Hello Yash")
    //     console.log(2 / 20)
    // }
    // print()
}

/* Function Return */
{
    // function multiply(a, b) {
    //     console.log(a)
    //     return a * b
    // }
    // console.log(multiply(10, 10))
}

{
    // function add(a, b) {
    //     return a + b
    // }
    // console.log(add(22, 45))
    // console.log(add(23, 10))
    // console.log(add(24, 56))
}

{
    // function add() {
    //     return "WelCome To Functin....."
    // }
    // console.log(add())
    // console.log(add())
    // console.log(add())
}

/* Function Expressions */
{
    // let x = function (num) { return num * num }
    // console.log(x(10))

    // let y = x(3)
    // console.log(y)
}

{
    // let x = function (num) { return num / num }
    // console.log(x(22))

    // let y = x(2)
    // console.log(y)
}

{
    // let x = function (num) { return num * num + num - num / num }
    // console.log(x(140))

    // let y = x(23)
    // console.log(y)
}

/* Arrow Function With Arguments */

{
    // function pri()
    // {
    //     return console.log("Hello Yash");
    // }

    // pri()

    // let z = () => console.log("Hello Arrow Function");

    // z()

    // let a = () => console.log(2 * 7)

    // a()
}

{
    // let gender = "female"

    // let k =(gender=="male")?() => console.log("You Are Male"):() => console.log("YOU ARE FEMALE")

    // k()
}

{
    // const addRegular = function (a, b) {
    //     return a - b
    // }
    // console.log(addRegular(5, 3))

    // const addArrow = (a, b) => a + b
    // console.log(addArrow(5, 22))
}

/* JavaScript CallBack Function */

{
    // greet('Yash', callMe)

    // function callMe() {
    //     console.log('I am Here')
    // }

    // function greet(name, callback) {
    //     console.log('Hi' + ' ' + name)
    //     callback()
    // }
}

{
    // function perf(a, b, callback) {
    //     const result = callback(a, b)
    //     console.log(`The Result is: ${result}`)
    // }

    // function add(a, b) {
    //     return a + b
    // }

    // function multiply(a, b) {
    //     return a * b
    // }

    // perf(45, 23, add)
    // perf(5, 234, multiply)
}

/* LOOPS */

/*  javascript while loop */
{
    // let i = 0

    // while (i <= 10) {
    //     document.write("Log" + "<br>")
    //     i++
    // }
}

{
    // let a = 10

    // while (a >= 0) {
    //     document.write(a + " ")
    //     a--
    // }
    // document.write("<br>")
}

{
    // let add = 0
    // let b = 1

    // while (b <= 10) {
    //     add += b
    //     b++
    // }
    // document.write(add + "<br>")
}

/* JavaScript Do while loop */
{
    // let i = 1

    // do {
    //     document.write("Log" + "<br>")
    //     i++
    // }
    // while (i <= 10)
}

{
    // let a = 10

    // do {
    //     document.write(a + "\t")
    //     a--
    // }
    // while (a >= 0)
    // document.write("<br>")
}

{
    // let add = 0
    // let b = 1

    // do {
    //     document.write(b + "<br>")
    //     add += b
    //     b++
    // }
    // while (b <= 10)
    // document.write(add + "<br>")
}

/* Javascript for loop */
{
    // let i = 0

    // for (i; i <= 10; i++) {
    //     document.write("Log" + "<br>")
    // }
}

{
    // let a = 10

    // for (a; a > 0; a--) {
    //     document.write(a + "\t")
    // }
}

{
    // let add = 0
    // let b = 1

    // for (b; b <= 10; b++) {
    //     add += b
    // }
    // document.write(add + "\t")
}

/* Break Statements */
{
    // for (let counter = 0; counter <= 100; counter++) {
    //     if (counter == 18) {
    //         break
    //     }
    //     document.write(counter)
    //     document.write("<br>")
    // }
}

{
    // let userInput

    // while (true) {
    //     userInput = prompt("Enter a number (type 'exit' to stop loop):")

    //     if (userInput === "exit") {
    //         document.write("Exiting the loop based on user input." + "<br>")
    //         break
    //     }

    //     document.write("You entered: " + userInput + "<br>")
    // }
}

{
    // let arr = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50]
    // let k = 35

    // for (let l = 0; l < arr.length; l++) {
    //     if (arr[l] === k) {
    //         document.write("Number found at index : ", l + "<br>")
    //         break
    //     }
    // }
}

/* Continue Statements */ 
{
    // for (let counter = 1; counter <= 100; counter++) {
    //     if (counter == 16) {
    //         continue
    //     }
    //     if (counter == 35) {
    //         continue
    //     }
    //     if (counter == 55) {
    //         continue
    //     }
    //     if (counter == 75) {
    //         continue
    //     }
    //     document.write(counter)
    //     document.write("<br>")
    // }
}

{
    // let u = 1

    // while (u <= 100) {
    //     if (u % 5 === 0) {
    //         u++
    //         continue
    //     }

    //     console.log(u)
    //     u++
    // }
}

{
    // let p = 1

    // for (p = 1; p <= 20; p++) {
    //     if (p % 2 !== 0) {
    //         continue
    //     }
    //     document.write(p + "<br>")
    // }
}

/* Nested Statements */
{
    // const CD = (value) => {
    //     for (let a = value; a > 0; a--) {
    //         let semstring = ""
    //         for (let b = 1; b < a; b++) {
    //             semstring += " "
    //         }
    //         for (let c = 0; c <= value - a; c++) {
    //             semstring += "*"
    //         }
    //         document.write(semstring + "<br>")
    //     }
    // }
    // CD(15)
}

{
    // link: for (let counter = 1; counter <= 10; counter++) {

    //     document.write(counter)
    //     document.write("<br>")

    //     for (let counter2 = 1; counter2 < 4; counter2++) {

    //         if (counter == 3) {
    //             break link
    //         }
    //         document.write("Hello")
    //         document.write("<br>")
    //     }
    // }
}

{
    // function checkAge(age) {
    //     if (age >= 18) {
    //         return "You are an adult."
    //     }
    //     else if (age >= 13) {
    //         return "You are a teenager."
    //     }
    //     else {
    //         return "You are a child."
    //     }
    // }

    // console.log(checkAge(20))
    // console.log(checkAge(15))
    // console.log(checkAge(10))
}

/* MAP METHOD */

// 1. New Map()

{
    // console.log("The New Map Method :-");

    // let fruit = new Map([["Apple", 500] , ["Fig" , 300]]);
    // console.log(fruit);
}

{
    // let car = new Map([["SHELBY", 512900] , ["BMW" , 312000]]);
    // console.log(car);
}

{
    // let tour = new Map([["Banaras", 15000] , ["The Spiti" , 3500]]);
    // console.log(tour);
}

// 2. Set Map()

{
    // console.log("The Set Map Method :-");
    // let fruit = new Map()

    // fruit.set("Apple" , 400)
    // fruit.set("Fig" , 300)

    // console.log(fruit);
}

{
    // let car = new Map()

    // car.set("SHELBY" , 512900)
    // car.set("BMW" , 312000)

    // console.log(car);
}

{
    // let tour = new Map()

    // tour.set("Banaras" , 15000)
    // tour.set("Spiti" , 35000)

    // console.log(tour);
}

// 3. Get Map()

{
    // console.log("The Get Map Method :-");
    // const newmap = new Map([
    //     ["item-1" , "bike"],
    //     ["item-2" , "bus"],
    //     ["item-3" , "car"]
    // ]);

    // newmap.set("item-1" , "truck");

    // console.log(newmap);
    // console.log(newmap.get("item-1"));
}

{
    // const newmap = new Map([
    //     ["item-1" , "SHELBY"],
    //     ["item-2" , "BMW"],
    //     ["item-3" , "COBRA"]
    // ]);

    // newmap.set("item-1" , "Ninja");

    // console.log(newmap);
    // console.log(newmap.get("item-1"));
}

{
    // const newmap = new Map([
    //     ["item-1" , "Apple"],
    //     ["item-2" , "Fig"],
    //     ["item-3" , "Watermelon"]
    // ]);

    // newmap.set("item-1" , "Mango");

    // console.log(newmap);
    // console.log(newmap.get("item-1"));
}

// 4. Size Of Map()

{
    // console.log("The Size of Map Method :-");
    // const newmap = new Map([
    //     ["item-1" , "bike"],
    //     ["item-2" , "bus"],
    //     ["item-3" , "car"]
    // ]);

    // console.log(newmap);
    // console.log(newmap.size);
}

{
    // const newmap = new Map([
    //     ["item-1" , "Apple"],
    //     ["item-2" , "Fig"],
    //     ["item-3" , "Watermelon"],
    //     ["item-4" , "Lemon"]
    // ]);

    // console.log(newmap);
    // console.log(newmap.size);
}

{
    // const newmap = new Map([
    //     ["item-1" , "SHELBY"],
    //     ["item-2" , "BMW"],
    //     ["item-3" , "COBRA"],
    //     ["item-4" , "POLO"],
    //     ["item-5" , "IMPALA"]
    // ]);

    // console.log(newmap);
    // console.log(newmap.size);
}

// 5. Delete Map()

{
    // console.log("The Delete Date in Map Method :-");
    // const newmap = new Map([
    //     ["item-1" , "bike"],
    //     ["item-2" , "bus"],
    //     ["item-3" , "car"]
    // ]);

    // console.log(newmap);
    // console.log(newmap.delete("item-1"));
    // console.log(newmap);
}

{
    // const newmap = new Map([
    //     ["item-1" , "Apple"],
    //     ["item-2" , "Fig"],
    //     ["item-3" , "Watermelon"],
    //     ["item-4" , "Lemon"]
    // ]);

    // console.log(newmap);
    // console.log(newmap.delete("item-5"));
    // console.log(newmap);

}

{
    // const newmap = new Map([
    //     ["item-1" , "SHELBY"],
    //     ["item-2" , "BMW"],
    //     ["item-3" , "COBRA"],
    //     ["item-4" , "POLO"],
    //     ["item-5" , "IMPALA"]
    // ]);

    // console.log(newmap);
    // console.log(newmap.delete("item-4"));
    // console.log(newmap);
}

/* Has Map() */

{
    // const Data = new Map([
    //     ["Name-1" , 'Ekta'],
    //     ["Name-2" , 'Aesha'],
    //     ["Name-3" , 'Nidhi'],
    //     ["Name-4" , 'Monika'],
    //     ["Name-5" , 'Hasti'],
    //     ["Name-6" , 'Log'],
    //     ["Name-7" , 'Yash'],
    //     ["Name-8" , 'Vijay'],
    //     ["Name-9" , 'Kartik'],
    //     ["Name-10" ,'Hari']
    // ])

    // console.log(Data)
    // console.log(Data.has("Name-4"))
    // console.log(Data.has("Name-11"))
    // console.log(Data.has("Name-7"))
}

/* ForEach() Map & Entries() Map() */


/* Set Methods */

/* Set Add() Method */

{
    // const newset = new Set();
  
    // const a = "a";
    // const b = "b";
    // const c = "c";
  
    // newset.add(a);
    // newset.add(b);
    // newset.add(c);

    // console.log(newset);
    // console.log(newset.size);
}

/* Set Size() Method  */
{
    // const x = new Set([
    //     ["Name-1" , 'Ekta'],
    //     ["Name-2" , 'Aesha'],
    //     ["Name-3" , 'Nidhi'],
    //     ["Name-4" , 'Monika'],
    //     ["Name-5" , 'Hasti'],
    //     ["Name-6" , 'Log'],
    //     ["Name-7" , 'Yash'],
    //     ["Name-8" , 'Vijay'],
    //     ["Name-9" , 'Kartik'],
    //     ["Name-10" ,'Hari']
    // ])
    // console.log(x)
    // console.log(x.size)
}

/* Set Has() Method */
{
    // const a = new Set([
    //     "Name-1" , "Ekta",
    //     "Name-2" , 'Aesha',
    //     "Name-3" , 'Nidhi',
    //     "Name-4" , 'Monika',
    //     "Name-5" , 'Hasti',
    //     "Name-6" , 'Log',
    //     "Name-7" , 'Yash',
    //     "Name-8" , 'Vijay',
    //     "Name-9" , 'Kartik',
    //     "Name-10" ,'Hari'
    // ])
    // console.log(a)
    // console.log(a.has("Name-1"))
    // console.log(a.has("Name-11"))
    // console.log(a.has("Name-7"))
}

/* Set Values() Of Method */

{
    // const a = new Set([
    //     "Name-1" , "Ekta",
    //     "Name-2" , 'Aesha',
    //     "Name-3" , 'Nidhi',
    //     "Name-4" , 'Monika',
    //     "Name-5" , 'Hasti',
    //     "Name-6" , 'Log',
    //     "Name-7" , 'Yash',
    //     "Name-8" , 'Vijay',
    //     "Name-9" , 'Kartik',
    //     "Name-10" ,'Hari'
    // ])
    // let y = a.values()
    // console.log(y)
}

/* Set Delete() Method */

{
    // const a = new Set([
    //     "Name-1" , "Ekta",
    //     "Name-2" , 'Aesha',
    //     "Name-3" , 'Nidhi',
    //     "Name-4" , 'Monika',
    //     "Name-5" , 'Hasti',
    //     "Name-6" , 'Log',
    //     "Name-7" , 'Yash',
    //     "Name-8" , 'Vijay',
    //     "Name-9" , 'Kartik',
    //     "Name-10" ,'Hari'
    // ])
    // let y = a.delete("Name-4")
    // console.log(y)
    // console.log(a)
}

/* Primitive String */

{
    // let string1 = "Hello String"
    // let string2 = 'Hello String'
    // let string3 = `Hello String`

    // console.log(string1);
    // console.log(string2);
    // console.log(string3);
}

/* String as Object */

{
    // let string = new String("Hello String as Object")

    // console.log(string);

    // console.log(string.split(''));
}

/* STRING ALL METHOD */

/* 1. String Length */

{
    // let string = "String Length Method"

    // console.log(string.length);
}

/* 2. String charAt() */

{
    // let string = "String charAt Method"
    // console.log(string.charAt(3));
}

/* 3. String Slice() Method */

{
    // let string = "String Slice Method"

    // console.log(string.slice(10));
    // console.log(string.slice(-10));
    // console.log(string.slice(2 , 10));
    // console.log(string.slice(-10 , -2));
    // console.log(string.slice(2 , -10));
    // console.log(string.slice(-10, 10));
}

/* 4. String Substring() Method */

{
    // let string = "String Substring Method"

    // console.log(string.substring(10));
    // console.log(string.substring(-10));
    // console.log(string.substring(2 , 10));
    // console.log(string.substring(-2 , -10));
    // console.log(string.substring(2 , -10));
    // console.log(string.substring(-10, 7));
}

/* 5. String replace() Method */

{
    // let string = "String Replace Method"

    // console.log(string.replace("String" , "Method"));
}

/* 6. String replaceAll() Method */

{
    // let string = "String ReplaceAll String Method"

    // console.log(string.replaceAll("String" , "Method"));
    // console.log(string.replaceAll(/String/g , "Method"));
    // console.log(string.replaceAll(/String/i , "Method"));

}

/* 7. String toUpperCase() Method */

{
    // let string = "String toUpperCase Method"

    // console.log(string.toUpperCase());
}

/* 8. String toLowerCase() Method */

{
    // let string = "STRING toLowerCase Method"

    // console.log(string.toLowerCase());
}

/* 9. String Concat() Method */

{
    // let string = "String Concat Method"
    // let string1 = "String Concat-2 Method"

    // console.log(string.concat(string + string1));

}

/* 10. String Trim() Method */

{
    // let string = "            String Trim Method"

    // console.log(string.length);
    // console.log(string.trim());
}

/* 11. String TrimStart() Method */

{
//     let string = "            String Trim Method      ."

//     console.log(string.length);
//     console.log(string.trimStart());   
}

/* 12. String TrimEnd() Method */

{
    // let string = "         String Trim Method.            "

    // let string1 = string.trimEnd();
    
    // console.log(string1);
    // console.log(string1.length);
}

/* 13. String padStart() Method */

{
    // let string = "Strign padStart Method"
    // console.log(string);
    // console.log(string.length);

    // let String45 = string.padStart(30 , "1");
    // console.log(String45);
}

/* 14. String charCodeAt() Method */

{
    // let string = "String charCodeAt Method"

    // console.log(string.charCodeAt(3));
}

/* 15. String Split() Method */

{
    let string = "String Split Method"

}