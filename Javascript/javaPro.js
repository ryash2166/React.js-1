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
    let date = new Date().toLocaleDateString();
    console.log(date);
}

/* 14. Reverse array javascript */

{
    let num = [1 , 2 , 3 , 4 , 5]
    num.reverse ()
    console.log(num);
}

/* 15. JavaScript concate or merge two Arrays */

{
    let num1 = [1 , 2 , 3 , 4 , 5]
    let num2 = [6 , 7 , 8 , 9 , 10]
    let num3 = num1.concat(num2)

    console.log(num3);
}

/* 16. Reverse String in JavaScript */

{
    let string = "Hello Reverse";
    let reverse = string.split('').reverse().join('');

    console.log(reverse);
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

{
    let array = ["1", "2", "3" , "4"];
    array.push("5");

    console.log(array);
}

{
    let a = ["1", "2", "3"];
    let b = ["4", "5", "6"];

    a.push.apply(a, b);

    console.log(a);
}

{
    let array = ["2", "3" , "4"];
    array.unshift("0" , "1");

    console.log(array);
}

/* 20. get current url javascript */

{
    console.log(window.location.href);  
}

/* 21. getElementsByClassName() method in JavaScript */

{
    // const allTitles = document.getElementsByClassName('title')

    // console.log(allTitles)
    // console.log(allTitles.length) 

    // for (let i = 0; i < allTitles.length; i++) {
    //     console.log(allTitles[i])
    // }
}

/* 22. getElementByTagName() method in JavaScript */

{
    // const element = document.getElementsByTagName('h1');
    // function addText(){
    //     for(let i = 0; i < element.length; i++ ){
    //         element[i].innerHTML = "Hello World!"
    //         element[i].style.color = "orange"
    //         element[i].style.background = "green"
    //     }
    // }
    // addText();
}

/* 23. Disable Browser back and forward button in browser using
JavaScript */

{
	// window.history.forward(); 
	// function noBack() { 
	// 	window.history.forward(); 
	// } 

}