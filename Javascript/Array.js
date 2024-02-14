/* Javascript Array */  
{
    // let newarry = [1,false,"string"]
    // console.log(newarry)
    // console.log(newarry.length)
    
    // let newarry2 = ["Apple" , "Banana" , "Watermelon" ,  , "Lichi"]
    // console.log(newarry2)
    // console.log(newarry2[4])
    // console.log(Object.keys(newarry2))
    // console.log(newarry2.length)
    
    // newarry2.length = 10
    // console.log(newarry2)
    // console.log(Object.keys(newarry2))
    
    // newarry2[0] = "Graps"
    // console.log(newarry2)
    
    // let newstring  = newarry2.toString()
    // console.log(newstring)
    // console.log(typeof(newstring))
}

// Array length properties
// Accessing the First Array Element
// Accessing the Last Array Element
// Adding Array Elements
// Converting Arrays to Strings

/*
Array indexes start with 0:
[0] is the first array element
[1] is the second 
[2] is the third ...
*/


/* The length property provides an easy way to append new elements to an array without using the push() method.*/


/*****  Array Methods ********/

/* Array length properties */

{

    // let arry = ["option-1" , "gamit" , false , 1 , "skill" , "development"];
    // console.log(arry);
    // console.log(arry[0]);
    // console.log(arry[5]);
    // arry.push("frontend");  
    // console.log(arry);
    // arry.pop()
    // arry.pop()
    // arry.pop()
    // console.log(arry);
    
    // arry[0] = "one"
    
    // console.log(arry);
}


/* The length property provides an easy way to append new elements to an array without using the push() method.*/



/* The join() method also joins all array elements into a string. */

{
    // let arry1 = ["option-1" , "gamit" , false , 1 , "skill" , "development"];
    // let arry2 = arry1.join("+")
    // console.log(arry2);
    // console.log(typeof(arry2));
}

/* Popping in javascript Array */

{
    // const fruits = ["Banana", "Orange", "Apple", "Mango"];
    // document.getElementById("demo").innerHTML = fruits;
    
    // document.getElementById("demo-1").innerHTML =  fruits.pop();
    
    // console.log(fruits);
    
    // console.log(fruits.length);
}

/* The pop() method returns the value that was "popped out" */

{
    // const fruits1 = ["Banana", "Orange", "Apple", "Mango"]

    // document.getElementById("demo").innerHTML = fruits1
    
    // document.getElementById("demo-1").innerHTML = fruits1.pop()
    // document.getElementById("demo-2").innerHTML = fruits1.pop()
    // document.getElementById("demo-3").innerHTML = fruits1.pop()

    // console.log(fruits1)
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
    // const fruits3 = ["Banana", "Orange", "Apple", "Mango"]

    // document.getElementById("demo").innerHTML = fruits3.push("Kiwi")

    // document.getElementById("demo-1").innerHTML = fruits3.length
}

/* Shifting Elements */

/* JavaScript Array shift() */

/* The shift() method removes the first array element and "shifts" all other elements to a lower index */

{
    //  let arry3 = ["option-1" , "gamit" , false , 1 , "skill" , "development"]
    //  let arry4 = arry3.shift()
    //  let arry5 = arry3.shift()
    //  console.log(arry4)
    //  console.log(arry3)
    //  console.log(arry5) 
}

/*  The shift() method returns the value that was "shifted out" */

{
    // const fruits4 = ["Banana", "Orange", "Apple", "Mango"]
    // console.log(fruits4)
    // document.getElementById("demo").innerHTML = fruits4.shift()
    // document.getElementById("demo-1").innerHTML = fruits4
    // document.getElementById("demo-2").innerHTML = fruits4
    // document.getElementById("demo-3").innerHTML = fruits4
}

/*  JavaScript Array unshift() */
/* The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements */

{
    //  let arryy = ["option-1" , "gamit" , false , 1 , "skill" , "development"]
    //  arryy.unshift("OneAuthor")
    //  console.log(arryy)
}

/* The unshift() method returns the new array length */

{
    // const fruits5 = ["Banana", "Orange", "Apple", "Mango"]
    // document.getElementById("demo").innerHTML = fruits5.unshift("Lemon")
    // document.getElementById("demo-1").innerHTML = fruits5
}

/*  Changing Elements */

{
    // const fruits6 = ["Banana", "Orange", "Apple", "Mango"]
    // console.log(fruits6)

    // fruits6[10] = "Kiwi"
    // console.log(fruits6)
}

/* JavaScript Array add element */

{
    // const fruits7 = ["Banana", "Orange", "Apple", "Mango"]
    // document.getElementById("demo").innerHTML = fruits7

    // fruits7[fruits7.length] = "Kiwi"
    // document.getElementById("demo-1").innerHTML = fruits7
    // console.log(fruits7);
}

