/* 1. Display Alert in JavaScript */

// {
//     alert("Display Alert in JavaScript")
// }

/* 2. Display Confirmation box using JavaScript */

// {
//     confirm("Press a Button!");
// }

/* 3. Display Prompt box using JavaScript */

// {
//     prompt("Enter The Value.")
// }

/* 4. mouseover and mouseout in javascript */

// {
//     function mouseOver() { 
//         document.getElementById("demo").style.color = "red";
//     }
//     function mouseOut() {
//         document.getElementById("demo").style.color = "black";
//     }
// }

/* 5. Use keypress In JavaScript to Display Alerts */

// {
//     function keypress() {
//         alert("You pressed a key inside the input field")
//     }
// }

/* 6. JavaScript Validation Examples */

// {

// }

/* 7. Textbox required validation in javascript */
// {
//     function textbox() {
//         if (document.getElementById("textbox").value == "") {
//             alert("Must Enter a Name.")
//         }
//     }
// }

/* 8. Email validation in JavaScript */

{

}

/* 9. Letter Validation in JavaScript */

{

}

/* 10. Number Validation in JavaScript */

{

}

/* 11. Letter and Number Validation in JavaScript */

{

}

/* 12. IP Address Validation in JavaScript */

{

}

/* 13. Retrieve Today’s Date in JavaScript */

{
    // let date = new Date().toLocaleDateString();
    // console.log(date);
}

/* 14. Reverse array javascript */

{
    // let num = [1 , 2 , 3 , 4 , 5]
    // num.reverse ()
    // console.log(num);
}

/* 15. JavaScript concate or merge two Arrays */

{
    // let num1 = [1 , 2 , 3 , 4 , 5]
    // let num2 = [6 , 7 , 8 , 9 , 10]
    // let num3 = num1.concat(num2)

    // console.log(num3);
}

/* 16. Reverse String in JavaScript */

{
    // let string = "Hello Reverse";
    // let reverse = string.split('').reverse().join('');

    // console.log(reverse);
}

/* 17. JavaScript Open a page using window.open() method */

// {
//     function windowOpen() {
//         window.open("https://www.w3schools.com/js/");
//     }   
// }

/* 18. if else statement in JavaScript */

// {
//     let num = prompt("ENter NUmber between 1 to 10")

//     if (num <= 10) {
//         console.log("Input valid");
//     } else {
//         console.log("Input not valid");
//     }
// }

/* 19. Insert element in array javascript */

// {
    // let array = ["1", "2", "3" , "4"];
    // array.push("5");

    // console.log(array);
// }

// {
    // let a = ["1", "2", "3"];
    // let b = ["4", "5", "6"];

    // a.push.apply(a, b);

    // console.log(a);
// }

// {
    // let array = ["2", "3" , "4"];
    // array.unshift("0" , "1");

    // console.log(array);
// }

/* 20. get current url javascript */

// {
    // console.log(window.location.href);  
// }

/* 21. getElementsByClassName() method in JavaScript */

// {
    // const allTitles = document.getElementsByClassName('title')

    // console.log(allTitles)
    // console.log(allTitles.length) 

    // for (let i = 0; i < allTitles.length; i++) {
    //     console.log(allTitles[i])
    // }
// }

/* 22. getElementByTagName() method in JavaScript */

// {
    // const element = document.getElementsByTagName('h1');
    // function addText(){
    //     for(let i = 0; i < element.length; i++ ){
    //         element[i].innerHTML = "Hello World!"
    //         element[i].style.color = "orange"
    //         element[i].style.background = "green"
    //     }
    // }
    // addText();
// }

/* 23. Disable Browser back and forward button in browser using
JavaScript */

// {
	// window.history.forward(); 
	// function noBack() { 
	// 	window.history.forward(); 
	// } 

// }

/* 24. Disable back button in browser using javascript */

// {
//     function preventBack() { window.history.forward(); }  
//     setTimeout("preventBack()", 0);  
//     window.onunload = function () { null };
// }

/* 25. Disable Forward button in browser using JavaScript: */

/* 26. Disable Forward button in browser using JavaScript: */

/* 27. Disable Dropdown list using JavaScript */

// {
//     function disable() {
//         document.getElementById("disable").disabled = true;
//     }
//     function enable() {
//         document.getElementById("disable").disabled = false;
//     }
// }

/* 28. Enable Dropdown list using JavaScript Ans is In Q.27 */

/* 29. Disable mouse right click using javascript*/

// {
    
// }

/* 30. JavaScript Date Countdown Timer */

// {

// }

/* 31. Checkbox validation using JavaScript (javascript checkbox checked) */

{
    // function validate() {
    //     let checkbox = document.getElementById("check");
    //     let text = document.getElementById("con")

    //     if(checkbox.checked){
    //         text.innerHTML = "Thank You"
    //     }
    //     else{
    //         text.innerHTML = "Please Agree the Checkbox"
    //     }
    // }
}

/* 32. Get query string value in javascript */

// {
//     const urlParams = new URLSearchParams(window.location.search);
//     const myParam = urlParams.get('myParam');

//     console.log(myParam);
// }

/* 33. JavaScript get or set radio button value*/

// {
//     function check() {
//         var value = document.querySelector('input[name="season"]:checked')  

//         if(value != null){
//             document.getElementById("true").innerHTML = value.value + " season is selected"
//         }
//         else{
//             document.getElementById("error").innerHTML = "You have not selected any season"
//         }
//     }
// }

/* 36. JavaScript screen height */

// {
//     console.log("Screen Height is " + screen.height);
// }

/* 37. Auto refresh page javascript */

// {
//     function autoRefresh() {
//         window.location = window.location.href;
//     }
//     setInterval('autoRefresh()', 2000);
// }

/* 38. Convert Celsius Value to Farenheit Value in JavaScript */

// {
//     function Fahrenheit(){
//         let Celsius = 12.00;

//         console.log("Fahrenheit is" , (Celsius * 9/5) + 32 ); 

//     }
//     Fahrenheit();
// }

/* 39. javascript get today’s date */

// {
//     console.log(new Date());
// }

/* 40. Scroll Down Event in JavaScript */

// {
//     window.onwheel = e => {
//         if(e.deltaY >= 0){
//           // Wheel Down
//           console.log('Down');
//         } else {
//           // Wheel Up
//           console.log('Up');
//         }
//       }
// }

/* 41. JavaScript Animation example */

/* 42. Play and Pause video in JavaScript */

// {
//     let vid = document.getElementById("my")

//     function play() {
//         vid.play();
//     }
//     function pause() {
//         vid.pause();
//     }
// }

/* 43. Change background colour of div javascript */

// {
//     var color = [, "#3C9EE7", "#E7993C",
//     "#E73C99", "#3CE746", "#E7993C"];

// document.querySelector("div").addEventListener(
//     "mouseover", function () {

//         document.querySelector("div").style.background
//             = color[(Math.floor(Math.random() * color.length))];
//     })
// }

/* 44. Change the page colour in Every 5 sec in JavaScript */

// {
//     var i = 0;
// function change() {
//   var doc = document.getElementById("background");
//   var color = ["black", "blue", "brown", "green"];
//   doc.style.backgroundColor = color[i];
//   i = (i + 1) % color.length;
// }
// setInterval(change, 5000);
// }

/* 45. Display Message every 3 second using Javascript */

// {
//     let ele = document.getElementById("demo")

//     setInterval(function() { ele.innerHTML += "Hello "}, 3000);
// }

/* 46. JavaScript get max value in array of objects */

// {
//     let arr = [
//         {
//             a: 10,
//             b: 25
//         },
//         {
//             a: 30,
//             b: 5
//         }
//     ]

//     function fun(arr) {
//         let max = Number.MIN_VALUE;
//         for(let i = 0 ; i < arr.length ; i++){
//             if(arr[i].a > max){
//                 max = arr[i].a;
//             }
//         }
//         return max;
//     }

//     let max1 = fun(arr)

//     console.log(max1);
// }

/* 47. Sort and Reverse an array of Objects using JavaScript */

// {
//     let x = [{"score":3},{"score":1},{"score":2}]
//     let y = [...x].reverse();
//     console.log(y);
// }

/* 48. Find index of Largest value in An Array in JavaScript */

// {
//     var a = [0, 21, 22, 7];
//     var indexOfMaxValue = a.reduce((iMax, x, i, arr) => x > arr[iMax] ? i : iMax, 0);
//     console.log(indexOfMaxValue);
// }

/* 49. Try and Catch in JavaScript */

// {
//     try {

//         alert('Start of try runs'); 

//         alert('End of try runs');   
//       } catch (err) {
      
//         alert('Catch is ignored, because there are no errors'); // (3)
      
//       }

        // ERROR PROGRAM

//       try {

//         alert('Start of try runs'); 
//         lalala;
//         alert('End of try runs');   
//       } catch (err) {
      
//         alert('Catch is ignored, because there are no errors'); // (3)
      
//       }
// }

/* 50. Return Boolean value of an Integer In JavaScript */

// {
//     var boolvalue = prompt("Enter True of False")
//             // JavaScript program to illustrate boolean  
//             // conversion using ternary operator 
//             function myFunction() { 
//                 var i = boolvalue ? 1 : 0; 
//                 let a = i; 
//                 console.log(a);
//             } 
//             myFunction()
// }

/* 51. JavaScript Check an object is an array or not */

// {
//     let arr = [1 , 2 , 3]
//     let arr1 = Array.isArray(arr)

//     console.log(arr1);
//     console.log(typeof arr);
// }

/* 52. Display Table Number in JavaScript */

// {
//     const number = parseInt(prompt('Enter an integer: '));

//     for(let i = 1; i <= 10; i++) {

//         const result = i * number;
//         console.log(`${number} * ${i} = ${result}`);
//     }

// }

/* 53.  */