/* JavaScript Array delete() */

/* Array elements can be deleted using the JavaScript operator delete. */

/* Using delete leaves undefined holes in the array. */

/* Use pop() or shift() instead. */

{
        // let arrya = ["option-1" , "gamit" , false , 1 , "skill" , "development"]
        // console.log(arrya)
        // console.log(arrya.length)
        // delete arry[4]
        // console.log(arrya)
        // console.log(arrya.length)
        
        // arrya.length = 20
        // console.log(arrya)
        
        // arrya[16] = "skillQode"
        // console.log(arrya)
}
 
 /* Merging (Concatenating) Arrays */
 
{

    // let arry11 = ["javascript" , "c" , "c++" , "python" , "html" , "css"]
    // let arry22 = ["kotlin" , "dart" , "nodejs"  , "php" , "wordpress"]
    // let arry33 = ["boostrap" , "tailwind" , "reactjs" , "nextjs"]

    // let arry44 = arry11.concat(arry33 , arry22)

    // console.log(arry44)
  
}

 /* The concat() method does not change the existing arrays. It always returns a new array. */
 
 /* Splicing and Slicing Arrays */
 
 /* JavaScript Array splice() */


// splice(start)
// splice(start, deleteCount)
// splice(start, deleteCount, item1)
// splice(start, deleteCount, item1, item2)
// splice(start, deleteCount, item1, item2, /* …, */ itemN)
 
{
    // let arry1 = ["javascript" , "c" , "c++" , "python" , "html" , "css"];
    // console.log(arry1);

    // let arry2 = arry1.splice(3  , 3) /* splice(start, deleteCount) */
    // console.log(arry2);

    // let arry3 = arry1.splice(2 , 3 , "React" , "Angular")  /* splice(start, deleteCount, item1, item2) */
    // console.log(arry3);
    // console.log(arry1);

}
 

 
 /* JavaScript Array slice() */

// slice()
// slice(start)
// slice(start, end)
 
{
    // let arry1 = [45 , 89 , 21 , 2 , 57 , 23]
    // console.log(arry1);

    // let arry2 = arry1.slice(3) /* Start Slice */
    // console.log(arry2);

    // let arry3= arry1.slice(1 , 3) /* Start & End Slice */
    // console.log(arry3);
}
 
 /*  Array.isArray */
 
{
    // const numbers = [1, 2, 3, 4, 5]
    // console.log(Array.isArray(numbers));

    // const number = 100
    // console.log(Array.isArray(number));

    // console.log(Array.isArray(17));
}

 /*  javascript Sorting Array */
 
{
    // let arry1 = ["javascript" , "c" , "c++" , "python" , "html" , "Tailwind"];
    // console.log(arry1);
    // let arry2 = arry1.sort()
    // console.log(arry2);
}
 
 /*  Reversing array */
 
{
    // let arry1 = ["javascript" , "React" , "c++" , "python" , "html" , "css"];
    // console.log(arry1);
    // let arry2 = arry1.reverse();
    // console.log(arry2);
}
 
 /*  Number Sort */
 
{
    // let arry1 = [123 , 5 , 36 , 22  , 40 , 30 ]
    // console.log(arry1);

    // let arry2 = arry1.sort()
    // console.log(arry2);

    // let numbersorted = arry1.sort((a  , b) => a - b)
    // console.log(numbersorted);
}
 
 /*  javascript array map() */
 
{
    //  const number1 = [5 , 78 , 45  ,25];
    //  console.log(number1);

    //  const number2 = number1.map(myFunction);
    //  console.log(number2);

    //  const number3  = number2.sort((a, b) => a - b)
    //  console.log(number3);

    //  function myFunction(value){
    //      return value * 2;
    //  }
}

  /*  javascript Array flatMap() */
 
{

    // let flatmap = [1 , 2 , 3 ]

    // let flatmap1 = flatmap.flatMap((num) => num === 2 ? [2 , 1] : 3)

    // console.log(flatmap1);
}

 /* Javascript Array flat() */

{
    // let flatarray  = [11 , 22 , [33 , 44 , [55  , 66 ,[66 , 77]]]]
    // let flatmap2  = flatarray.flat(2)
    // console.log(flatmap2);
}

 /* javascript array filter() */
 
{

    // let filterarry = ["Super Bowl" , "NBA" , "Rugby"  , "IPL" , "FIFA" , "Tour de France"]
    // let filterarry2  = filterarry.filter((word)  => word.length < 12)
    // console.log(filterarry2);

    // let filterarry3 = filterarry2.sort()
    // console.log(filterarry3);
    
}